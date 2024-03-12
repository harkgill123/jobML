from .models import User
from .forms import SignupForm
import jwt, datetime, os
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.serializers import serialize
from django.http import JsonResponse
from .forms import SignupForm
from .serializers import UserSerializer
from .models import ModelVersion
from Applicant.ML_model import MODEL_VERSION
from Applicant.views import getUserFromRequest
class SignUpView(APIView):
    def post(self, request):
        form = SignupForm(request.data)
        if form.is_valid():
            serializer = UserSerializer(data=form.cleaned_data)
            if serializer.is_valid():
                instance = serializer.save()
                ModelVersion.objects.create(user=instance, model_version=MODEL_VERSION, latest_version=MODEL_VERSION)
                return Response({
                    'success': True,
                    'message': 'Registration successful. Welcome to The Job Recommender System!'
                }, status=status.HTTP_201_CREATED)
            else:
                return Response({
                    'success': False,
                    'message': 'Registration failed. Please correct the following errors:',
                    'errors': serializer.errors
                }, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({
                'success': False,
                'message': 'Invalid form data. Please correct the following errors:',
                'errors': form.errors
            }, status=status.HTTP_400_BAD_REQUEST)

 
class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        
        response = Response()

        try:
            user = User.objects.get(email=email)

        except User.DoesNotExist:
            response.data = { 'success': False, 'error': 'There are no users with the specified email.' }
            return response
        
        if not user.check_password(password):
            response.data = { 'success': False, 'error': 'The username and password you specified are invalid. Please try again.' }
            return response
        
        payload = {
            'id': user.id,
            'user_type': user.user_type,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, os.environ.get('JWT_SECRET_KEY'), algorithm='HS256')

        response.data = { 'success': True, 'token': token, 'user_type': user.user_type }

        return response
    
class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = { 'success': True }
        return response
    
class UpdatePasswordView(APIView):
    def put(self, request):
        user = getUserFromRequest(request)
        password = request.data['password']
        new_password = request.data['new_password']    
        if password == new_password:
            return Response({
                'result' : 'ERROR: New Password is same as existing'}, 
                status=status.HTTP_400_BAD_REQUEST)
        if user.check_password(password):
            user.set_password(new_password)
            user.save()
            return Response({
                'result' : 'SUCCESS: Password has been changed successfully'}, 
                status=status.HTTP_200_OK)
        else:
            return Response({
                'result' : 'ERROR: Current Password is incorrect'}, 
                status=status.HTTP_400_BAD_REQUEST)
        
class UpdateEmailView(APIView):
    def put(self, request):
        user = getUserFromRequest(request)
        password = request.data['password']
        email = user.email
        new_email = request.data['new_email']    
        if email == new_email:
            return Response({
                'result' : 'ERROR: New Email is same as existing'}, 
                status=status.HTTP_400_BAD_REQUEST)
        if user.check_password(password):
            user.email == new_email
            user.save()
            return Response({
                'result' : 'SUCCESS: Email has been changed successfully'}, 
                status=status.HTTP_200_OK)
        else:
            return Response({
                'result' : 'ERROR: Password is incorrect'}, 
                status=status.HTTP_400_BAD_REQUEST)

class DisplayResumeInfo(APIView):
    def get(self, request):
        user = getUserFromRequest(request)
        resumes = user.resumes.all()

        work_experiences = []
        educations = []

        for resume in resumes:
            work_experiences.extend(list(resume.work_experience.all()))
            educations.extend(list(resume.educations.all()))

        resumes_data = serialize('json', resumes)
        user_data = serialize('json', [user,])
        work_experiences_data = serialize('json', work_experiences, ensure_ascii=False)
        educations_data = serialize('json', educations, ensure_ascii=False)

        return JsonResponse({
            'user': user_data,
            'resumes': resumes_data,
            'work_experiences': work_experiences_data,
            'educations': educations_data
        })


# class UpdateResumeInfo(APIView):
#     def put(self, request):
#         user = getUserFromRequest(request)
#         password = request.data['password']

#         work_experience = request.data['work_experience']
#         education = request.data['education']
#         skills = 
  
#         if user.check_password(password):
#             if 
#             user.save()
#             return Response({
#                 'result' : 'SUCCESS: Resume Info has been changed successfully'}, 
#                 status=status.HTTP_200_OK)
#         else:
#             return Response({
#                 'result' : 'ERROR: Password is incorrect'}, 
#                 status=status.HTTP_400_BAD_REQUEST)