# serializers.py
from rest_framework import serializers
from UserAuth.models import Resume, Education, WorkExperience, ListOfSkills, ResumeToSkills



class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListOfSkills
        fields = ('id', 'skill_name')  

class ResumeToSkillsSerializer(serializers.ModelSerializer):
    skill = SkillSerializer()  
    class Meta:
        model = ResumeToSkills
        fields = ('skillID', 'skill') 

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        exclude = ('resume',) 

class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        exclude = ('resume',) 

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
            skills_data = validated_data.pop('resume_skills', None)  # Get the skills data.
            user = self.context['user']  
            resume = Resume.objects.create(user=user)
            
            if educations_data:
                for education_data in educations_data:
                    Education.objects.create(resume=resume, **education_data)
            
            if work_experiences_data:
                for work_experience_data in work_experiences_data:
                    WorkExperience.objects.create(resume=resume, **work_experience_data)
            
            if skills_data:
                for skill_data in skills_data:
                    skill_instance, _ = ListOfSkills.objects.get_or_create(**skill_data['skill'])
                    ResumeToSkills.objects.create(resume=resume, skillID=skill_data['skillID'], skill=skill_instance)
            
            return resume
    


