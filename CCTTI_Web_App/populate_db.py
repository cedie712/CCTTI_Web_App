import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CCTTI_Web_App.settings')
from django.core.wsgi import get_wsgi_application
app = get_wsgi_application()
import subprocess
import shlex
from datetime import datetime, timedelta
import time
from pytz import timezone
from cctti_webapp.models import ApplicantInformation
from random import randint

#
# for i in range(246):
#     now = datetime.now() + timedelta(days=1)
#
#     date_str = now.strftime("%d %b %Y %H:%M:%S")
#
#     subprocess.call(shlex.split("sudo date -s '%s'" % date_str))
#     subprocess.call(shlex.split("sudo hwclock -w"))
#
#     applicant_object = ApplicantInformation.objects.create(
#         is_verified=False,
#         reference_code=randint(111111, 999999),
#         sign_up_date=datetime.now(timezone('UTC')),
#         first_name='Testfname' + str(i),
#         middle_name='Testmname' + str(i),
#         last_name='Testlname' + str(i),
#         house_number_street='233',
#         barangay='Mangino',
#         district='IV',
#         city_municipality='Gapan City',
#         province='Nueva Ecija',
#         region='III',
#         email_address_or_fb='test@gmail.com',
#         contact_number='09340923333',
#         nationality='Filipino',
#         gender='male',
#         civil_status='single',
#         employment_status='unemployed',
#         birth_date=datetime.now().strftime("%B-%d-%Y"),
#         birth_place_city_municipality='Gapan City',
#         birth_place_province='Nueva Ecija',
#         birth_place_region='III',
#         educational_attainment='College Undergraduate',
#         client_classification='Overseas Filipino Worker',
#         has_taken=False,
#         course='Electronic Product Assembly and Servicing NCII'
#     )
#     applicant_object.save()
#
#     print(date_str)


# applicant_objects = ApplicantInformation.objects.filter(is_verified=False)
# applicant_objects.delete()