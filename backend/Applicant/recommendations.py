import sys, os, django
from pathlib import Path

from django.shortcuts import get_object_or_404
sys.path.append(Path(__file__).resolve().parent.parent.__str__())

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'coreApp.settings')
django.setup()
from UserAuth.models import JobPosting,FeedbackforJob,ModelVersion

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
    feedback_entries = FeedbackforJob.objects.select_related('job_posting')

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

def user_info():
    # Fetch all feedback entries and prefetch the related job postings
    feedback_entries = FeedbackforJob.objects.select_related('job_posting')

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

def update_feedback_database(user_id, new_suggestions_list):
    # First, remove all existing feedback entries for the user
    FeedbackforJob.objects.filter(user_id=user_id).delete()

    # Now, add new feedback entries from the new_suggestions_list
    for entry in new_suggestions_list:
        job_id = entry["job_id"]
        feedback = entry["feedback"]
        score = entry["score"]

        # Create a new feedback entry
        FeedbackforJob.objects.create(
            job_posting_id=job_id,
            user_id=user_id,
            feedback=feedback,
            score=score
        )

def update_model_version_database(user_id, Model_Version):
    model_version_str = str(Model_Version)
    ModelVersion.objects.update_or_create(
            user=user_id,
            defaults={
                'model_version': model_version_str  # Update the latest model version
            }
        )

def give_suggestions(user_id, user_job_title, user_job_description, user_skills):
    jobs = create_clustered_model()
    df = pd.DataFrame(jobs)

    Model_Version = get_object_or_404(ModelVersion, user_id=user_id)
    Model_Version = Model_Version.latest_version

    # Load your model components
    vec_title = load(f'Applicant/model_settings_ver{Model_Version}/vectorizer_title.joblib')
    vec_desc = load(f'Applicant/model_settings_ver{Model_Version}/vectorizer_description.joblib')
    vec_skills = load(f'Applicant/model_settings_ver{Model_Version}/vectorizer_skills.joblib')
    lr = load(f'Applicant/model_settings_ver{Model_Version}/lr.joblib')
    comps = load(f'Applicant/model_settings_ver{Model_Version}/comps.joblib')

    # Vectorize user's skills and job descriptions
    user_description = pd.DataFrame(vec_desc.transform([user_job_description]).todense())
    user_description.columns = vec_desc.get_feature_names_out()
    user_skills = pd.DataFrame(vec_skills.transform([user_skills]).todense())
    user_skills.columns = vec_skills.get_feature_names_out()
    user_title = pd.DataFrame(vec_title.transform([user_job_title]).todense())
    user_title.columns = vec_title.get_feature_names_out()
    mat = pd.concat([user_title, user_skills, user_description], axis=1) #, user_skills, user_description
    
    # Transform feature matrix with pca
    user_comps = pd.DataFrame(mat)

    # Predict cluster for user and print cluster number
    predicted_cluster = lr.predict(user_comps)[0]
    print(f"Users CLUSTER NUMBER: {predicted_cluster}")

    # Calculate cosine similarity
    cos_sim = pd.DataFrame(cosine_similarity(user_comps, comps[comps.index == predicted_cluster]))

    # Get job titles from df to associate cosine similarity scores with jobs
    df['cluster_no'] = pd.to_numeric(df['cluster_no'], errors='coerce')
    samp_for_cluster = df[df['cluster_no'] == predicted_cluster]
    cos_sim = cos_sim.T.set_index(samp_for_cluster['id'])
    cos_sim.columns = ['score']

    # top suggested jobs for the user's cluster after adjustment
    top_cos_sim = cos_sim.sort_values('score', ascending=False)[:30]
    
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
    update_feedback_database(user_id, new_suggestions_list)
    update_model_version_database(user_id, Model_Version)
    return new_suggestions_list

#Todo: have jasdeep update these values in the database
def update_user_feedback(user_id, job_id, feedback):
    print(f"--- Changing feedback for user {user_id}, job {job_id} to feedback value {feedback} ---")
    # Attempt to retrieve the specific feedback entry
    feedback_entry = get_object_or_404(FeedbackforJob, job_posting_id=job_id, user_id=user_id)
    
    # Update the feedback value
    feedback_entry.feedback = feedback
    feedback_entry.save()

def top_recommendations(user_id):
    # Query the FeedbackforJob table, excluding entries with feedback of 1 or -1
    top_feedback_entries = FeedbackforJob.objects.filter(
        user_id = user_id, 
        feedback = 0,
    ).order_by('-score')[:10]  # Order by score descending, limit to top 10
    # Create a list of tuples with user_id and job_id for the top entries
    top_entries_list = [{'user_id': entry.user_id,'job_id': entry.job_posting_id} for entry in top_feedback_entries]
    return top_entries_list

# ------------- initial rec -------------
# placeholder
# sel_user_id = 5
# user_skills = "python, css, html"
# user_job_title = "Frontend Developer"
# user_job_description = "Wrote code in css and hrml"
# print(f"Resume input: {user_skills}, {user_job_title}, {user_job_description}")

# cos_sim_result = give_suggestions(sel_user_id, user_skills, user_job_description, user_job_title)
# print(f"--- Reccomendations: {cos_sim_result} ---")

# ------------- getting top rec -------------
# user_id = 5  # Replace with the actual user_id you want to query
# top_entries = top_recommendations(user_id)
# print(top_entries)

# ------------- updating feedback -------------
# user_id=2
# job_id='13'
# feedback=-1
# update_user_feedback(user_id, job_id, feedback)
# user_id=2
# job_id='201'
# feedback=1
# update_user_feedback(user_id, job_id, feedback)
# user_id=2
# job_id='3'
# feedback=1
# update_user_feedback(user_id, job_id, feedback)