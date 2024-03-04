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
from django.db.models import Q
from django.utils import timezone
from django.core import serializers
from UserAuth.models import Resume,JobPosting,ListOfSkills,Feedback
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.db.models import CharField, Value as V
from django.db.models.functions import Concat
from Applicant.recommendations import give_suggestions, update_user_feedback


def getUserFromRequest(request):
    auth_header = request.META.get('HTTP_AUTHORIZATION')
    token = auth_header.split(" ")[1]
    decoded_token = jwt.decode(token, os.environ.get('JWT_SECRET_KEY'), algorithms=["HS256"])
    user_id = decoded_token['id']
    user = get_user_model().objects.get(id=user_id)
    return user

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
        user = getUserFromRequest(request=request)
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



def recommended_jobs(request):
    job_ids = []
    user = getUserFromRequest(request=request)
    try:
        user_resume = Resume.objects.get(user=user)
        user_skills = user_resume.resume_skills.all()
        user_skills_texts = [skill.skill_name for skill in user_skills]
        suggestions_list = give_suggestions(user.id, ' '.join(user_skills_texts))
        print(f"suggestions_list: {suggestions_list}")
        for suggestion in suggestions_list:
            job_ids.append(suggestion['job_id'])

        # Retrieve JobPosting objects using the job_ids list
        jobs_query_set = JobPosting.objects.filter(id__in=job_ids)

        # Convert QuerySet to list to be able to reorder them
        jobs_list = list(jobs_query_set)

        # Reorder jobs_list to match the order of job_ids
        jobs_ordered = sorted(jobs_list, key=lambda job: job_ids.index(job.id))

        serialized_jobs = serializers.serialize('json', jobs_ordered)
        print(f"seriazlied jobs: {serialized_jobs}")
        return JsonResponse({"recommended_jobs": serialized_jobs})     
    except Resume.DoesNotExist:
        return JsonResponse({"error": "User does not have a resume"}, status=400)

def update_feedback(request):
    user = getUserFromRequest(request=request)
    update_user_feedback(user_id=user.id, job_id=request.job_id, feedback = request.feedback)

def search_jobs(request):
    query = request.GET.get('q', '')
    if query:
        jobs = JobPosting.objects.filter(
            Q(title__icontains=query) | 
            Q(company_name__icontains=query) | 
            Q(location__icontains=query) | 
            Q(job_description__icontains=query),
            application_deadline__gte=timezone.now()
        )
    else:
        jobs = JobPosting.objects.none()

    jobs_list = list(jobs.values(
        'id', 'title', 'company_name', 'location', 'posted_date', 
        'application_deadline', 'experience_required'
    ))

    return JsonResponse({'jobs': jobs_list})