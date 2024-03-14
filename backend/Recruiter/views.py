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
from UserAuth.models import User, Resume, ResumeToSkills, Education, WorkExperience, Project, ModelVersionResume
from django.contrib.auth import get_user_model
import jwt,os
from django.core.serializers import serialize
from django.core import serializers
from Recruiter.recommendations_resume import give_suggestions, update_user_feedback


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
    # permission_classes = [IsAuthenticated] 

    def post(self, request, *args, **kwargs):
        print("Request Data:", request.data)  # Add this line to log incoming request data
        user = getUserFromRequest(request=request)
        serializer = JobPostingCreateSerializer(data=request.data,  context={'user': user})
        if serializer.is_valid():
            serializer.save()
            print("Serialized Data:", serializer.data)
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
        
def sendRecommendationsToFrontEnd(request):
    user = getUserFromRequest(request)
    ModelVersionEntry = ModelVersionResume.objects.get(user=user)
    resumeModel = ModelVersionEntry.model_version
    latestModel = ModelVersionEntry.latest_version
    if resumeModel != latestModel:
        recommended_jobs(request)
    return get_recommendations(request) 

def recommended_jobs(request):
    user_ids = []
    user = getUserFromRequest(request=request)
    job_posting = JobPosting.objects.filter(job_posting_id = request.job_id)
    try:
        job_skills = job_posting.resume_skills.all()
        job_skills_texts = [skill.skill_name for skill in job_skills]
        job_title = job_posting.job_title
        job_desc = job_posting.job_description

        suggestions_list = give_suggestions(job_posting.id, job_title, job_desc,' '.join(job_skills_texts))
        print(f"suggestions_list: {suggestions_list}")
        print(f"Inital recommendations complete")
        
        return JsonResponse({"success: recommended_jobs"})     
    except Resume.DoesNotExist:
        return JsonResponse({"error": "User does not have a resume"}, status=400)

@csrf_exempt
def update_feedback(request):
    try:
        data = json.loads(request.body)
        user = getUserFromRequest(request=request)
        
        job_id = data.get('job_id')
        feedback = data.get('feedback')
        
        update_user_feedback(user_id=user.id, job_id=job_id, feedback=int(feedback))

        return JsonResponse({"message": "Feedback updated successfully"}, status=200)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

def get_recommendations(request):
    from Recruiter.recommendations_resume import top_recommendations
    user = getUserFromRequest(request=request)
    job_posting = JobPosting.objects.filter(job_posting_id = request.job_id)
    
    try:
        top_entries = top_recommendations(job_posting_id=job_posting.id)
        user_ids = [suggestion['user_id'] for suggestion in top_entries]
        users = User.objects.filter(id__in=user_ids).values_list('id', 'name')
        user_mapping = {user_id: name for user_id, name in users}
        ordered_user_names = [user_mapping[user_id] for user_id in user_ids if user_id in user_mapping]
        serialized_users = serializers.serialize('json', ordered_user_names)
        return JsonResponse({"recommended_users": serialized_users})
    except Resume.DoesNotExist:
        return JsonResponse({"error": "user couldnt be found"}, status=400)