# Generated by Django 2.1.4 on 2019-02-03 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cctti_webapp', '0003_remove_applicantinformation_applicant'),
    ]

    operations = [
        migrations.AddField(
            model_name='applicantinformation',
            name='reference_code',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
