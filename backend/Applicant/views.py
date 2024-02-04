from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from django.core.files.storage import default_storage
from .serializers import ResumeSerializer
from rest_framework.permissions import IsAuthenticated



class ResumeUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        file_obj = request.FILES['file']
        file_path = default_storage.save('uploads/' + file_obj.name, file_obj)
        full_file_path = default_storage.path(file_path)

 #       scraped_data = scrape_resume_data(full_file_path)  # This needs to be implemented

        # Return the initial scraped data for review/editing
       # return Response(scraped_data, status=status.HTTP_200_OK)

class ResumeCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = ResumeSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)