from django.shortcuts import render
from django.http import JsonResponse

# Models
from . models import ApplicantInformation

from threading import Thread

import json
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
from random import randint
from datetime import datetime, date
from pytz import timezone
from dateutil.parser import parse
from django.core.mail import send_mail
from functools import partial


# custom functions
def send_mail_thread(recipient, subject, msg):
    mail_object = {
        'subject': subject,
        'msg': msg,
        'recipient': recipient
    }
    threadx = Thread(target=partial(send_mail_single, mail_object))
    threadx.start()


def send_mail_single(mail_object):
    send_mail(
        mail_object['subject'],
        mail_object['msg'],
        'CCTTI',
        [mail_object['recipient']],
        fail_silently=True,
    )


# Create your views here.
def landing_page(request):
    return render(request, 'cctti_webapp/components/landing_page.html')


def courses_page(request):
    return render(request, 'cctti_webapp/components/courses.html')


def applicant_registration(request):
    if request.method == 'POST':
        # form data 1
        first_name = request.POST['first_name']
        middle_name = request.POST['middle_name']
        last_name = request.POST['last_name']
        house_street = request.POST['house_street']
        barangay = request.POST['barangay']
        district = request.POST['district']
        province = request.POST['province']
        city_municipality = request.POST['city_municipality']
        email_fb = request.POST['email_fb']
        contact = request.POST['contact']
        nationality = request.POST['nationality']

        # form data 2
        sex = request.POST['sex']
        civil_status = request.POST['civil_status']
        employment_status = request.POST['employment_status']
        birthdate = request.POST['birthdate']
        attainment = request.POST['attainment']
        birthplace_province = request.POST['birthplace_province']
        birthplace_city_municipality = request.POST['birthplace_city_municipality']

        # form data 3
        client_classification = request.POST['client_classification']
        taken_ncae = request.POST['taken_ncae']
        where_ncae = request.POST['where_ncae']
        when_ncae = request.POST['when_ncae']
        course = request.POST['course']

        has_taken_ncae = False

        # verification code
        v_code = randint(100000, 900000)
        # with open(os.path.join(BASE_DIR, 'cctti_webapp', 'verification_codes.json'), 'r') as v_codes:
        #     data = json.load(v_codes)

        applicant_objects = ApplicantInformation.objects.all()

        v_codes_list = []

        for i in applicant_objects:
            v_codes_list.append(i.reference_code)

        while v_code in v_codes_list:
            v_code = randint(100000, 900000)

        # with open(os.path.join(BASE_DIR, 'cctti_webapp', 'verification_codes.json'), 'w+') as v_codes:
        #     data['verification_codes'].append(v_code)
        #     v_codes.write(json.dumps(data))
        # verification code

        data_list = [first_name, middle_name, last_name, house_street, barangay, district, province, city_municipality,
                     contact, nationality, sex, civil_status, employment_status, birthdate, attainment,
                     birthplace_province, birthplace_city_municipality, client_classification, taken_ncae, course]

        if request.POST['taken_ncae'] == 'yes':
            data_list.append(where_ncae)
            data_list.append(when_ncae)
            has_taken_ncae = True
        if any(i == '' for i in data_list):
            print('bad request')
            data = {'message': 'bad request'}
            return JsonResponse(data)

        # Save to db here
        applicant_info_object = ApplicantInformation.objects.create(
            is_verified=False,
            reference_code=v_code,
            sign_up_date=datetime.now(timezone('UTC')),
            first_name=first_name.capitalize(),
            middle_name=middle_name.capitalize(),
            last_name=last_name.capitalize(),
            house_number_street=house_street,
            barangay=barangay,
            district=district,
            city_municipality=city_municipality,
            province=province.split(' - ')[0],
            region=province.split(' - ')[1],
            email_address_or_fb=email_fb,
            contact_number=contact,
            nationality=nationality,

            gender=sex,
            civil_status=civil_status,
            employment_status=employment_status,
            birth_date=parse(birthdate).strftime("%B-%d-%Y"),
            birth_place_city_municipality=birthplace_city_municipality,
            birth_place_province=birthplace_province.split(' - ')[0],
            birth_place_region=birthplace_province.split(' - ')[1],
            educational_attainment=attainment,

            client_classification=client_classification,

            has_taken=has_taken_ncae,
            taken_this_when=when_ncae,
            taken_this_where=where_ncae,

            course=course
        )

        applicant_info_object.save()

        send_mail_thread(email_fb, 'CCTTI Application Process',
                         'Reference Code: %i \n Hello %s!. Visit us at 3rd Floor, Planters Bldg, Tinio Street, San Vicente, Gapan City, '
                         'Nueva Ecija to complete your registration process. Present the reference code to us so we can'
                         ' process your application faster. Thank You! \n Bring the following requirements:\n '
                         'Transcript of Records or Diploma \nGood Moral Certificate\n'
                            '2pcs. Passport Size Latest Photo of You\n'
                            '2pcs. 1*1 Latest Photo of You (white background, with collared clothes)\n'
                            'Copy of NSO or PSA' % (v_code, first_name))

        return JsonResponse({'message': 'ok', 'verification_code': v_code})

    return render(request, 'cctti_webapp/components/registration.html')


# # # # # # # # # # # STAFF PAGES # # # # # # # # # # #

def index(request):
    context = {}
    applicant_count = len(ApplicantInformation.objects.all().exclude(is_verified=True))
    context['applicant_count'] = applicant_count
    verified_student_count = len(ApplicantInformation.objects.all().exclude(is_verified=False))
    context['verified_student_count'] = verified_student_count
    return render(request, 'cctti_webapp/components/staff_index.html', context=context)


def applicants(request):
    applicant_objects = ApplicantInformation.objects.all().exclude(is_verified=True)

    middle_char = '*'

    for i in applicant_objects:
        if i.middle_name is not None or i.middle_name != '':
            middle_char = i.middle_name[0]
        i.FFM =  ('%s%s%s' % (i.last_name[0], i.first_name[0], middle_char)).upper()
        i.YY = i.birth_date[-2:]

    # POST
    if request.method == 'POST':
        applicant_id = request.POST['applicant_id']

        ULI = request.POST['uli']

        print(applicant_id)
        print(ULI)

        xmm = ULI.split('-')[2]
        rrppp = ULI.split('-')[3]
        overflow = ULI.split('-')[4]

        valid_char = '0123456789'

        for i in xmm:
            if i not in valid_char:
                return JsonResponse({'message': 'bad request'})

        for i in rrppp:
            if i not in valid_char:
                return JsonResponse({'message': 'bad request'})

        for i in overflow:
            if i not in valid_char:
                return JsonResponse({'message': 'bad request'})

        if len(xmm) != 3 or len(rrppp) != 4 or len(overflow) != 3:
            return JsonResponse({'message': 'bad request'})

        check_uli_existence = ApplicantInformation.objects.filter(unified_learner_id=ULI).exists()

        if check_uli_existence:
            return JsonResponse({'message': 'duplicate uli'})

        applicant_object = ApplicantInformation.objects.get(id=applicant_id)
        applicant_object.entry_date = datetime.now(timezone('UTC'))
        applicant_object.is_verified = True
        applicant_object.unified_learner_id = ULI
        applicant_object.save()

        return JsonResponse({'message': 'ok'})

    return render(request, 'cctti_webapp/components/applicants_view.html',
                  context={'applicant_objects': applicant_objects})


def verified_students(request):
    verified_students_objects = ApplicantInformation.objects.all().exclude(is_verified=False)

    for i in verified_students_objects:
        today = date.today()
        age = today.year - parse(i.birth_date).year\
              - ((today.month, today.day) < (parse(i.birth_date).month, parse(i.birth_date).day))
        i.age = age
        try:
            i.entry_date_formatted = i.entry_date.strftime('%b %d, %Y')
        except:
            i.entry_date_formatted = 'None'

    return render(request, 'cctti_webapp/components/verified_student_view.html',
                  context={'verified_students_objects': verified_students_objects})

# # # # # # # # # # # STAFF PAGES # # # # # # # # # # #
