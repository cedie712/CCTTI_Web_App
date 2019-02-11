from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing_page, name='landing_page'),
    path('courses/', views.courses_page, name='courses'),
    path('registration/', views.applicant_registration, name='registration'),
    path('main/', views.index, name='main'),
    path('applicants/', views.applicants, name='applicants'),
]
