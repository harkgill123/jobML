from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from UserAuth.models import JobPosting
from .serializers import  JobPostingCreateSerializer
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from django.db.models import Q
from UserAuth.models import User, Resume, ResumeToSkills, Education, WorkExperience, Project
from django.contrib.auth import get_user_model
import jwt,os
from django.core.serializers import serialize

def getUserFromRequest(request):
    auth_header = request.META.get('HTTP_AUTHORIZATION')
    token = auth_header.split(" ")[1]
    decoded_token = jwt.decode(token, os.environ.get('JWT_SECRET_KEY'), algorithms=["HS256"])
    user_id = decoded_token['id']
    user = get_user_model().objects.get(id=user_id)
    return user

class JobPostingListView(APIView):
    # permission_classes = [IsAuthenticated] 

    def get(self, request, *args, **kwargs):
        user = getUserFromRequest(request=request)
        job_postings = JobPosting.objects.filter(user_id=user.id)

        jobs_json = serialize('json', job_postings)
        print(jobs_json)
        return JsonResponse({'jobs': jobs_json}, safe=False)

class JobPostingCreateView(APIView):
    def post(self, request, *args, **kwargs):
        # Debugging: Print the received request data
        print("Received POST request data:", request.data)

        # Initialize the serializer with request data and context including the user
        serializer = JobPostingCreateSerializer(data=request.data, context={'user': request.user})

        if serializer.is_valid():
            job_posting = serializer.save()

            # Debugging: Confirm job posting has been created and display associated skills
            print("Job posting created with ID:", job_posting.id)
            print("Associated skills:", [skill.skill_name for skill in job_posting.skills.all()])

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            # Debugging: Log serializer errors if the data is invalid
            print("Serializer validation errors:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        
@csrf_exempt  
def search_applicants(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        query = data.get('q', '')
    else:
        query = request.GET.get('q', '')

    if query:
        applicants = User.objects.filter(
            Q(user_type=User.UserType.APPLICANT) & (
                Q(name__icontains=query) |
                Q(email__icontains=query) |
                Q(resumes__resume_skills__skill_name__icontains=query) |
                Q(resumes__educations__school_name__icontains=query) |
                Q(resumes__work_experiences__company_name__icontains=query) |
                Q(resumes__projects__title__icontains=query)
            )
        ).distinct().prefetch_related('resumes__resume_skills', 'resumes__educations', 'resumes__work_experiences', 'resumes__projects')
    else:
        applicants = User.objects.filter(user_type=User.UserType.APPLICANT).prefetch_related('resumes__resume_skills', 'resumes__educations', 'resumes__work_experiences', 'resumes__projects')

    applicants_list = []
    for applicant in applicants:
        applicant_dict = {
            'name': applicant.name,
            'email': applicant.email,
            'phone_number': applicant.phone_number,
            'skills': [],
            'educations': [],
            'work_experiences': [],
            'projects': []
        }
        
        resume = applicant.resumes.first()
        if resume:
            applicant_dict['skills'] = list(resume.resume_skills.values('skill_name'))
            applicant_dict['educations'] = list(resume.educations.values('school_name', 'degree', 'start_date', 'end_date', 'gpa'))
            applicant_dict['work_experiences'] = list(resume.work_experiences.values('company_name', 'job_title', 'start_date', 'end_date', 'job_description'))
            applicant_dict['projects'] = list(resume.projects.values('title', 'description'))

        applicants_list.append(applicant_dict)

    return JsonResponse({'applicants': applicants_list})

class UploadJob:

    def upload(self,data):
        print("HERE")
        serialzer=JobPostingCreateSerializer(data=data)

        if serialzer.is_valid():
            serialzer.save()
            return True
        else:
            return False
        