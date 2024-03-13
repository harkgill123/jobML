from rest_framework import serializers
from UserAuth.models import JobPosting,  ListOfSkills
from rest_framework import serializers
from UserAuth.models import JobPosting


class JobPostingCreateSerializer(serializers.ModelSerializer):
    skills = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=ListOfSkills.objects.all(),
        required=False
    )

    class Meta:
        model = JobPosting
        fields = (
            'title',
            'company_name',
            'location',
            'job_description',
            'posted_date',
            'application_deadline',
            'experience_required',
            'benefits',
            'employment_type',
            'skills',
            'creator',
        )
        extra_kwargs = {
            'creator': {'read_only': True},
        }

    def create(self, validated_data):
        skills_data = validated_data.pop('skills', None)
        job_posting = JobPosting.objects.create(**validated_data)
        if skills_data:
            job_posting.skills.set(skills_data)
        return job_posting

    def to_representation(self, instance):
        representation = super(JobPostingCreateSerializer, self).to_representation(instance)
        representation['skills'] = instance.skills.values_list('id', flat=True)
        return representation




class JobPostingSerializer(serializers.ModelSerializer):

    
    class Meta:
        model = JobPosting
        fields = (
            'jobID', 'title', 'company_name', 'location', 'job_description', 
            'posted_date', 'application_deadline', 'requirements', 
            'job_skills', 'benefits', 'employment_type'
        )



