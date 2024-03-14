# Generated by Django 4.2.5 on 2024-03-13 19:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('UserAuth', '0018_remove_employmenttype_job_posting_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='jobposting',
            name='creator',
        ),
        migrations.AddField(
            model_name='jobposting',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='creator', to=settings.AUTH_USER_MODEL),
        ),
         migrations.CreateModel(
            name='ModelVersionResume',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model_version', models.CharField(default='0', max_length=255)),
                ('latest_version', models.CharField(default='0', max_length=255)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='model_version_resume', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='modelversionresume',
            name='user',
        ),
        migrations.AddField(
            model_name='modelversionresume',
            name='job_posting',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='model_version', to='UserAuth.jobposting'),
        ),
        migrations.AlterField(
            model_name='modelversionresume',
            name='job_posting',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='model_version_resume', to='UserAuth.jobposting'),
        ),
    ]
