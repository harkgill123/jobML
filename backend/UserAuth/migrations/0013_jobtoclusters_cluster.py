# Generated by Django 4.2.5 on 2024-02-24 02:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserAuth', '0012_jobtoclusters'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobtoclusters',
            name='cluster',
            field=models.CharField(default='defaultcluster', max_length=255, unique=True),
        ),
    ]