# Generated by Django 4.2.5 on 2024-01-22 22:19

import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('UserAuth', '0002_listofskills_remove_resume_age_remove_resume_name_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'verbose_name': 'user', 'verbose_name_plural': 'users'},
        ),
        migrations.AlterModelManagers(
            name='user',
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.RemoveField(
            model_name='education',
            name='resumeID',
        ),
        migrations.RemoveField(
            model_name='resumetoskills',
            name='resumeID',
        ),
        migrations.RemoveField(
            model_name='workexperience',
            name='resumeID',
        ),
        migrations.AddField(
            model_name='education',
            name='resume',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='educations', to='UserAuth.resume'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='resumetoskills',
            name='resume',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='resume_skills', to='UserAuth.resume'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='date_joined',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined'),
        ),
        migrations.AddField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='first name'),
        ),
        migrations.AddField(
            model_name='user',
            name='groups',
            field=models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='userauth_user_set', related_query_name='userauth_user', to='auth.group', verbose_name='groups'),
        ),
        migrations.AddField(
            model_name='user',
            name='is_active',
            field=models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active'),
        ),
        migrations.AddField(
            model_name='user',
            name='is_staff',
            field=models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status'),
        ),
        migrations.AddField(
            model_name='user',
            name='is_superuser',
            field=models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status'),
        ),
        migrations.AddField(
            model_name='user',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True, verbose_name='last login'),
        ),
        migrations.AddField(
            model_name='user',
            name='last_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='last name'),
        ),
        migrations.AddField(
            model_name='user',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='userauth_user_set', related_query_name='userauth_user', to='auth.permission', verbose_name='user permissions'),
        ),
        migrations.AddField(
            model_name='workexperience',
            name='resume',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='work_experiences', to='UserAuth.resume'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='education',
            name='degree',
            field=models.CharField(default='Default Degree', max_length=200),
        ),
        migrations.AlterField(
            model_name='education',
            name='educationID',
            field=models.CharField(default='DefaultEduID', max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='education',
            name='end_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='education',
            name='gpa',
            field=models.FloatField(blank=True, default=0.0, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='education',
            name='school_name',
            field=models.CharField(default='Default School', max_length=200),
        ),
        migrations.AlterField(
            model_name='education',
            name='start_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='listofskills',
            name='skillID',
            field=models.CharField(default='DefaultSkillID', max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='listofskills',
            name='skill_name',
            field=models.CharField(default='Default Skill', max_length=200),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.TextField(default='Default Project Description'),
        ),
        migrations.AlterField(
            model_name='project',
            name='resume',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projects', to='UserAuth.resume'),
        ),
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(default='Default Project Title', max_length=200),
        ),
        migrations.AlterField(
            model_name='resume',
            name='resumeID',
            field=models.CharField(default='DefaultResumeID', max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='resume',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='resumes', to='UserAuth.user'),
        ),
        migrations.AlterField(
            model_name='resumetoskills',
            name='skillID',
            field=models.CharField(default='DefaultSkillID', max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='company_name',
            field=models.CharField(default='Default Company', max_length=200),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='end_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='experienceID',
            field=models.CharField(default='DefaultExpID', max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='job_description',
            field=models.TextField(default='Default Description'),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='job_title',
            field=models.CharField(default='Default Job Title', max_length=200),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='start_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
