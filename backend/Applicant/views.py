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


class ResumeUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        file_obj = request.FILES['file']
        file_path = default_storage.save('uploads/' + file_obj.name, file_obj)
        full_file_path = default_storage.path(file_path)

        # scraped_data = scrape_resume_data(full_file_path)  # This needs to be implemented
        scraped_data = {
            "Educations": [
                {
                    "School": "XYZ University",
                    "Degree": "MSc in Computer Science",
                    "Start Date": "2020",
                    "End Date": "2022"
                },
                {
                    "School": "ABC College",
                    "Degree": "BSc in Software Engineering",
                    "Start Date": "2016",
                    "End Date": "2020"
                }
            ],
            "Work Experiences": [
                {
                    "Company Name": "ABC Corp",
                    "Job Title": "Software Developer",
                    "Start Date": "2020-01",
                    "End Date": "2022-12"
                },
                {
                    "Company Name": "DEF Technologies",
                    "Job Title": "Junior Developer",
                    "Start Date": "2018-06",
                    "End Date": "2020-01"
                }
            ],
            "Skills": "Python, JavaScript, React, Django",
            "Address": "1234 Main St, Hometown, Country"
        }
        return Response(scraped_data, status=status.HTTP_200_OK)

class ResumeCreateView(APIView):
    # permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = ResumeSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@login_required
def recommended_jobs_view(request):
    try:
        user_resume = Resume.objects.get(user=request.user)
        user_skills = user_resume.resume_skills.all()
        
        skill_ids = [skill.skillID for skill in user_skills]
        

        matching_jobs = Job.objects.filter(required_skills__skillID__in=skill_ids).distinct()
        
        jobs_data = [
            {"jobID": job.jobID, "job_title": job.job_title, "company_name": job.company_name, "job_description": job.job_description}
            for job in matching_jobs
        ]
        
        return JsonResponse({"recommended_jobs": jobs_data})
    except Resume.DoesNotExist:
        return JsonResponse({"error": "User does not have a resume"}, status=400)
