from django.shortcuts import render

# Create your views here.
def landing_page(request):
    return render(request, 'cctti_webapp/components/landing_page.html')



