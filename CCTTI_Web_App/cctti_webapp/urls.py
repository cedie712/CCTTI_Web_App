from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing_page, name='landing_page'),
    path('courses/', views.courses_page, name='courses'),
    path('registration/', views.applicant_registration, name='registration'),
    path('user_login/', views.user_login, name='user_login'),
    path('user_logout/', views.user_logout, name='user_logout'),
    path('main/', views.index, name='main'),
    path('applicants/', views.applicants, name='applicants'),
    path('verified_students/', views.verified_students, name='verified_students'),
    path('delete_application/', views.delete_application, name='delete_application'),
    path('fetch_applicant_stats/', views.applicant_stats, name='fetch_applicant_stats'),
    path('update_email/', views.update_email, name='update_email'),

    # path('404/', views.four_o_four, name='404'),
]
