from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
from django.utils import timezone


class User(AbstractUser):
    username = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    groups = models.ManyToManyField(
        Group,
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_name="userauth_user_set",
        related_query_name="userauth_user",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name="userauth_user_set",
        related_query_name="userauth_user",
    )
    
class Resume(models.Model):
    resumeID = models.CharField(max_length=255, unique=True, default='DefaultResumeID')
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='resumes')

class Education(models.Model):
    educationID = models.CharField(max_length=255, unique=True, default='DefaultEduID')
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='educations')
    school_name = models.CharField(max_length=200, default='Default School')
    degree = models.CharField(max_length=200, default='Default Degree')
    start_date = models.DateField(default=timezone.now)
    end_date = models.DateField(default=timezone.now)
    gpa = models.FloatField(max_length=100, blank=True, null=True, default=0.0)

class WorkExperience(models.Model):
    experienceID = models.CharField(max_length=255, unique=True, default='DefaultExpID')
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='work_experiences')
    company_name = models.CharField(max_length=200, default='Default Company')
    job_title = models.CharField(max_length=200, default='Default Job Title')
    start_date = models.DateField(default=timezone.now)
    end_date = models.DateField(default=timezone.now)
    job_description = models.TextField(default='Default Description')

class ResumeToSkills(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='resume_skills')
    skillID = models.CharField(max_length=255, unique=True, default='DefaultSkillID')
    # proficiency remains commented out

class ListOfSkills(models.Model):
    skillID = models.CharField(max_length=255, unique=True, default='DefaultSkillID')
    skill_name = models.CharField(max_length=200, default='Default Skill')

class Project(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE, related_name='projects')
    title = models.CharField(max_length=200, default='Default Project Title')
    description = models.TextField(default='Default Project Description')