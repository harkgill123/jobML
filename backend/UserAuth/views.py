from .models import User
from .forms import SignupForm
import jwt, datetime, os

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .forms import SignupForm
from .serializers import UserSerializer
from models import ModelVersion
from Applicant.ML_model import MODEL_VERSION

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