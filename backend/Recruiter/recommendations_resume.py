import sys, os, django
from pathlib import Path

from django.shortcuts import get_object_or_404
sys.path.append(Path(__file__).resolve().parent.parent.__str__())

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'coreApp.settings')
django.setup()
from UserAuth.models import FeedbackforResume,ModelVersionResume,Resume, User

from joblib import load
from sklearn.metrics.pairwise import cosine_similarity
from pylab import rcParams

import nltk
import time
import pandas as pd
import warnings; warnings.simplefilter('ignore')
import os
import pandas as pd

rcParams['figure.figsize'] = 50, 20
start=time.time()
nltk.download('stopwords')

def create_clustered_model():
    # Fetch the resumes and prefetch related work experiences, educations, projects, and skills
    user_resumes = Resume.objects.prefetch_related('work_experiences', 'educations', 'projects', 'resume_skills')
    
    # Initialize a dictionary to store resume information with user_id as the key
    resume_dict = {}

    for resume in user_resumes:
        user_clusters = resume.user.resume_cluster.all() if resume.user else None
        cluster_no = 'No Cluster'
        if user_clusters:
            # Assuming each user may have multiple clusters, but we take the first for this example
            cluster_no = user_clusters.first().cluster
        # Check if the user already has an entry in the resume_dict
        if resume.user_id not in resume_dict:
            # Create an entry if it does not exist
            resume_dict[resume.user_id] = {
                # 'resume_id': resume.id,
                'user_id': resume.user_id if resume.user else None,
                'title': [],
                'job_description': '',  # Assuming all descriptions are the same; will be updated later
                'skills': list(resume.resume_skills.values_list('skill_name', flat=True)),
                'cluster_no': cluster_no
            }

        # Update the job titles and job description for the user
        for exp in resume.work_experiences.all():
            if exp.job_title not in resume_dict[resume.user_id]['title']:
                resume_dict[resume.user_id]['title'].append(exp.job_title)
            # Assuming the job descriptions are the same, update if it's not set yet
            if not resume_dict[resume.user_id]['job_description']:
                resume_dict[resume.user_id]['job_description'] = exp.job_description

    # Convert the resume_dict to a list format
    resume_list = list(resume_dict.values())

    return resume_list

def feedback_model():
    # Fetch all feedback entries and prefetch the related job postings
    feedback_entries = FeedbackforResume.objects.select_related('job_posting')

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
    feedback_entries = FeedbackforResume.objects.select_related('job_posting')

    # Transform the feedback entries into the desired structure
    feedback_list = []
    for feedback in feedback_entries:
        feedback_list.append({
            'job_id': feedback.job_posting.id,
            'feedback': feedback.feedback,
            'user_id': feedback.user.id,
            'job_title': feedback.job_posting.title,  # Assumes job_posting has a 'title' field
        })
    return feedback_list

def update_feedback_database(job_id, new_suggestions_list):
    # First, remove all existing feedback entries for the user
    FeedbackforResume.objects.filter(job_posting_id=job_id).delete()
    print(new_suggestions_list)

    # Now, add new feedback entries from the new_suggestions_list
    for entry in new_suggestions_list:
        user_id = entry["user_id"]
        feedback = entry["feedback"]
        score = entry["score"]

        # Create a new feedback entry
        FeedbackforResume.objects.create(
            job_posting_id=job_id,
            user_id=user_id,
            feedback=feedback,
            score=score
        )

def update_model_version_database(job_id, Model_Version):
    model_version_str = str(Model_Version)
    ModelVersionResume.objects.update_or_create(
            job_posting_id=job_id,
            defaults={
                'model_version': model_version_str  # Update the latest model version
            }
        )

def give_suggestions(job_id, job_title, job_description, job_skills):
    resumes = create_clustered_model()
    df = pd.DataFrame(resumes)

    Model_Version = get_object_or_404(ModelVersionResume, user_id=user_id)
    Model_Version = Model_Version.latest_version

    # Load your model components
    vec_title = load(f'Recruiter/model_settings_ver{Model_Version}/vectorizer_title.joblib')
    vec_desc = load(f'Recruiter/model_settings_ver{Model_Version}/vectorizer_description.joblib')
    vec_skills = load(f'Recruiter/model_settings_ver{Model_Version}/vectorizer_skills.joblib')
    lr = load(f'Recruiter/model_settings_ver{Model_Version}/lr.joblib')
    comps = load(f'Recruiter/model_settings_ver{Model_Version}/comps.joblib')

    # Vectorize user's skills and job descriptions
    job_desc = pd.DataFrame(vec_desc.transform([job_description]).todense())
    job_desc.columns = vec_desc.get_feature_names_out()
    job_skls = pd.DataFrame(vec_skills.transform([job_skills]).todense())
    job_skls.columns = vec_skills.get_feature_names_out()
    user_t = pd.DataFrame(vec_title.transform([job_title]).todense())
    user_t.columns = vec_title.get_feature_names_out()
    mat = pd.concat([user_t, job_skls, job_desc], axis=1) #, user_skills, user_description
    
    # Transform feature matrix with pca
    job_comps = pd.DataFrame(mat)

    # Predict cluster for user and print cluster number
    predicted_cluster = lr.predict(job_comps)[0]
    print(f"Jobs CLUSTER NUMBER: {predicted_cluster}")

    # Calculate cosine similarity
    cos_sim = pd.DataFrame(cosine_similarity(job_comps, comps[comps.index == predicted_cluster]))

    # Get job titles from df to associate cosine similarity scores with jobs
    df['cluster_no'] = pd.to_numeric(df['cluster_no'], errors='coerce')
    print(df)
    samp_for_cluster = df[df['cluster_no'] == predicted_cluster]
    cos_sim = cos_sim.T.set_index(samp_for_cluster['user_id'])
    cos_sim.columns = ['score']

    # top suggested jobs for the user's cluster after adjustment
    top_cos_sim = cos_sim.sort_values('score', ascending=False)[:30]
    
    new_suggestions_list = []
    for user_id, score in top_cos_sim.to_dict()['score'].items():
        resume_title = samp_for_cluster[samp_for_cluster['user_id'] == user_id]['title'].values[0]
        new_suggestions_list.append({
            "user_id": user_id,
            "job_id": job_id,
            "suggestions": resume_title,
            "score": score,
            "feedback": 0  # Initial feedback value
        })
    update_feedback_database(job_id, new_suggestions_list)
    update_model_version_database(job_id, Model_Version)
    return new_suggestions_list

#Todo: have jasdeep update these values in the database
def update_user_feedback(user_id, resume_id, feedback):
    print(f"--- Changing feedback for user {user_id}, resume {resume_id} to feedback value {feedback} ---")
    # Attempt to retrieve the specific feedback entry
    feedback_entry = get_object_or_404(FeedbackforResume, resume_id=resume_id, user_id=user_id)
    
    # Update the feedback value
    feedback_entry.feedback = feedback
    feedback_entry.save()

def top_recommendations(job_id):
    # Query the FeedbackforJob table, excluding entries with feedback of 1 or -1
    top_feedback_entries = FeedbackforResume.objects.filter(
        job_posting_id = job_id, 
        feedback = 0,
    ).order_by('-score')[:12]  # Order by score descending, limit to top 12
    # Create a list of tuples with user_id and job_id for the top entries
    top_entries_list = [{'job_id': entry.job_posting_id,'user_id': entry.user_id} for entry in top_feedback_entries]
    return top_entries_list

# ------------- initial rec -------------
# placeholder
# sel_job_id = 1
# user_skills = "python, css, html"
# user_title = "Frontend Developer"
# user_description = "Write code in css and html"
# print(f"Resume input: {user_skills}, {user_title}, {user_description}")

# cos_sim_result = give_suggestions(sel_job_id, user_skills, user_description, user_title)
# print(f"--- Reccomendations: {cos_sim_result} ---")

# ------------- getting top rec -------------
# job_id = 1  
# top_entries = top_recommendations(job_id)
# print(top_entries)

# ------------- updating feedback -------------
# job_id=1
# user_id=18
# feedback=1
# update_user_feedback(user_id, job_id, feedback)
