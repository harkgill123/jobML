# Generated by Django 4.2.5 on 2024-02-12 20:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('UserAuth', '0006_jobposting_experience_required_jobposting_skills_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='benefits',
            name='benefitID',
        ),
        migrations.RemoveField(
            model_name='employmenttype',
            name='typeID',
        ),
        migrations.RemoveField(
            model_name='jobposting',
            name='jobID',
        ),
        migrations.RemoveField(
            model_name='jobrequirements',
            name='requirementID',
        ),
        migrations.RemoveField(
            model_name='jobtoskills',
            name='skillID',
        ),
        migrations.RemoveField(
            model_name='listofskills',
            name='skillID',
        ),
    ]