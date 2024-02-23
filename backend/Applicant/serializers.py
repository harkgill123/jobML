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
        fields = ('user', 'educations', 'work_experiences')  
        read_only_fields = ('user',)  

    def create(self, validated_data):
        educations_data = validated_data.pop('educations', None)
        work_experiences_data = validated_data.pop('work_experiences', None)
        user = self.context['user']  

        resume = Resume.objects.create(user=user, **validated_data)
        
        if educations_data:
            for education_data in educations_data:
                Education.objects.create(resume=resume, **education_data)
        
        if work_experiences_data:
            for work_experience_data in work_experiences_data:
                WorkExperience.objects.create(resume=resume, **work_experience_data)
        
        return resume
    


