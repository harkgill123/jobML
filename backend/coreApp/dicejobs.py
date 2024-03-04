import pandas as pd
from pathlib import Path

csvpath = Path(__file__).parent / 'dice_com-job_us_sample.csv'
jobs_df = pd.read_csv(csvpath)

jobs_df = jobs_df.drop(["advertiserurl","jobid","postdate","shift","site_name","uniq_id"],axis=1)

print(jobs_df.head())
print(jobs_df.info())


                # job_posting_data = {
                #     "title": current_job_data.get("title", "Default Job Title"),
                #     "company_name": current_job_data.get("company", "Default Company"),
                #     "location": current_job_data.get("location", "Default Location"),
                #     "job_description": current_job_data.get("desc", "Default Job Description"),
                #     "posted_date": timezone.now(),
                #     "application_deadline": timezone.now(),
                #     "experience_required": current_job_data.get("experience_required", "No experience required"),
                #     "creator": None,
                # }