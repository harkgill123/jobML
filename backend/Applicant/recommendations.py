import sys, os, django
from pathlib import Path

from django.shortcuts import get_object_or_404
sys.path.append(Path(__file__).resolve().parent.parent.__str__())

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'coreApp.settings')
django.setup()
from UserAuth.models import JobPosting,FeedbackforJob

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
from views import create_clustered_model,feedback_model

rcParams['figure.figsize'] = 50, 20
start=time.time()
nltk.download('stopwords')

# Load your model components
vec_title = load('model_settings/vectorizer_title.joblib')
vec_desc = load('model_settings/vectorizer_description.joblib')
vec_skills = load('model_settings/vectorizer_skills.joblib')
lr = load('model_settings/lr.joblib')
comps = load('model_settings/comps.joblib')

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

def give_suggestions(user_id, user_job_title, user_job_description, user_skills):
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
jobs = create_clustered_model()
df = pd.DataFrame(jobs)

# placeholder
sel_user_id = 3
user_skills = "python, css"
user_job_title = "Full Stack Developer"
user_job_description = "Wrote code in css and python"
print(f"Resume input: {user_skills}, {user_job_title}, {user_job_description}")

cos_sim_result = give_suggestions(sel_user_id, user_skills, user_job_description, user_job_title)
print(f"--- Reccomendations: {cos_sim_result} ---")

# ------------- getting top rec -------------
# user_id = 3  # Replace with the actual user_id you want to query
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