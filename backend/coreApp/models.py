from django.db import models

class User(models.Model):
    username = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    
class Resume(models.Model):
    resumeID = models.CharField(max_length=255, unique=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)

class Education(models.Model):
    educationID = models.CharField(max_length=255, unique=True)
    resumeID = models.ForeignKey(Resume, on_delete=models.CASCADE)
    school_name = models.CharField(max_length=200)
    degree = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField()
    gpa = models.FloatField(max_length=100, blank=True, null=True)

class WorkExperience(models.Model):
    experienceID = models.CharField(max_length=255, unique=True)
    resumeID = models.ForeignKey(Resume, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=200)
    job_title = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField()
    job_description = models.TextField()

class ResumeToSkills(models.Model):
    resumeID = models.ForeignKey(Resume, on_delete=models.CASCADE)
    skillID = models.CharField(max_length=255, unique=True)
    #proficiency = models.CharField(max_length=255, unique=True)

class ListOfSkills(models.Model):
    skillID = models.CharField(max_length=255, unique=True)
    skill_name = models.CharField(max_length=200)

class Project(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()