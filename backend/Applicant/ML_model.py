import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import AgglomerativeClustering
from sklearn.decomposition import PCA
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction import text
from pylab import rcParams
rcParams['figure.figsize'] = 50, 20
import nltk
from nltk.corpus import stopwords
import re
import time
start=time.time()
nltk.download('stopwords')
import warnings; warnings.simplefilter('ignore')
import pandas as pd
from joblib import dump


# Functions to clean skills data and make a vocabulary for skills vectorization
common_placeholders = [
    'see job description', 'n/a', 'not applicable', 'none', 'no skills required', 
    'please see job description', 'refer to job description'
]

def text_scrubber(values):
    result = []
    for item in values:
        # If 'item' is a list or an array, handle it appropriately
        if isinstance(item, list) or isinstance(item, np.ndarray):
            item = ', '.join([str(i) for i in item])  # Convert list/array to string
        # Now 'item' should be a string, handle NaN values and strings
        if pd.isna(item):
            result.append('')
        else:
            # Your existing cleaning code
            temp = item.lower()  # Convert to lowercase
            temp = re.sub(r'\(.*\)|&#39;|\x92', '', temp)  # Remove unwanted characters
            temp = re.sub(r' &amp; |&amp;|\x95|:|;|&|\.|/| and ', ',', temp)  # Replace certain characters with comma
            temp = re.sub(r'\s+', ' ', temp).strip()  # Normalize white spaces
            # Optionally, split the skills into a list and remove empty entries
            temp = [skill.strip() for skill in temp.split(',') if skill.strip()]
            # Rejoin the cleaned skills into a string separated by commas
            temp = ','.join(temp)
            result.append(temp)
    return result

def tokenizer(df):
    
    # Custom stop words that come up very often but don't say much about the job title.
    stops = ['manager', 'nice' 'responsibilities', 'used', 'skills', 'duties', 'work', 'worked', 'daily', 'next','magic','world','interview',
             'services', 'job', 'good','using', '.com', 'end', 'prepare', 'prepared', 'lead', 'requirements','#39','see below','yes','null'] + list(stopwords.words('english'))
    values, ids, resume_ids = [],[],[]
    count = 0
    for idx, row in df.iterrows():        
        # Split on commas
        array = row['skills']
        array=str(array)
        array=array.split(',')
        for x in array:
            # make sure the value is not empty or all numeric values or in the stop words list
            if x != '' and not x.lstrip().rstrip() in stops and not x.lstrip().rstrip().isdigit():
                # make sure single character results are the letter 'C' (programming language)
                if len(x) > 1 or x == 'C':
                    # drop stuff > 4 gram
                    if len(x.split(' ')) <= 4:
                        # update lists
                        values.append(x.lstrip().rstrip())
                        ids.append(count)
                        count+=1
    
    # New dataframe with updated values.
    result_df = pd.DataFrame()
    result_df['skills'] = values
    #print(result_df)
    return result_df

df = pd.read_json("../karim/jobs.json")

# Fetch job data from the database
jobs = 
df = pd.DataFrame(jobs)
#print(df)

df['skills'] = text_scrubber(df['skills'])
#print(df['skills'])

test_df = tokenizer(df)

voc = test_df['skills'].unique()
#print(voc)

# Define a function to clean the text in each job description
def clean_text(text):
    cleaned_text = text.replace("&nbsp;", " ").replace("\x92", " ").replace("\x95", " ").replace('&amp;', " ") \
        .replace('*', " ").replace(".", " ").replace("co&#39;s", "").replace("\xae&quot;", "") \
        .replace("&#39;s", "").replace("&quot;", "").replace("?", "").replace("&#39;s", "") \
        .replace("@", "").replace("\x96", "")
    return cleaned_text

# Apply the clean_text function to each element in the 'jobdescription' column
df['desc'] = df['desc'].apply(clean_text)
print(df['desc'])
df['desc'].to_csv("jobdesc_test.csv", index=False)

#min_df ignores terms that are in more than 20% of documents
mine = ['manager', 'amp', 'nbsp', 'responsibilities', 'used', 'skills', 'duties', 'work', 'worked', 'daily','services', 'job', 'using', 'com', 'end', 'prepare', 'prepared', 'lead', 'requirements','summary','Job Role','Position']
vec = TfidfVectorizer(analyzer='word', ngram_range=(1, 2), token_pattern='[a-zA-z]{3,50}', max_df=0.2, min_df=2, max_features=10000, stop_words=list(text.ENGLISH_STOP_WORDS.union(list(mine))), decode_error='ignore', vocabulary=None, binary=False)

df['desc_new']=df['desc']+df['title']
df.to_csv("desc_new.csv", index=False)
description_matrix2 = vec.fit_transform(df['desc_new'].values.astype('U'))
description_matrix2 = pd.DataFrame(description_matrix2.todense())
description_matrix2.columns = vec.get_feature_names_out()

#uses only vocab set made above for vectorization
vec2 = TfidfVectorizer(vocabulary=voc, decode_error='ignore')
df['skills_new']=df['skills']
skills_matrix2 = vec2.fit_transform(df['skills_new'].values.astype('U'))
skills_matrix2 = pd.DataFrame(skills_matrix2.todense())
skills_matrix2.columns = vec2.get_feature_names_out()

jobtitle_matrix = pd.concat([skills_matrix2, description_matrix2], axis=1)
jobtitle_matrix

# Run PCA to reduce number of features
pca = PCA(n_components=600, random_state=42)
comps = pca.fit_transform(jobtitle_matrix)
print(comps)

comps = pd.DataFrame(comps)

# -------------- K Means --------------
from sklearn.cluster import KMeans
cltr = KMeans(n_clusters=12)
cltr.fit(comps)
df['cluster_no'] = cltr.labels_
X = comps
y = df['cluster_no']
X_train, X_test, y_train, y_test = train_test_split(X,y, stratify=y, random_state=42)
lr = LogisticRegression(C=10, penalty='l2', multi_class='multinomial', solver='sag', max_iter=1000)
lr.fit(X_train, y_train)
score=lr.score(X_test, y_test)
print(score)

# Assign cluster number to each job title in comps to pull particular cluster out for comparison
comps['cluster_no'] = y.values
comps.set_index('cluster_no', inplace=True)

# Save your model components
dump(vec, 'vec.joblib')
dump(vec2, 'vec2.joblib')
dump(pca, 'pca.joblib')
dump(lr, 'lr.joblib')
dump(comps, 'comps.joblib')

df.to_json('df.json')