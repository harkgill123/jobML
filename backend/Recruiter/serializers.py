from rest_framework import serializers
from UserAuth.models import JobPosting, ListOfSkills

class JobPostingCreateSerializer(serializers.ModelSerializer):
    skill_names = serializers.ListField(child=serializers.CharField(), write_only=True, required=False)

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
            'skill_names',  # Accepts a list of skill names for job posting creation
        )
        read_only_fields = ('user',)

    def create(self, validated_data):
        print("Starting job posting creation. Validated data:", validated_data)

        # Extract skill names from the validated data
        skill_names = validated_data.pop('skill_names', [])
        print("Extracted skill names from validated data:", skill_names)

        # Create the job posting without the skills first
        job_posting = JobPosting.objects.create(**validated_data)
        print(f"Created job posting (ID: {job_posting.id}) without skills.")

        # Process each skill name
        for name in skill_names:
            skill, created = ListOfSkills.objects.get_or_create(skill_name=name)
            print(f"{'Created' if created else 'Retrieved'} skill: '{name}' (ID: {skill.id}).")
            job_posting.skills.add(skill)

        print("Finalized job posting with skills. Skills associated:", [skill.skill_name for skill in job_posting.skills.all()])

        return job_posting

class JobPostingSerializer(serializers.ModelSerializer):
    skill_names = serializers.SerializerMethodField()

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
            'skill_names',  # Included to serialize associated skills' names
        )

    def get_skill_names(self, obj):
        return [skill.skill_name for skill in obj.skills.all()]
