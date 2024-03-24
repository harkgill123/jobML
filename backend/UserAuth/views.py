from .models import User
from .forms import SignupForm
import jwt, datetime, os
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.serializers import serialize
from django.http import JsonResponse
from .forms import SignupForm
from .serializers import CompleteUserSerializer, ResumeToSkillsSerializer, UserSerializer, ResumeSerializer, EducationSerializer, WorkExperienceSerializer, UserSerializer, JobPostingSerializer
from .models import ModelVersion, Education, WorkExperience, Resume, JobPosting, ListOfSkills, ResumeToSkills
from Applicant.ML_model import MODEL_VERSION
from Applicant.views import getUserFromRequest
from django.core.exceptions import ObjectDoesNotExist
import pprint
import json

class SignUpView(APIView):
    def post(self, request):
        form = SignupForm(request.data)
        if form.is_valid():
            serializer = UserSerializer(data=form.cleaned_data)
            if serializer.is_valid():
                instance = serializer.save()
                ModelVersion.objects.create(user=instance, model_version=0, latest_version=MODEL_VERSION)
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
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=180),
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
            user.email = new_email
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
        serializer = CompleteUserSerializer(user)
        return Response(serializer.data)


class UpdateResumeInfo(APIView):
    def put(self, request):
        user = getUserFromRequest(request)
        #pprint.pprint(request.data)
        user_data = request.data.get('user', {})
        resume_skills = request.data.get('resume_skills', [])
        if user_data:
            user_serializer = UserSerializer(user, data=user_data, partial=True)
            if user_serializer.is_valid():
                user_serializer.save()
              #  print('User Info Updated')
            else:
                print(f"user_serializer  {user_serializer.errors}")
                return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        resume = user.resumes.first()
        print(resume.work_experiences.all())
        if resume:
            resume_data = request.data.get('resume', {})
            if resume_data:
                resume_serializer = ResumeSerializer(resume, data=resume_data, partial=True)
                if resume_serializer.is_valid():
                    resume_serializer.save()
                   # print('Resume Info Updated')
                else:
                    print(f"RESUME SERIAZLIER  {resume_serializer.errors}")
                    return Response(resume_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            
            
            existing_experiences = list(resume.work_experiences.all())
            work_experience_data_list = request.data.get('work_experiences', [])

            for i, work_experience_data in enumerate(work_experience_data_list):
                    for key, value in work_experience_data.items():
                        setattr(existing_experiences[i], key, value)
                    existing_experiences[i].save()
                

            existing_education = list(resume.educations.all())
            education_data_list = request.data.get('educations', [])

            for i, education_data_list in enumerate(education_data_list):
                    for key, value in education_data_list.items():
                        setattr(existing_education[i], key, value)
                    existing_education[i].save()

            if 'resume_skills' in request.data:
                resume_skills = request.data.get('resume_skills', [])
                if resume_skills and resume_skills[0]['skill_name'] != '':
                    resume.resume_skills.all().delete()
                    for skill_data in resume_skills:
                        skill_name = skill_data['skill_name']
                        skill_instance, _ = ListOfSkills.objects.get_or_create(skill_name=skill_name)
                        test = ResumeToSkills.objects.create(resume=resume, skill_name=skill_instance.skill_name)
            return Response({"message": "User and resume information updated successfully"}, status=status.HTTP_200_OK)


class DisplayAllJobsInfo(APIView):
    def get(self, request):
        user = getUserFromRequest(request=request)  
        
        job_postings = JobPosting.objects.filter(user=user).prefetch_related('skills')
        
        job_postings_list = []
        for job in job_postings:
            job_dict = {
                'title': job.title,
                'company_name': job.company_name,
                'location': job.location,
                'job_description': job.job_description,
                'posted_date': job.posted_date,
                'application_deadline': job.application_deadline,
                'experience_required': job.experience_required,
                'benefits': job.benefits,
                'employment_type': job.employment_type,
                'skills': [skill.skill_name for skill in job.skills.all()],  
            }
            job_postings_list.append(job_dict)
        
        return JsonResponse({'job_postings': job_postings_list})
    
class UpdateJobPosting(APIView):
    def patch(self, request):
        data = json.loads(request.body)
        job_id = data.get('job_id')
        form = data['formDataWithSkillsArray']
        user = getUserFromRequest(request)
        job_posting = JobPosting.objects.filter(pk=job_id, user=user).first()


        fields_to_update = ['title', 'posted_date', 'location', 'job_description', 
                            'employment_type', 'company_name', 'benefits', 'application_deadline']
        
        for field in fields_to_update:
            if field in form:
                setattr(job_posting, field, form[field])

        job_posting.save()

        if 'skills' in form:
            job_posting.skills.clear()

            skill_names = form['skills']

            for skill_name in skill_names:
                skill_instance, created = ListOfSkills.objects.get_or_create(skill_name=skill_name)      
                job_posting.skills.add(skill_instance)

        return Response({'message': 'Job posting updated successfully.'}, status=status.HTTP_200_OK)
