import sys, os, django
from pathlib import Path
sys.path.append(Path(__file__).resolve().parent.parent.__str__())

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'coreApp.settings')
django.setup()
from UserAuth.models import JobPosting,JobToClusters

import pandas as pd
import numpy as np
import re
import time
import nltk
import warnings; warnings.simplefilter('ignore')

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import PCA
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction import text
from pylab import rcParams
from nltk.corpus import stopwords
from joblib import dump
from django.conf import settings

rcParams['figure.figsize'] = 50, 20
start=time.time()
nltk.download('stopwords')

# Functions to clean skills data and make a vocabulary for skills vectorization
common_placeholders = [
    'see job description', 'n/a', 'not applicable', 'none', 'no skills required', 
    'please see job description', 'refer to job description'
]
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
        # If 'item' is a list or an array, handle it appropriately
        if isinstance(item, list) or isinstance(item, np.ndarray):
            item = ', '.join([str(i) for i in item])  # Convert list/array to string
            temp = item.lower()  # Convert to lowercase
            temp = re.sub(r'\(.*\)|&#39;|\x92', '', temp)  # Remove unwanted characters
            temp = re.sub(r' &amp; |&amp;|\x95|:|;|&|\.|/| and ', ',', temp)  # Replace certain characters with comma
            temp = [skill.strip() for skill in temp.split(',') if skill.strip()] # split the skills into a list and remove empty entries
            temp = ','.join(temp) # Rejoin the cleaned skills into a string separated by commas
            result.append(temp)
    return result

def vocab(df):
    all_skills = [] 
    for index, row in df.iterrows():
        skills = row['skills']  # Get the skills string
        if pd.notnull(skills):  # Check if the skills string is not NaN
            skills_list = skills.split(',')  # Split the string into individual skills
            cleaned_skills = [skill.strip() for skill in skills_list if skill.strip()]  # Clean and filter empty strings
            all_skills.extend(cleaned_skills)  # Add to the collective list
    
    # Create a set of unique skills, then convert it back to a list
    vocabulary = list(set(all_skills))
    
    return vocabulary

# function to clean the text in each job description
def clean_text(text):
    cleaned_text = text.replace("&nbsp;", " ").replace("\x92", " ").replace("\x95", " ").replace('&amp;', " ") \
        .replace('*', " ").replace(".", "").replace("co&#39;s", "").replace("\xae&quot;", "") \
        .replace("&#39;s", "").replace("&quot;", "").replace("?", "").replace("&#39;s", "") \
        .replace("@", "").replace("\x96", "").replace("(", "").replace(")", "") \
        .replace("+", "").replace("—", "").replace(":", "").replace(",", "").replace("/", " ")
    return cleaned_text

# -------------- Start Script --------------
print("---- Starting to train model ----")
# Fetch job data from the database
jobs = create_model()
df = pd.DataFrame(jobs)

df['skills'] = text_scrubber(df['skills'])
voc = vocab(df)

# Apply the clean_text function to each element in the 'jobdescription' column
df['desc'] = df['job_description'].apply(clean_text)
df.drop('job_description', axis=1, inplace=True)

#min_df ignores terms that are in more than 20% of documents
mine = ['manager', 'amp', 'nbsp', 'responsibilities', 'used', 'skills', 'duties', 'work', 'worked', 'daily','services', 'job', 'using', 'com', 'end', 'prepare', 'prepared', 'lead', 'requirements','summary','Job Role','Position']

vectorizer_title = TfidfVectorizer(max_features=500, ngram_range=(1, 5))
vectorizer_description = TfidfVectorizer(analyzer='word', ngram_range=(1, 2), token_pattern='[a-zA-z]{3,50}', max_df=0.2, min_df=5, max_features=10000, stop_words=list(text.ENGLISH_STOP_WORDS.union(list(mine))), decode_error='ignore', vocabulary=None, binary=False) #(max_features=1000, ngram_range=(1, 3))
vectorizer_skills = TfidfVectorizer(vocabulary=voc, decode_error='ignore') #((max_features=500, ngram_range=(1, 1))

df['desc_new']=df['desc']
description_matrix = vectorizer_description.fit_transform(df['desc_new'].values.astype('U'))
description_matrix = pd.DataFrame(description_matrix.todense())
description_matrix.columns = vectorizer_description.get_feature_names_out()

df['skills_new']=df['skills']
skills_matrix = vectorizer_skills.fit_transform(df['skills_new'].values.astype('U'))
skills_matrix = pd.DataFrame(skills_matrix.todense())
skills_matrix.columns = vectorizer_skills.get_feature_names_out()

df['title_new']=df['title']
title_matrix = vectorizer_title.fit_transform(df['title_new'].values.astype('U'))
title_matrix = pd.DataFrame(title_matrix.todense())
title_matrix.columns = vectorizer_title.get_feature_names_out()

jobtitle_matrix = pd.concat([title_matrix, skills_matrix, description_matrix], axis=1)
jobtitle_matrix
comps = pd.DataFrame(jobtitle_matrix)
print("Number of features:", comps.shape[1])

# -------------- K Means --------------
from sklearn.cluster import KMeans
kmeans = KMeans(n_clusters=10)
df['cluster_no'] = kmeans.fit_predict(comps)

# -------------- LogisticRegression --------------
from sklearn.metrics import accuracy_score, classification_report
pca = PCA(n_components=2,random_state=42)  # Reduce to 2 dimensions for plotting
reduced_features = pca.fit_transform(comps)
reduced_features = pd.DataFrame(reduced_features)

X = comps
y = df['cluster_no']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
# lr = LogisticRegression(max_iter=1000, random_state=42)
lr = LogisticRegression(C=10, penalty='l2', multi_class='multinomial', solver='sag', max_iter=1000)
lr.fit(X_train, y_train)
y_pred = lr.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))

# Assign cluster number to each job title in comps to pull particular cluster out for comparison
comps['cluster_no'] = y.values
comps.set_index('cluster_no', inplace=True)

# -------------- Save Model Components --------------
dump(vectorizer_title, 'model_settings/vectorizer_title.joblib')
dump(vectorizer_skills, 'model_settings/vectorizer_skills.joblib')
dump(vectorizer_description, 'model_settings/vectorizer_description.joblib')
dump(lr, 'model_settings/lr.joblib')
dump(comps, 'model_settings/comps.joblib')

# -------------- Update cluster table in database --------------
def populate_job_clusters():
    for index, row in df.iterrows():
        job_id = row['id']
        cluster_no = row['cluster_no']
        job, created = JobToClusters.objects.get_or_create(job_posting_id=job_id,cluster=cluster_no)

    return job

JobToClusters.objects.all().delete()
populate_job_clusters()

df.to_json('model_settings/df.json')