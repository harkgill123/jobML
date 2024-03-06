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


class ScrapeResume:

    def __init__(self):
        
        
        self.jobs_to_upload=[]
        self.jobs_to_check=[]
        
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
            # self.driver.find_element("xpath","//a[@class='css-145oca5 emf9s7v0']").click() #set to find newest job posts
            # time.sleep(3)
            # while(True):
            #     try:
                    
            #         e=self.driver.find_elements("xpath", "//input[@id='search']") # close the pop up
            #         time.sleep(3)
                        
            #         if(len(e)!=0):     
            #             e[0].click()

            #             time.sleep(3)
                        
            #             break
            #         else:
            #             pass
            #     except:
            #         pass
        time.sleep(3)
    def scrape_resume(self,limit:int=100):

        posting = self.driver.find_elements(By.XPATH, "//a[contains(@href, '/resume/')]")
        print("PRINTING POSTINGS")

        # print(posting)
        # home_window= self.driver.current_window_handle
        for post in posting:
            post.click()
            time.sleep(10)
            self.driver.back()
            # input("waiting")
        
if __name__ == "__main__":
    test=ScrapeResume()
    test.connect()
    test.search_resume("software engineer")

    test.scrape_resume()