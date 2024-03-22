import sys, os, django
from pathlib import Path

from sklearn.calibration import LabelEncoder
sys.path.append(Path(__file__).resolve().parent.parent.__str__())

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'coreApp.settings')
django.setup()
from UserAuth.models import JobPosting,JobToClusters,ModelVersion,User,FeedbackforJob

import pandas as pd
import numpy as np
import re
import warnings; warnings.simplefilter('ignore')

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import PCA
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction import text
from pylab import rcParams
from joblib import dump
from sklearn.cluster import KMeans
from sklearn.metrics import accuracy_score, classification_report

MODEL_VERSION = 2

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

def text_scrubber(values):
    result = []
    for item in values:
        if isinstance(item, list) or isinstance(item, np.ndarray):
            # Join skills into a single string separated by spaces instead of commas
            temp = ' '.join(item)
            result.append(temp.lower())  # Keep it lowercase for consistency
    return result

def create_model_with_feedback():
    # Fetch job postings and user feedback
    job_postings = JobPosting.objects.prefetch_related('skills')
    feedbacks = FeedbackforJob.objects.all()
    
    # Here, assume `feedbacks` is a queryset of feedback instances, which need to be transformed into a DataFrame
    feedbacks_df = pd.DataFrame(list(feedbacks.values('job_posting_id', 'feedback')))
    
    # Transform job postings into DataFrame as before
    jobpostings_list = []
    for jp in job_postings:
        skills = list(jp.skills.values_list('skill_name', flat=True))
        jobpostings_list.append({
            'id': jp.id,
            'title': jp.title,
            'job_description': jp.job_description,
            'skills': skills,
        })
    jobs_df = pd.DataFrame(jobpostings_list)
    
    # Join job postings with feedback
    df = pd.merge(jobs_df, feedbacks_df, left_on='id', right_on='job_posting_id', how='left')
    
    # Fill missing feedback with a neutral value, e.g., 0, if you decide neutral feedback is appropriate
    df['feedback'] = df['feedback'].fillna(0)
    
    return df

def logisticReg(df, comps):
    X = comps
    y = df['cluster_no']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    cluster_lr = LogisticRegression(C=10, penalty='l2', multi_class='multinomial', solver='sag', max_iter=1000)
    
    cluster_lr.fit(X_train, y_train)
    y_pred = cluster_lr.predict(X_test)
    
    print("Accuracy for cluster:", accuracy_score(y_test, y_pred))
    print(classification_report(y_test, y_pred))

    # Assign cluster number to each job title in comps to pull particular cluster out for comparison
    comps['cluster_no'] = y.values
    comps.set_index('cluster_no', inplace=True)

    return cluster_lr

def logisticRegFeedback(df, comps):
    X = comps  

    y = df['feedback'].replace([np.inf, -np.inf], np.nan)  # Replace Inf with NaN
    y = y.dropna()  
    y = y.astype(int)
    if y.dtype == object or not np.issubdtype(y.dtype, np.integer):
        le = LabelEncoder()
        y = le.fit_transform(y)

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    feedback_lr = LogisticRegression(max_iter=1000, random_state=42) #LogisticRegression(C=10, penalty='l2', multi_class='multinomial', solver='sag', max_iter=1000)

    feedback_lr.fit(X_train, y_train)
    y_pred = feedback_lr.predict(X_test)

    print("Accuracy for probability:", accuracy_score(y_test, y_pred))
    print(classification_report(y_test, y_pred))
    return feedback_lr

def settingsDump(MODEL_VERSION,vectorizer_title,vectorizer_skills,cluster_lr,comps_original,comps_cluster,feedback_lr):
    dir_path = f'model_settings_ver{MODEL_VERSION}'
    if not os.path.exists(dir_path):
        os.makedirs(dir_path)
    dump(vectorizer_title, os.path.join(dir_path, 'vectorizer_title.joblib'))
    dump(vectorizer_skills, os.path.join(dir_path, 'vectorizer_skills.joblib'))
    dump(cluster_lr, os.path.join(dir_path, 'cluster_lr.joblib'))
    dump(feedback_lr, os.path.join(dir_path, 'feedback_lr.joblib'))
    dump(comps_original, os.path.join(dir_path, 'comps_original.joblib'))
    dump(comps_cluster, os.path.join(dir_path, 'comps_cluster.joblib'))


def train_model():
    # -------------- Start Script --------------
    print("---- Starting to train model ----")

    vectorizer_title = TfidfVectorizer(min_df=2, max_df=0.8, ngram_range=(1, 8))
    vectorizer_skills = TfidfVectorizer(min_df=2, max_df=0.8)

    df['skills'] = text_scrubber(df['skills'])
    df['skills_new']=df['skills']
    skills_matrix = vectorizer_skills.fit_transform(df['skills_new'].values.astype('U'))
    skills_matrix = pd.DataFrame(skills_matrix.todense())
    skills_matrix.columns = vectorizer_skills.get_feature_names_out()

    df['title_new']=df['title']
    title_matrix = vectorizer_title.fit_transform(df['title_new'].values.astype('U'))
    title_matrix = pd.DataFrame(title_matrix.todense())
    title_matrix.columns = vectorizer_title.get_feature_names_out()

    jobtitle_matrix = pd.concat([title_matrix, skills_matrix], axis=1)
    comps_original = pd.DataFrame(jobtitle_matrix)

    # -------------- K Means --------------
    kmeans = KMeans(n_clusters=25)
    df['cluster_no'] = kmeans.fit_predict(comps_original)

    # -------------- LogisticRegression 1 --------------
    X = comps_original
    y = df['feedback'].replace([np.inf, -np.inf], np.nan)  # Replace Inf with NaN
    y = y.dropna()  
    y = y.astype(int)
    if y.dtype == object or not np.issubdtype(y.dtype, np.integer):
        le = LabelEncoder()
        y = le.fit_transform(y)

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    feedback_lr = LogisticRegression(max_iter=1000, random_state=42) #LogisticRegression(C=10, penalty='l2', multi_class='multinomial', solver='sag', max_iter=1000)

    feedback_lr.fit(X_train, y_train)
    y_pred = feedback_lr.predict(X_test)

    print("Accuracy for probability:", accuracy_score(y_test, y_pred))
    print(classification_report(y_test, y_pred))

    # -------------- LogisticRegression 2 --------------
    X = comps_original
    y = df['cluster_no']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    cluster_lr = LogisticRegression(C=10, penalty='l2', multi_class='multinomial', solver='sag', max_iter=1000)
    
    cluster_lr.fit(X_train, y_train)
    y_pred = cluster_lr.predict(X_test)
    
    print("Accuracy for cluster:", accuracy_score(y_test, y_pred))
    print(classification_report(y_test, y_pred))

    # Assign cluster number to each job title in comps to pull particular cluster out for comparison
    comps_original['cluster_no'] = y.values
    comps_original.set_index('cluster_no', inplace=True)
    comps_cluster = "000"

    # -------------- Save Model Components --------------
    settingsDump(MODEL_VERSION,vectorizer_title,vectorizer_skills,cluster_lr,comps_original,comps_cluster,feedback_lr)


# -------------- Update cluster table in database --------------
def populate_job_clusters():
    for index, row in df.iterrows():
        job_id = row['id']
        cluster_no = row['cluster_no']
        job, created = JobToClusters.objects.get_or_create(job_posting_id=job_id,cluster=cluster_no)

    return job

def update_model_version_database(MODEL_VERSION):
    model_version_str = str(MODEL_VERSION)
    users = User.objects.all()
    for user in users:
        ModelVersion.objects.update_or_create(
            user=user,
            defaults={
                'latest_version': model_version_str  
            }
        )

print(f"----- MODEL VERSION {MODEL_VERSION} -----")
jobs = create_model_with_feedback()
df = pd.DataFrame(jobs)
print("----- Training Model -----")
train_model()
print("----- Deleting all Job to Cluster Table -----")
JobToClusters.objects.all().delete()
print("----- Updating Job to Cluster Table -----")
populate_job_clusters()
print("----- Updating Model Version Resume Table -----")
update_model_version_database(MODEL_VERSION)
