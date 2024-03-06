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
        while(True):
            posting = self.driver.find_elements(By.XPATH, "//a[contains(@href, '/resume/')]")

            for index,post in enumerate(posting):
                post.click()
                time.sleep(3)

                doc=BeautifulSoup(self.driver.page_source,"html.parser")
                resume_info = doc.find("div",class_="normalText").get_text()
                print(resume_info)
                ret = self.extractor.extract_all(text=resume_info)
                print(ret)
                # input("wait")
                time.sleep(3)
                self.driver.back()
                time.sleep(3)
            
            next_page = self.driver.find_element(By.LINK_TEXT, 'Next').click()

            

        
if __name__ == "__main__":
    test=ScrapeResume()
    test.connect()
    test.search_resume("software engineer")

    test.scrape_resume()