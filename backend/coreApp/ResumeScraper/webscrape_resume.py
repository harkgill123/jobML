from selenium import webdriver
import nltk
nltk.download('punkt')
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize,sent_tokenize
from nltk import ngrams
import time
from bs4 import BeautifulSoup
import pprint
import pickle
import re
import pandas as pd
import uuid
import json
import os
from resume import ResumeExtractor
from django.conf import settings
import django
import os
from django.db.models import Q
import string
from random import randint,choice


import sys
from pathlib import Path
sys.path.append(Path(__file__).resolve().parent.parent.__str__())

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'coreApp.settings')
django.setup()

#might need to ensure no repeat uploads
from UserAuth.models import Resume,Education,WorkExperience
from Applicant.serializers import ResumeSerializer
from UserAuth.serializers import UserSerializer
class ScrapeResume:

    def __init__(self):
        
        
        self.jobs_to_upload=[]
        self.jobs_to_check=[]
        self.extractor=ResumeExtractor()
        opt= Options()
        opt.add_argument("--disable-popup-blocking")
        opt.add_experimental_option("detach", True)
        self.driver = webdriver.Chrome(opt)
        self.indeed=False
        self.gdoor=False
        self.link="https://www.postjobfree.com/resumes?q=&l=Toronto%2C+ON%2C+Canada&radius=25"
    def connect(self):
        self.driver.get(self.link)
        self.driver.maximize_window()
        time.sleep(5)


    def search_resume(self,res_name:str):
        element = self.driver.find_element("xpath","//input[@id='q']") # find search box
        element.clear()
        element.send_keys(res_name)
        element.send_keys(Keys.RETURN)
        time.sleep(3)
 
        time.sleep(3)
    def scrape_resume(self,limit:int=100):
        counter = 0
        while(True):
            posting = self.driver.find_elements(By.XPATH, "//a[contains(@href, '/resume/')]")

            for post in posting:
                post.click()
                time.sleep(3)

                doc=BeautifulSoup(self.driver.page_source,"html.parser")
                resume_info = doc.find("div",class_="normalText").get_text()
                
                ret = self.extractor.extract_all(text=resume_info)
                clean_resume_text= self.extractor.read_resume(text=resume_info,pdf=False)
                name = self.extractor.extract_name(clean_resume_text)
                create_user= {"username" : name, "name" : name , "email" : self.extractor.extract_email(clean_resume_text) , "password" : None , "phone_number" : self.extractor.extract_number(clean_resume_text)}
                
                for _ in range(0,10):
                    if create_user["phone_number"] == "none":
                        create_user["phone_number"] += "" + randint(0,9)
                    
                    if create_user["name"] == "none":
                        create_user["name"] += choice(string.ascii_lowercase)
                        create_user["name"] += choice(string.ascii_letters)
                    if create_user["email"] == "none":
                        create_user["email"] +=choice(string.ascii_lowercase)
                    create_user["password"] +=choice(string.ascii_lowercase)
                            
                if not(re.match(".+@\w+.\w+",create_user["email"])):
                    create_user["email"] +="@gmail.com"
                user_serializer = UserSerializer(data=create_user)
                if user_serializer.is_valid():
                    instance = user_serializer.save()

                resume_serializer = ResumeSerializer(data=ret, context={'user': instance})

                if resume_serializer.is_valid():
                    resume_serializer.save()


                time.sleep(3)
                self.driver.back()
                time.sleep(3)
                counter +=1

            
            if counter >= limit:
                break
            self.driver.find_element(By.LINK_TEXT, 'Next').click()

            

        
if __name__ == "__main__":
    test=ScrapeResume()
    test.connect()
    test.search_resume("software engineer")

    test.scrape_resume()