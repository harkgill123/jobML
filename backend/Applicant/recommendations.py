import sys, os, django
from pathlib import Path

from django.shortcuts import get_object_or_404
sys.path.append(Path(__file__).resolve().parent.parent.__str__())

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'coreApp.settings')
django.setup()
from UserAuth.models import JobPosting,Feedback

from joblib import load
from sklearn.metrics.pairwise import cosine_similarity
from pylab import rcParams

import nltk
import time
import pandas as pd
import warnings; warnings.simplefilter('ignore')
import os
import json
import pandas as pd



rcParams['figure.figsize'] = 50, 20
start=time.time()
nltk.download('stopwords')

# Load your model components
vec = load('Applicant/model_settings/vec.joblib')
vec2 = load('Applicant/model_settings/vec2.joblib')
pca = load('Applicant/model_settings/pca.joblib')
lr = load('Applicant/model_settings/lr.joblib')
comps = load('Applicant/model_settings/comps.joblib')

# df = pd.read_json('model_settings/df.json')

def update_suggestions_json(user_id, new_suggestions_list):
    for entry in new_suggestions_list:
        job_id = entry["job_id"]
        user_id = entry["user_id"]
        feedback = entry["feedback"]
        
        # Assuming you have a Job model that corresponds to the JobToClusters
        Feedback.objects.filter(job_posting_id=job_id,user_id=user_id).delete()
        rec, created = Feedback.objects.get_or_create(job_posting_id=job_id,user_id=user_id,feedback=feedback)

def load_feedback():
    feedback = feedback_model()
    # df = pd.DataFrame(feedback)
    return feedback
    
def adjust_scores_based_on_feedback(cos_sim, feedback_data):
    print("--- Adjusting Scores ---")
    for feedback in feedback_data:
        job_id = feedback["job_id"]
        job_title = feedback["job_title"]
        user_feedback = feedback["feedback"]
        # Adjust score based on feedback
        if job_id in cos_sim.index:
            print(f"job title: {job_title}, user feedback: {user_feedback}, score before: {cos_sim.at[job_id, 'score']}")
            if user_feedback == '1':
                # Increase score for positive feedback
                cos_sim.loc[job_id, 'score'] *= 1.3  # Adjust multiplier as needed
                print(f"value after:{cos_sim.at[job_id, 'score']}")
            elif user_feedback == '-1':
                # Decrease score for negative feedback
                cos_sim.loc[job_id, 'score'] *= 0.7  # Adjust multiplier as needed
                print(f"value after:{cos_sim.at[job_id, 'score']}")

    return cos_sim

def give_suggestions(user_id, resume_text):
    feedback_data = load_feedback()
    
    # Vectorize user's skills and job descriptions
    desc = pd.DataFrame(vec.transform([resume_text]).todense())
    desc.columns = vec.get_feature_names_out()
    skillz = pd.DataFrame(vec2.transform([resume_text]).todense())
    skillz.columns = vec2.get_feature_names_out()
    mat = pd.concat([skillz, desc], axis=1)
    
    # Transform feature matrix with pca
    user_comps = pd.DataFrame(pca.transform(mat))

    # Predict cluster for user and print cluster number
    cluster = lr.predict(user_comps)[0]
    print(f"Users CLUSTER NUMBER: {cluster}")

    # Calculate cosine similarity
    cos_sim = pd.DataFrame(cosine_similarity(user_comps, comps[comps.index == cluster]))

    # Filter feedback for the current user
    user_feedback = [item for item in feedback_data if item["user_id"] == user_id]
    
    # Get job titles from df to associate cosine similarity scores with jobs
    df['cluster_no'] = pd.to_numeric(df['cluster_no'], errors='coerce')

    samp_for_cluster = df[df['cluster_no'] == cluster]
    cos_sim = cos_sim.T.set_index(samp_for_cluster['id'])
    cos_sim.columns = ['score']

    # Adjust scores based on feedback
    print(f"Current user feedback:{user_feedback}")
    cos_sim = adjust_scores_based_on_feedback(cos_sim, user_feedback)
  
    # Print the top ten suggested jobs for the user's cluster after adjustment
    top_cos_sim = cos_sim.sort_values('score', ascending=False)[:15]
    # print('Top ten suggested for your cluster', '\n', top_cos_sim, '\n\n')
    
    new_suggestions_list = []
    for job_id, score in top_cos_sim.to_dict()['score'].items():
        job_title = samp_for_cluster[samp_for_cluster['id'] == job_id]['title'].values[0]
        new_suggestions_list.append({
            "user_id": user_id,
            "job_id": job_id,
            "suggestions": job_title,
            "score": score,
            "feedback": 0  # Initial feedback value
        })
    update_suggestions_json(user_id, new_suggestions_list)
    return new_suggestions_list


# user_data = pd.read_json("../hybrid/user_data.json")
# sel_user_id = 1
# resume_text_row = user_data.loc[user_data['user_id'] == sel_user_id, 'user_data']
# resume_text = resume_text_row.iloc[0]
def create_model():
    # Fetch the job postings and prefetch the related skills
    jobpostings = JobPosting.objects.prefetch_related('skills')

    # Transform the job postings into the desired structure
    jobpostings_list = []
    for jp in jobpostings:
        skills = list(jp.skills.values_list('skill_name', flat=True))
        jobpostings_list.append({
            'id': jp.id,
            'title': jp.title,
            'job_description': jp.job_description,
            'skills': skills,
        })

    return jobpostings_list

def create_clustered_model():
    # Fetch the job postings and prefetch the related skills
    jobpostings = JobPosting.objects.prefetch_related('skills')

    # Transform the job postings into the desired structure
    jobpostings_list = []
    for jp in jobpostings:
        skills = list(jp.skills.values_list('skill_name', flat=True))
        cluster = jp.job_cluster.first().cluster if jp.job_cluster.exists() else 'No Cluster'

        jobpostings_list.append({
            'id': jp.id,
            'title': jp.title,
            'job_description': jp.job_description,
            'skills': skills,
            'cluster_no':cluster
        })

    return jobpostings_list

def feedback_model():
    # Fetch all feedback entries and prefetch the related job postings
    feedback_entries = Feedback.objects.select_related('job_posting')

    # Transform the feedback entries into the desired structure
    feedback_list = []
    for feedback in feedback_entries:
        feedback_list.append({
            'feedback': feedback.feedback,
            'job_id': feedback.job_posting.id,
            'user_id': feedback.user.id,
            'job_title': feedback.job_posting.title,  # Assumes job_posting has a 'title' field
        })

    return feedback_list

jobs = create_clustered_model()
df = pd.DataFrame(jobs)

# placeholder
sel_user_id = 1
resume_text = '''sql,java,javascript,perl''' #from job entry 18
print(f"Resume input: {resume_text}")

# ------------- reccomendations -------------
#Todo: upload these results to matching_jobs in views.py
cos_sim_result = give_suggestions(sel_user_id, resume_text)
print(f"--- Reccomendations: {cos_sim_result} ---")


# ------------- feedback -------------
#Todo: have jasdeep update these values in the database

def update_user_feedback(user_id, job_id, feedback):
    print(f"--- Changing feedback for user {user_id}, job {job_id} to feedback value {feedback} ---")
    # Attempt to retrieve the specific feedback entry
    feedback_entry = get_object_or_404(Feedback, job_posting_id=job_id, user_id=user_id)
    
    # Update the feedback value
    feedback_entry.feedback = feedback
    feedback_entry.save()

# user_id=1
# job_id='17'
# feedback=-1
# update_user_feedback(user_id, job_id, feedback)
# user_id=1
# job_id='7'
# feedback=1
# update_user_feedback(user_id, job_id, feedback)
# user_id=1
# job_id='19'
# feedback=1
# update_user_feedback(user_id, job_id, feedback)