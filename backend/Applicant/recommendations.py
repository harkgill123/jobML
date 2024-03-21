import sys, os, django
from pathlib import Path

from django.shortcuts import get_object_or_404
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
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
    # Fetch the job postings and prefetch the related skills
    job_postings = JobPosting.objects.prefetch_related('job_cluster', 'skills').all()

    job_postings_list = []
    for job in job_postings:
        # Collecting skills for each job
        skills = list(job.skills.all().values_list('skill_name', flat=True))
        
        # Assuming there is only one cluster per job posting for simplicity
        # If there are multiple, you might need to handle this differently
        cluster_no = job.job_cluster.first().cluster if job.job_cluster.exists() else "No Cluster"

        job_postings_list.append({
            'id': job.id,
            'title': job.title,
            'job_description': job.job_description,
            'skills': skills,
            'cluster_no': cluster_no,
        })
    return job_postings_list

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

def load_user_feedback_and_features():
    print("start feedback")
    feedbacks = FeedbackforJob.objects.all()
    feedback_df = pd.DataFrame(list(feedbacks.values('user_id','job_posting_id','feedback')))

    print("start jobs")
    jobs = create_clustered_model()
    job_features_df = pd.DataFrame(jobs)
    print("done loading")
    
    return feedback_df, job_features_df

# Function to train or load a logistic regression model based on user feedback
def train_or_load_feedback_model():
    feedback_df, job_features_df = load_user_feedback_and_features()
    
    # Merge feedback_df with job_features_df to get the features for each job
    merged_df = feedback_df.merge(job_features_df, on='job_id')
    
    # Split the data
    X = merged_df.drop(columns=['user_id', 'job_id', 'feedback'])
    y = merged_df['feedback']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train the logistic regression model
    feedback_lr = LogisticRegression(max_iter=1000, random_state=42)
    feedback_lr.fit(X_train, y_train)
    
    return feedback_lr

def give_suggestions(user_id, user_job_title, user_job_description, user_skills):

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

    # --------- First Logistics Regression: Predict cluster for user ---------
    predicted_cluster = lr.predict(user_comps)[0]
    print(f"Users CLUSTER NUMBER: {predicted_cluster}")

    # --------- Cosine Similarity: Find distance of each job to user ---------
    cos_sim = pd.DataFrame(cosine_similarity(user_comps, comps[comps.index == predicted_cluster]))

    # Get job titles from df to associate cosine similarity scores with jobs
    feedback_df, df = load_user_feedback_and_features()
    df['cluster_no'] = pd.to_numeric(df['cluster_no'], errors='coerce')
    samp_for_cluster = df[df['cluster_no'] == predicted_cluster]
    cos_sim = cos_sim.T.set_index(samp_for_cluster['id'])
    cos_sim.columns = ['score']

    # top suggested jobs for the user's cluster after adjustment
    top_cos_sim = cos_sim.sort_values('score', ascending=False)[:30]

    # --------- Second Logistics Regression: Predicted probability of user liking Job ---------
    feedback_lr = train_or_load_feedback_model()
    top_jobs_features = comps.loc[top_cos_sim.index]  # Assuming 'comps' has job features indexed by job ID
    probabilities = feedback_lr.predict_proba(top_jobs_features)[:, 1]  # Assuming 1 is the label for 'like'
    
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
    ).order_by('-score')[:12]  # Order by score descending, limit to top 12
    # Create a list of tuples with user_id and job_id for the top entries
    top_entries_list = [{'user_id': entry.user_id,'job_id': entry.job_posting_id} for entry in top_feedback_entries]
    return top_entries_list

# ------------- initial rec -------------
# placeholder
# sel_user_id = 1
# user_skills = "python, css, html"
# user_job_title = "Frontend Developer"
# user_job_description = "Wrote code in css and hrml"
# print(f"Resume input: {user_skills}, {user_job_title}, {user_job_description}")

# cos_sim_result = give_suggestions(sel_user_id, user_skills, user_job_description, user_job_title)
# print(f"--- Reccomendations: {cos_sim_result} ---")

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

print("start script")
feedback_df, job_features_df = load_user_feedback_and_features()
print(feedback_df)
print(job_features_df)
