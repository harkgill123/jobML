# Generated by Django 4.2.5 on 2024-02-24 02:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserAuth', '0009_jobtoclusters'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='jobtoclusters',
            name='job_posting',
        ),
        migrations.AddField(
            model_name='jobtoclusters',
            name='cluster',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
