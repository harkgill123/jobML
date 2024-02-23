import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from pylab import rcParams
rcParams['figure.figsize'] = 50, 20
import nltk
import time
start=time.time()
nltk.download('stopwords')
import warnings; warnings.simplefilter('ignore')
import os
import json
import pandas as pd
from joblib import load

# Load your model components
vec = load('vec.joblib')
vec2 = load('vec2.joblib')
pca = load('pca.joblib')
lr = load('lr.joblib')
comps = load('comps.joblib')
df = pd.read_json('df.json')

def update_user_feedback(user_id, job_id, feedback):
    # Path to the suggestions JSON file
    suggestions_file_path = 'suggestions_user.json'
    
    if not os.path.isfile(suggestions_file_path):
        print("File not found!")
        return
    
    with open(suggestions_file_path, 'r') as file:
        suggestions_data = json.load(file)
    
    # Update the feedback for the specific user_id and job_id
    for entry in suggestions_data:
        if entry['user_id'] == user_id and entry['job_id'] == job_id:
            entry['feedback'] = feedback
            break
    
    # Write the updated suggestions back to the JSON file
    with open(suggestions_file_path, 'w') as file:
        json.dump(suggestions_data, file, indent=4)

def update_suggestions_json(user_id, new_suggestions_list):
    # Path to the suggestions JSON file
    suggestions_file_path = 'suggestions_user3.json'
    
    # Check if the suggestions file already exists
    if os.path.isfile(suggestions_file_path):
        # Read the existing data
        with open(suggestions_file_path, 'r') as file:
            suggestions_data = json.load(file)
    else:
        # Initialize an empty list if the file does not exist
        suggestions_data = []
    
    # Remove any existing suggestions for this user
    suggestions_data = [entry for entry in suggestions_data if entry['user_id'] != user_id]
    
    # Add new suggestions for this user
    suggestions_data.extend(new_suggestions_list)
    
    # Write the updated suggestions back to the JSON file
    with open(suggestions_file_path, 'w') as file:
        json.dump(suggestions_data, file, indent=4)

def load_feedback():
    feedback_file_path = 'suggestions_user.json'
    if os.path.isfile(feedback_file_path):
        with open(feedback_file_path, 'r') as file:
            feedback_data = json.load(file)
        return feedback_data
    else:
        return []
    
def adjust_scores_based_on_feedback(cos_sim, feedback_data):
    for feedback in feedback_data:
        job_id = feedback["job_id"]
        job_title = feedback["suggestions"]
        user_feedback = feedback["feedback"]
        # Adjust score based on feedback
        if job_title in cos_sim.index:
            print(f"job title: {job_title}")
            if user_feedback == 1:
                # Increase score for positive feedback
                print("userfeedback = 1")
                print(f"value:{cos_sim.at[job_title, 'score']}")
                cos_sim.loc[job_title, 'score'] *= 1.3  # Adjust multiplier as needed
                print(f"value after:{cos_sim.at[job_title, 'score']}")
            elif user_feedback == -1:
                # Decrease score for negative feedback
                print("userfeedback = -1")
                print(f"value:{cos_sim.at[job_title, 'score']}")
                cos_sim.loc[job_title, 'score'] *= 0.7  # Adjust multiplier as needed
                print(f"value after:{cos_sim.at[job_title, 'score']}")

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
    print('CLUSTER NUMBER', cluster, '\n\n')

    # Calculate cosine similarity
    cos_sim = pd.DataFrame(cosine_similarity(user_comps, comps[comps.index == cluster]))

    # Filter feedback for the current user
    user_feedback = [item for item in feedback_data if item["user_id"] == user_id]
    
    # Get job titles from df to associate cosine similarity scores with jobs
    samp_for_cluster = df[df['cluster_no'] == cluster]
    cos_sim = cos_sim.T.set_index(samp_for_cluster['title'])
    cos_sim.columns = ['score']

    # Adjust scores based on feedback
    cos_sim = adjust_scores_based_on_feedback(cos_sim, user_feedback)
  
    # Print the top ten suggested jobs for the user's cluster after adjustment
    top_cos_sim = cos_sim.sort_values('score', ascending=False)[:15]
    print('Top ten suggested for your cluster', '\n', top_cos_sim, '\n\n')
    
    new_suggestions_list = []
    for job_title, score in top_cos_sim.to_dict()['score'].items():
        job_id = samp_for_cluster[samp_for_cluster['title'] == job_title]['uid'].values[0]
        new_suggestions_list.append({
            "user_id": user_id,
            "job_id": job_id,
            "suggestions": job_title,
            "score": score,
            "feedback": 0  # Initial feedback value
        })
    
    update_suggestions_json(user_id, new_suggestions_list)
    return top_cos_sim


user_data = pd.read_json("../hybrid/user_data.json")
sel_user_id = 1
resume_text_row = user_data.loc[user_data['user_id'] == sel_user_id, 'user_data']
resume_text = resume_text_row.iloc[0]
print(resume_text)

# ------------- reccomendations -------------
cos_sim_result = give_suggestions(sel_user_id, resume_text)

# ------------- feedback -------------
update_user_feedback(user_id=2, job_id='222d8da33f324a7b836368cdada0a053', feedback=1)