from rest_framework import serializers
from UserAuth.models import JobPosting, JobRequirements, JobToSkills, Benefits, EmploymentType
from rest_framework import serializers
from UserAuth.models import JobPosting

class JobPostingCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPosting
        fields = ('title', 'company_name', 'location', 'job_description', 'posted_date', 'application_deadline', 'requirements', 'job_skills', 'benefits', 'employment_type')

    def create(self, validated_data):
        try:
            validated_data['creator'] = self.context['request'].user
        except:
            validated_data['creator'] = "NA"
        return super().create(validated_data)

class JobRequirementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobRequirements
        fields = '__all__'

class JobToSkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobToSkills
        fields = '__all__'

class BenefitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefits
        fields = '__all__'

class EmploymentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmploymentType
        fields = '__all__'

class JobPostingSerializer(serializers.ModelSerializer):
    requirements = JobRequirementsSerializer(many=True, read_only=True)
    job_skills = JobToSkillsSerializer(many=True, read_only=True)
    benefits = BenefitsSerializer(many=True, read_only=True)
    employment_type = EmploymentTypeSerializer(many=True, read_only=True)
    
    class Meta:
        model = JobPosting
        fields = (
            'jobID', 'title', 'company_name', 'location', 'job_description', 
            'posted_date', 'application_deadline', 'requirements', 
            'job_skills', 'benefits', 'employment_type'
        )



