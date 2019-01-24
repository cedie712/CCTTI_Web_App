from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class UserExt(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)


class Applicant(models.Model):
    is_verified = models.BooleanField(default=False)


class ManPowerProfile(models.Model):
    first_name = models.CharField(max_length=128, blank=True, null=True)
    middle_name = models.CharField(max_length=128, blank=True, null=True)
    last_name = models.CharField(max_length=128, blank=True, null=True)