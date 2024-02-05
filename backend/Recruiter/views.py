from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from UserAuth.models import JobPosting
from .serializers import JobPostingSerializer, JobPostingCreateSerializer

class JobPostingListView(APIView):
    permission_classes = [IsAuthenticated] 

    def get(self, request, *args, **kwargs):
        job_postings = JobPosting.objects.filter(creator=request.user).prefetch_related(
            'requirements', 'job_skills', 'benefits', 'employment_type'
        )
        serializer = JobPostingSerializer(job_postings, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class JobPostingCreateView(APIView):
    permission_classes = [IsAuthenticated] 

    def post(self, request, *args, **kwargs):
        serializer = JobPostingCreateSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class UploadJob:

    def upload(self,data):
        print("HERE")
        serialzer=JobPostingCreateSerializer(data=data)

        if serialzer.is_valid():
            serialzer.save()
            return True
        else:
            return False
        