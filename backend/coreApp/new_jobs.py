import pandas as pd
from pathlib import Path
from django.conf import settings
import django
import os
from ResumeScraper.resume import ResumeExtractor
from django.db.models import Q



import sys
from pathlib import Path
sys.path.append(Path(__file__).resolve().parent.parent.__str__())

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'coreApp.settings')
django.setup()

# from ...backend.Recruiter.viewsimport import UploadJob
from UserAuth.models import JobPosting, ListOfSkills
from django.utils import timezone
from Recruiter.views import UploadJob
import os

from django.core.wsgi import get_wsgi_application




csvpath = Path(__file__).parent / 'alljobs.csv'
jobs_df = pd.read_csv(csvpath)
print("info")
print(jobs_df.columns)
print(jobs_df.info())
print(jobs_df.head())
# jobs_df.drop([],axis=1)
        #title,description,
        # job_posting_data = {
        #     "title": row['jobtitle'],
        #     "company_name": row['company'],
        #     "location": row['joblocation_address'],
        #     "job_description": row['jobdescription'],
        #     "posted_date": timezone.now(),
        #     "application_deadline": timezone.now() + timezone.timedelta(days=100),
        #     "experience_required": "N/A",
        #     "creator": None,
        # }

limit = 430
count=0
extract_info = ResumeExtractor()
for index,row in jobs_df.iterrows():
        skills_found = extract_info.extract_skills(row['Description']).split(",")
        job_posting_data = {
            "title": row['Job-Title'],
            "company_name": row['Company'],
            "location": row['Location'],
            "job_description": row['Description'],
            "posted_date": timezone.now(),
            "application_deadline": timezone.now() + timezone.timedelta(days=100),
            "experience_required": "N/A",
            # "creator": None,
        }
        existing_job_posting = JobPosting.objects.filter(
                Q(title=job_posting_data["title"]) &
                Q(company_name=job_posting_data["company_name"]) &
                Q(location=job_posting_data["job_description"]) &
                Q(job_description=job_posting_data["job_description"])
                ).first()
        if count <130:
              print(existing_job_posting)
              count+=1
        # if existing_job_posting is None and skills_found[0] !="none":
        if count >=130 and skills_found[0] !="none":
            print("uploading skills")
            job_posting = JobPosting.objects.create(**job_posting_data)
            count+=1
            # skills_list = current_job_data.get("skills", [])
            
            fixed_skills =[]

            for s in skills_found:
                    try:
                        if s[0] == " ":
                            fixed_skills.append(s[1:])
                        else:
                            fixed_skills.append(s)
                    except:
                        pass
            print(fixed_skills)
            for skill_name in fixed_skills:
                    skill, created = ListOfSkills.objects.get_or_create(skill_name=skill_name)
                    job_posting.skills.add(skill)
        
        if count>=limit:
               break