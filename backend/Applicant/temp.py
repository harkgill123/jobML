import sys, os, django
from pathlib import Path

from django.shortcuts import get_object_or_404
sys.path.append(Path(__file__).resolve().parent.parent.__str__())

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'coreApp.settings')
django.setup()
from UserAuth.models import JobPosting,FeedbackforJob,ModelVersion

from joblib import load
from sklearn.metrics.pairwise import cosine_similarity

import pandas as pd
import warnings; warnings.simplefilter('ignore')
import os
import pandas as pd

def create_clustered_model():
    jobpostings = JobPosting.objects.prefetch_related('skills')
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
    feedback_entries = FeedbackforJob.objects.select_related('job_posting')
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
    FeedbackforJob.objects.filter(user_id=user_id).delete()
    for entry in new_suggestions_list:
        job_id = entry["job_id"]
        feedback = entry["feedback"]
        score = entry["score"]

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
                'model_version': model_version_str 
            }
        )

def update_user_feedback(user_id, job_id, feedback):
    print(f"--- Changing feedback for user {user_id}, job {job_id} to feedback value {feedback} ---")
    feedback_entry = get_object_or_404(FeedbackforJob, job_posting_id=job_id, user_id=user_id)
    feedback_entry.feedback = feedback
    feedback_entry.save()

def top_recommendations(user_id):
    top_feedback_entries = FeedbackforJob.objects.filter(
        user_id = user_id, 
        feedback = 0,
    ).order_by('-score')[:12] 
    top_entries_list = [{'user_id': entry.user_id,'job_id': entry.job_posting_id} for entry in top_feedback_entries]
    return top_entries_list

def give_suggestions(user_id, user_job_title, user_skills):
    jobs = create_clustered_model()
    df = pd.DataFrame(jobs)

    # Model_Version = get_object_or_404(ModelVersion, user_id=user_id)
    # Model_Version = Model_Version.latest_version
    Model_Version = 2

    # Load your model components
    vec_title = load(f'Applicant/model_settings_ver{Model_Version}/vectorizer_title.joblib')
    vec_skills = load(f'Applicant/model_settings_ver{Model_Version}/vectorizer_skills.joblib')
    cluster_lr = load(f'Applicant/model_settings_ver{Model_Version}/cluster_lr.joblib')
    feedback_lr = load(f'Applicant/model_settings_ver{Model_Version}/feedback_lr.joblib')
    comps_original = load(f'Applicant/model_settings_ver{Model_Version}/comps_original.joblib')
    comps_cluster = load(f'Applicant/model_settings_ver{Model_Version}/comps_cluster.joblib')

    # Vectorize user's skills and job descriptions
    user_skills = pd.DataFrame(vec_skills.transform([user_skills]).todense())
    user_skills.columns = vec_skills.get_feature_names_out()
    user_title = pd.DataFrame(vec_title.transform([user_job_title]).todense())
    user_title.columns = vec_title.get_feature_names_out()
    mat = pd.concat([user_title, user_skills], axis=1) #, user_skills, user_description
    
    # Transform feature matrix with pca
    user_comps = pd.DataFrame(mat)

    # --------- First Logistics Regression: Predict cluster for user ---------
    predicted_cluster = cluster_lr.predict(user_comps)[0]
    print(f"Users CLUSTER NUMBER: {predicted_cluster}")

    # --------- Cosine Similarity: Find distance of each job to user ---------
    cos_sim = pd.DataFrame(cosine_similarity(user_comps, comps_original[comps_original.index == predicted_cluster]))

    df['cluster_no'] = pd.to_numeric(df['cluster_no'], errors='coerce')
    samp_for_cluster = df[df['cluster_no'] == predicted_cluster]
    cos_sim = cos_sim.T.set_index(samp_for_cluster['id'])
    cos_sim.columns = ['score']

    top_cos_sim = cos_sim.sort_values('score', ascending=False)[:35]
    print(f"top_cos_sim: {top_cos_sim}")

    # --------- Second Logistics Regression: Predicted probability of user liking Job ---------
    print(f"feedback_lr: {feedback_lr}")

    top_jobs_features = comps_original.loc[top_cos_sim.index]  # Assuming 'comps' has job features indexed by job ID
    print(f"top_jobs_features: {top_jobs_features}")

    probabilities = feedback_lr.predict_proba(top_jobs_features)[:, 1]  # Assuming 1 is the label for 'like'
    print(f"probabilities: {probabilities}")
    
    # Add probabilities to top_cos_sim and sort by it
    top_cos_sim['like_probability'] = probabilities
    top_cos_sim_sorted = top_cos_sim.sort_values('like_probability', ascending=False)

    new_suggestions_list = []
    for job_id, score in top_cos_sim_sorted.to_dict()['score'].items():
        job_title = samp_for_cluster[samp_for_cluster['id'] == job_id]['title'].values[0]
        new_suggestions_list.append({
            "user_id": user_id,
            "job_id": job_id,
            "suggestions": job_title,
            "score": score,
            "feedback": 0  # Initial feedback value
        })
    # update_feedback_database(user_id, new_suggestions_list)
    # update_model_version_database(user_id, Model_Version)
    return new_suggestions_list

# ------------- initial rec -------------
sel_user_id = 1
user_skills = "python,css,html,react,javascript,frontend"
user_job_title = "Frontend Developer"
print(f"Resume input: {user_skills}, {user_job_title}")

cos_sim_result = give_suggestions(sel_user_id, user_skills, user_job_title)
print(f"--- Reccomendations: {cos_sim_result} ---")

# ------------- getting top rec -------------
# user_id = 1  # Replace with the actual user_id you want to query
# top_entries = top_recommendations(user_id)
# print(top_entries)

# ------------- updating feedback -------------
# user_id=1
# job_id='836'
# feedback=1
# update_user_feedback(user_id, job_id, feedback)
# user_id=2
# job_id='201'
# feedback=1
# update_user_feedback(user_id, job_id, feedback)
# user_id=2
# job_id='3'
# feedback=1
# update_user_feedback(user_id, job_id, feedback)