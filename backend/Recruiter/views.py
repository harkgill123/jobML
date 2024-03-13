from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from UserAuth.models import JobPosting
from .serializers import JobPostingSerializer, JobPostingCreateSerializer
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from django.db.models import Q
from UserAuth.models import User, Resume, ResumeToSkills, Education, WorkExperience, Project
from django.contrib.auth import get_user_model
import jwt,os

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
        job_postings = JobPosting.objects.filter(creator=user).prefetch_related(
            'requirements', 'job_skills', 'benefits', 'employment_type'
        )
        serializer = JobPostingSerializer(job_postings, many=True)
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)

class JobPostingCreateView(APIView):
    # permission_classes = [IsAuthenticated] 

    def post(self, request, *args, **kwargs):
        print("Request Data:", request.data)  # Add this line to log incoming request data
        user = getUserFromRequest(request=request)
        context = {'request': request, 'user': user}
        serializer = JobPostingCreateSerializer(data=request.data, context=context)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print("Errors:", serializer.errors)  # Add this line to log validation errors
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
        