from .models import User, Education, WorkExperience, Resume
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'name',
            'email',
            'password',
            'phone_number',
            'user_type',  
        )
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user_type = validated_data.pop('user_type', User.UserType.APPLICANT) 
        instance = self.Meta.model(**validated_data, user_type=user_type)
        if password:
            instance.set_password(password)
        instance.save()
        return instance
    

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['id', 'school_name', 'degree', 'start_date', 'end_date', 'gpa']

class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = ['id', 'company_name', 'job_title', 'start_date', 'end_date', 'job_description']

class ResumeSerializer(serializers.ModelSerializer):
    educations = EducationSerializer(many=True, read_only=True)
    work_experiences = WorkExperienceSerializer(many=True, read_only=True)

    class Meta:
        model = Resume
        fields = ['id', 'user', 'educations', 'work_experiences']