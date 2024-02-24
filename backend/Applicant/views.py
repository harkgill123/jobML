from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from django.core.files.storage import default_storage
from Applicant.serializers import ResumeSerializer
from rest_framework.permissions import IsAuthenticated
from UserAuth.models import Resume
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from coreApp.ResumeScraper.resume import ResumeExtractor
import logging
from django.contrib.postgres.aggregates import ArrayAgg
import jwt,os
from django.contrib.auth import get_user_model
from django.db.models import Prefetch

from UserAuth.models import Resume,JobPosting,ListOfSkills
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.db.models import CharField, Value as V
from django.db.models.functions import Concat

class ResumeUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        file_obj = request.FILES['file']
        file_path = default_storage.save('uploads/' + file_obj.name, file_obj)
        full_file_path = default_storage.path(file_path)

        
        # scraped_data = scrape_resume_data(full_file_path)  # This needs to be implemented
        extractor = ResumeExtractor()
        scraped_data = extractor.extract_all(filename=full_file_path)
        return Response(scraped_data, status=status.HTTP_200_OK)

logger = logging.getLogger(__name__)

class ResumeCreateView(APIView):

    def post(self, request, *args, **kwargs):
        auth_header = request.META.get('HTTP_AUTHORIZATION')
        token = auth_header.split(" ")[1]
        decoded_token = jwt.decode(token, os.environ.get('JWT_SECRET_KEY'), algorithms=["HS256"])
        user_id = decoded_token['id']
        user = get_user_model().objects.get(id=user_id)
        print(request.data)

        serializer = ResumeSerializer(data=request.data, context={'user': user})
        if serializer.is_valid():
            serializer.save(user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            # Log the errors
            logger.error("ResumeCreateView: Validation failed with errors: %s", serializer.errors)
            
            # Respond with the error details
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @login_required
# def recommended_jobs_view(request):
#     try:
#         user_resume = Resume.objects.get(user=request.user)
#         user_skills = user_resume.resume_skills.all()
        
#         skill_ids = [skill.skillID for skill in user_skills]
        

#         matching_jobs = Job.objects.filter(required_skills__skillID__in=skill_ids).distinct()
        
#         jobs_data = [
#             {"jobID": job.jobID, "job_title": job.job_title, "company_name": job.company_name, "job_description": job.job_description}
#             for job in matching_jobs
#         ]
        
#         return JsonResponse({"recommended_jobs": jobs_data})
#     except Resume.DoesNotExist:
#         return JsonResponse({"error": "User does not have a resume"}, status=400)
        # print(serializer.errors)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def create_model():
    # Fetch the job postings and prefetch the related skills
    jobpostings = JobPosting.objects.prefetch_related('skills')

    # Transform the job postings into the desired structure
    jobpostings_list = []
    for jp in jobpostings:
        skills = list(jp.skills.values_list('skill_name', flat=True))
        jobpostings_list.append({
            'id': jp.id,
            'title': jp.title,
            'job_description': jp.job_description,
            'skills': skills,
        })

    return jobpostings_list

def create_clustered_model():
    # Fetch the job postings and prefetch the related skills
    jobpostings = JobPosting.objects.prefetch_related('skills')

    # Transform the job postings into the desired structure
    jobpostings_list = []
    for jp in jobpostings:
        skills = list(jp.skills.values_list('skill_name', flat=True))
        cluster = jp.job_cluster.first().cluster if jp.job_cluster.exists() else 'No Cluster'

        jobpostings_list.append({
            'id': jp.id,
            'title': jp.title,
            'job_description': jp.job_description,
            'skills': skills,
            'cluster_no':cluster
        })

    return jobpostings_list

@login_required
def recommended_jobs_view(request):
    try:
        user_resume = Resume.objects.get(user=request.user)
        user_skills = user_resume.resume_skills.all()
        
        skill_ids = [skill.skillID for skill in user_skills]

       # matching_jobs = Job.objects.filter(required_skillsskillIDin=skill_ids).distinct()

        jobs_data = [
            {"jobID": job.jobID, "job_title": job.job_title, "company_name": job.company_name, "job_description": job.job_description}
            for job in matching_jobs
        ]
        
        return JsonResponse({"recommended_jobs": jobs_data})
    except Resume.DoesNotExist:
        return JsonResponse({"error": "User does not have a resume"}, status=400)
