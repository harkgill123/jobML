# serializers.py
from rest_framework import serializers
from UserAuth.models import Resume, Education, WorkExperience

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = '__all__'

class ResumeSerializer(serializers.ModelSerializer):
    educations = EducationSerializer(many=True)
    work_experiences = WorkExperienceSerializer(many=True)
    
    class Meta:
        model = Resume
        fields = ('educations', 'work_experiences')
    
    def create(self, validated_data):
        educations_data = validated_data.pop('educations')
        work_experiences_data = validated_data.pop('work_experiences')
        resume = Resume.objects.create(**validated_data)
        
        for education_data in educations_data:
            Education.objects.create(resume=resume, **education_data)
        
        for work_experience_data in work_experiences_data:
            WorkExperience.objects.create(resume=resume, **work_experience_data)
        
        return resume
    


