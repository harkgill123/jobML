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

from UserAuth.models import Resume,JobPosting,ListOfSkills,Feedback
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.db.models import CharField, Value as V
from django.db.models.functions import Concat

from recommendations import give_suggestions, update_user_feedback

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

def feedback_model():
    # Fetch all feedback entries and prefetch the related job postings
    feedback_entries = Feedback.objects.select_related('job_posting')

    # Transform the feedback entries into the desired structure
    feedback_list = []
    for feedback in feedback_entries:
        feedback_list.append({
            'feedback': feedback.feedback,
            'job_id': feedback.job_posting.id,
            'user_id': feedback.user.id,
            'job_title': feedback.job_posting.title,  # Assumes job_posting has a 'title' field
        })

    return feedback_list


def recommended_jobs(request):
    try:
        user_resume = Resume.objects.get(user=request.user)
        user_skills = user_resume.resume_skills.all()
        
        suggestions_list = give_suggestions(request.user, user_skills)

        job_ids = [suggestion['job_id'] for suggestion in suggestions_list]
        jobs = JobPosting.objects.filter(id__in=job_ids)
        job_mapping = {job.id: job for job in jobs}
        ordered_jobs = [job_mapping[job_id] for job_id in job_ids if job_id in job_mapping]   
        
        return JsonResponse({"recommended_jobs": ordered_jobs})
    except Resume.DoesNotExist:
        return JsonResponse({"error": "User does not have a resume"}, status=400)

def update_feedback(request):
    update_user_feedback(user_id=request.user, job_id=request.job_id, feedback = request.feedback)

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