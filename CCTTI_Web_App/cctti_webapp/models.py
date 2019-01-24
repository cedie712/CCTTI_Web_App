from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class UserExt(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)


class ApplicantInformation(models.Model):
    is_verified = models.BooleanField(default=False)
    sign_up_date = models.DateTimeField(blank=True, null=True)

    # Manpower Profile
    applicant = models.ForeignKey(UserExt, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=128, blank=True, null=True)
    middle_name = models.CharField(max_length=128, blank=True, null=True)
    last_name = models.CharField(max_length=128, blank=True, null=True)
    house_number = models.CharField(max_length=128, blank=True, null=True)
    street = models.CharField(max_length=128, blank=True, null=True)
    barangay = models.CharField(max_length=128, blank=True, null=True)
    district = models.CharField(max_length=128, blank=True, null=True)
    city_municipality = models.CharField(max_length=128, blank=True, null=True)
    province = models.CharField(max_length=128, blank=True, null=True)
    region = models.CharField(max_length=128, blank=True, null=True)
    email_address = models.CharField(max_length=128, blank=True, null=True)
    fb_account = models.CharField(max_length=128, blank=True, null=True)
    contact_number = models.CharField(max_length=128, blank=True, null=True)
    nationality = models.CharField(max_length=128, blank=True, null=True)

    # Personal Information
    applicant = models.ForeignKey(UserExt, on_delete=models.CASCADE)
    gender = models.CharField(max_length=128, blank=True, null=True)
    civil_status = models.CharField(max_length=128, blank=True, null=True)
    employment_status = models.CharField(max_length=128, blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    birth_place_city_municipality = models.CharField(max_length=128, blank=True, null=True)
    birth_place_province = models.CharField(max_length=128, blank=True, null=True)
    birth_place_region = models.CharField(max_length=128, blank=True, null=True)
    educational_attainment = models.CharField(max_length=128, blank=True, null=True)

    # Client's Classification
    client_classification = models.CharField(max_length=128, blank=True, null=True)

    # has taken NCAE/YP4SC before?
    has_taken = models.BooleanField(default=False)
    taken_this_where = models.CharField(max_length=128, blank=True, null=True)
    taken_this_when = models.DateField(blank=True, null=True)

    # Course
    course = models.CharField(max_length=128, blank=True, null=True)
