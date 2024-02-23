import PyPDF2
import re
import csv

import spacy




class ResumeExtractor:
    def __init__(self):
        with open("coreApp/ResumeScraper/skills.csv") as fp:
            render = csv.reader(fp,delimiter=",")

            data_read= [row for row in render]


        self.new_skills= [i.lower() for i in data_read[0]]

    def read_pdf(self,path):
        resume = open(path, 'rb')

        resumepdf= PyPDF2.PdfReader(resume)

        text=""
        for page in resumepdf.pages:
            text+=page.extract_text()
            
            


        text2 = ' '.join(text.split())
        def remove_non_ascii_1(text):

            return ''.join(i for i in text if ord(i)<128)

        text3=remove_non_ascii_1(text2).replace(","," ").replace(":"," ").lower()
        return text3
    def FindEmail(self,text):
        email =""
        for word in text.split(" "):
            
            if re.findall("([a-z]|.)*@[a-z]*\.(com|ca)",word):
                email = word
                break
        return email
    def ExtractSkills(self,text):
        list_of_skills=["amazon dynamodb","amazon rds/aurora","amazon redshift","apache hbase","apache hive","aster data","cassandra","elasticsearch", "filemaker pro","firebird","google bigquery",
            "google cloud storage","greenplum","hsqldb","ibm db2","informix","mariadb", "memcached","memsql","microsoft access","microsoft azure (tables, cosmosdb, sql, etc)","microsoft azure"
            "mongodb","msql","mysql","neo4j","netezza","oracle","panorama","postgresql","redis","sap hana","sql server","sqlite","teradata","timesten","unidata","universe","vertica","Back End","C-suite executive","Cloud Computing","Data Scientist","Data or business analyst","business analyst","data analyst","Database Administrator(DBA)","Database Administrator"
                 ,"designer","Devops","academic researcher","educator","Embedded applications","embedded devices developer","Engineering manager","Enterprise application","Front End"
                 ,"Full stack","Game developer","Information Security","Mobile Developer","Network Engineer","product manager","QA","Test developer","Sales professional","software developer","java developer"
                 ,"sudent","system administrator","web developer",".net core","agile","angular","asp.net mvc","aura","aurelia","bottle","cakephp","cassandra","catalyst","cloudera","codeigniter","cordova","couchdb","cuba",
                                "django","dojo","dropwizard","durandal","elm","ember.js","express","flask","flatiron","flex","flink","google web toolkit","grails","hadoop","halcyon","hive","hpcc",
                                "jsf","koa","laravel","lift","lithium","map reduce","mason","meteor","moustache","ninja","nitro","node.js","pentaho","phoenix","play","polymer","pyramid",
                                "rapidminer","react","revel","riot.js","ruby on rails","rum","simplex","sinatra","solar","spark","spring","storm","struts","symfony","tapestry","tensorflow","pytorch"
                                ,"tornado","vaadin","vanilla","vert.x","vue.js","web2py","wicket","xamarin","yarn","yii","zend","zope",".net","abap","abc","actionscript","ada","ajax","apex","apl","applescript","arc","arduino","asp","assembly","atlas","automator","avenue","awk","bash","bc","bourne shell","bro"
                            ,"c","c shell","c#","c++","caml","ceylon","cfml","ch","clarion","clean","clojure","cobol","cobra","coffeescript","coldfusion","css","ct","d","dart"
                            ,"dcl","pascal","e","ecl","ec","ecmascript","egl","elixir","erlang","f#","falcon","felix","forth","fortran","fortress","go","gosu","groovy","hack","haskell",
                            "html","icon","idl","inform","informix-4gl","io","java","jade","javascript","jscript","julia","korn shell","kotlin","labview","ladder logic","lingo","lisp"
                            ,"logo","lotusscript","lpc","lua","lustre","magic","mantis","mathematica","matlab","mercury","ml","monkry","moo","mumps",
                            "objective-c","ocaml","occam","ooc","opa","opencl","perl","php","pilot","sql","postscript","powerscript","powershell","puppet","python","q","r","rexx","ruby","ruby on rails"
                            ,"rust","s","s-plus","sas","scala","scilab","sed","self","shell","signal","simula","simulink","smalltalk","smarty","spark","spss","sqr","swift","tacl","tcl","tom","transact-sql"
                            ,"typescript","vb.net","vba","vbscript","verilog","vhdl","visual basic 6","xen","xquery","xslt","amazon echo","android","apple watch","apple tv","arduino","aws","azure","drupal","esp8266","firebase","gaming console","google cloud platform","heroku","google home","ibm cloud","watson"
                            ,"ios","linux","mac os","mainframe","predix","raspberry pi","salesforce","serverless","sharepoint","windows desktop","windows server","windows phone","wordpress","c/c++","nosql","quartus","hip" , "cuda","git","github","git/github","react.js"]

        list_of_skills.append(self.new_skills)
        skill=[]
        for word in text.split(" "):
            
            if word in list_of_skills:
                skill.append(word)
        return skill
    def FindNumber(self,text):
        
        
        phone_number= re.findall("\(\d+\)\s\d+-\d+",text )

        if not(phone_number):
            phone_number= re.findall("\d+-\d+-\d+",text )

        if phone_number:
            return phone_number
        else:
            return ""
    def ExtractExperience(self,text):
        job_description = ""


        if len(text.split("work experience")) == 1:
            job_description = text.split("employement")[1].split("projects")[0]
        else:
            job_description = text.split("work experience")[1].split("projects")[0]
        return job_description
    def use_nlp(self,text):
        nlp = spacy.load("en_core_web_sm")
        doc = nlp(text)
        first_name=""
        last_name=""
        for token in doc:
                # print(token.text, token.lemma_, token.pos_, token.tag_, token.dep_,
                #         token.shape_, token.is_alpha, token.is_stop)
                if first_name=="" and token.pos_=="PROPN":
                    first_name=token.text
                    # print(token.text, token.lemma_, token.pos_, token.tag_, token.dep_,
                    #     token.shape_, token.is_alpha, token.is_stop)
                elif last_name=="" and token.pos_=="PROPN":
                    last_name=token.text
                    # print(token.text, token.lemma_, token.pos_, token.tag_, token.dep_,
                    #     token.shape_, token.is_alpha, token.is_stop)
                    break
        return [first_name,last_name]
    def extract_all(self,filename):
        text= self.read_pdf(filename)
        firstname,lastname = self.use_nlp(text)
        data = {"email" : self.FindEmail(text),"phonenumber": self.FindNumber(text),"firstname":firstname , "lastname" : lastname , "skills" : self.ExtractSkills(text),"experience": self.ExtractExperience(text)}
        return data
if __name__ == "__main__":
    resextractor = ResumeExtractor()
    data = resextractor.extract_all("karim_soubra_resume.pdf")
    print(data)
