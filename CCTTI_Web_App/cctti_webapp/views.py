from django.shortcuts import render
from django.http import JsonResponse
import json
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
from random import randint
from . models import ApplicantInformation
from datetime import datetime
from pytz import timezone
from dateutil.parser import parse
from django.core.mail import send_mail


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
        with open(os.path.join(BASE_DIR, 'cctti_webapp', 'verification_codes.json'), 'r') as v_codes:
            data = json.load(v_codes)

        while v_code in data['verification_codes']:
            v_code = randint(100000, 900000)

        with open(os.path.join(BASE_DIR, 'cctti_webapp', 'verification_codes.json'), 'w+') as v_codes:
            data['verification_codes'].append(v_code)
            v_codes.write(json.dumps(data))
        # verification code

        data_list = [first_name, middle_name, last_name, house_street, barangay, district, province, city_municipality,
                     contact, nationality, sex, civil_status, employment_status, birthdate, attainment,
                     birthplace_province, birthplace_city_municipality, client_classification, taken_ncae, course]

        if request.POST['taken_ncae'] == 'yes':
            data_list.append(where_ncae)
            data_list.append(when_ncae)
            has_taken_ncae = True
        print(data_list)
        if any(i == '' for i in data_list):
            print('bad request')
            data = {'message': 'bad request'}
            return JsonResponse(data)

        # Save to db here
        print(birthdate)
        applicant_info_object = ApplicantInformation.objects.create(
            is_verified=False,
            reference_code=v_code,
            sign_up_date=datetime.now(timezone('UTC')),
            first_name=first_name,
            middle_name=middle_name,
            last_name=last_name,
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

        send_mail(
            'CCTTI Application Process',
            'Reference Code: %i \n Visit us at 3rd Floor, Planters Bldg, Tinio Street, San Vicente, Gapan City, '
            'Nueva Ecija to complete your registration process. Present the reference code to us so we can process your '
            'application faster. Thank You!' % v_code,
            'CCTTI',
            [email_fb],
            fail_silently=True,
        )

        return JsonResponse({'message': 'ok', 'verification_code': v_code})

    return render(request, 'cctti_webapp/components/registration.html')

