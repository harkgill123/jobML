from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from django.core.files.storage import default_storage
from .serializers import ResumeSerializer
from rest_framework.permissions import IsAuthenticated
from UserAuth.models import Resume
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from coreApp.ResumeScraper.resume import ResumeExtractor
import logging
from rest_framework.authentication import TokenAuthentication
import jwt,os
from django.contrib.auth import get_user_model




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
