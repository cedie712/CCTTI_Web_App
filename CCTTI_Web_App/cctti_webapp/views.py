from django.shortcuts import render, HttpResponse


# Create your views here.
def landing_page(request):
    return render(request, 'cctti_webapp/components/landing_page.html')


def courses_page(request):
    return render(request, 'cctti_webapp/components/courses.html')


def applicant_registration(request):
    if request.method == 'POST':
        return HttpResponse('fucker')
    return render(request, 'cctti_webapp/components/registration.html')

