from django.shortcuts import render
from django.http import JsonResponse
import json
import os
from pprint import pprint
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Create your views here.
def landing_page(request):
    return render(request, 'cctti_webapp/components/landing_page.html')


def courses_page(request):
    return render(request, 'cctti_webapp/components/courses.html')


def applicant_registration(request):
    if request.method == 'POST':
        with open(os.path.join(BASE_DIR, 'cctti_webapp', 'static', 'cctti_webapp', 'js', 'verification_codes.json')) as f:
            data = json.load(f)
        pprint(data)

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

        data_list = [first_name, middle_name, last_name, house_street, barangay, district, province, city_municipality,
                     email_fb, contact, nationality, sex, civil_status, employment_status, birthdate, attainment,
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



        return JsonResponse({'message': 'ok'})
    return render(request, 'cctti_webapp/components/registration.html')

