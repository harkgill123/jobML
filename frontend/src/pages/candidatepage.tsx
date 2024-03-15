import React from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import Navigation2 from "../components/Navigation2";
import Footer from "../components/Footer";
import styles from './candidatepage.module.css';


/*<div className={styles.jobDetailSection}>
<div className={styles.jobDetail}>
  {posted_date && <p className={styles.jobPostedDate}>Posted: {new Date(posted_date).toLocaleDateString()}</p>}
  {application_deadline && <p className={styles.jobApplicationDeadline}>Deadline: {new Date(application_deadline).toLocaleDateString()}</p>}
  {experience_required && <p className={styles.jobExperienceRequired}>Experience: {experience_required}</p>}
</div>
</div>

*/


/*
   <div className={styles.jobDescriptionSection}>
          <h2 className={styles.sectionTitle}>Description</h2>
          {educations && <p className={styles.jobDescription}>{educations}</p>}
        </div>
        <div className={styles.jobDescriptionSection}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul className={styles.jobDescription}>
          {skills && skills.map((skill, index) => (
            <li key={index} className={styles.jobDescription}>
              {skill}
            </li>
          ))}
        </ul>
      </div>

    */


      /*
      <div className={styles.jobDescriptionSection}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          {filteredWorkExperiences && filteredWorkExperiences.length > 0 ? (
            <div className={styles.workExperienceList}>
              {filteredWorkExperiences.map((experience, index) => (
                <div key={index} className={styles.workExperienceItem}>
                  <h3 className={styles.workExperienceTitle}>{experience.job_title} at {experience.company_name}</h3>
                  <p className={styles.workExperienceDates}>{experience.start_date} to {experience.end_date}</p>
                  <p className={styles.workExperienceDescription}>{experience.job_description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No work experience information provided.</p>
          )}
        </div>*/



        /*
           <div className={styles.jobDescriptionSection}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          {work_experiences && work_experiences.length > 0 ? (
  <div className={styles.workExperienceList}>
    {work_experiences.map((experience, index) => (
      <div key={index} className={styles.workExperienceItem}>
        <h3 className={styles.workExperienceTitle}>
          {experience.company_name === "Default Company" ? 
            experience.job_title : 
            `${experience.job_title} at ${experience.company_name}`
          }
        </h3>
        <p className={styles.workExperienceDates}>{experience.start_date} to {experience.end_date}</p>
        <p className={styles.workExperienceDescription}>{experience.job_description}</p>
      </div>
    ))}
            </div>
          ) : (
            <p>No work experience information provided.</p>
          )}
        </div>
        */
type Skill = {
    skill_name: string;
};
type WorkExperience = {
    company_name: string;
    end_date: string;
    job_description: string;
    job_title: string;
    start_date: string;
};
type Education = {
    school_name: string;
    degree: string;
    start_date: string; // or Date
    end_date: string;   // or Date
    gpa?: string;
  };
type Applicant = {

  name: string;
  email?: string;
  phone_number?: string;
  skills?: Skill[];
  educations?: Education[];
  work_experiences?: WorkExperience[];
  projects?: string[];
};

type LocationState = {
  applicant: Applicant;
};

const CandidatePage: React.FC = () => {
//   const { jobId } = useParams<{ jobId: string }>();
  const location = useLocation();
  const state = location.state as LocationState;
  console.log("State:", state.applicant)
  if (!state?.applicant) {
    return <Navigate to="/employer-search-page" />;
  }

  const {
    name,
    email,
    phone_number,
    skills,
    educations,
    work_experiences,
    projects,
  } = state.applicant;
  const filteredWorkExperiences = work_experiences?.filter(experience => experience.company_name !== "Default Company");
  return (
    <div className={styles.jobPage}>
      <Navigation2 />
  
      <div className={styles.jobContent}>
        <div className={styles.jobDetailHeader}>
          <h1 className={styles.jobTitle}>{name}</h1>
          {email && <p className={styles.jobCompany}>{email}</p>}
          {phone_number && <p className={styles.jobLocation}>{phone_number}</p>}
        </div>
     
     
        <div className={styles.jobDescriptionSection}>
  <h2 className={styles.sectionTitle}>Education</h2>
  {educations && educations.length > 0 ? (
    <ul className={styles.list}>
      {educations.map((education, index) => (
        <li key={index} className={styles.listItem}>
          <p><strong>School:</strong> {education.school_name}</p>
          <p><strong>Degree:</strong> {education.degree}</p>
          <p><strong>Start Date:</strong> {education.start_date}</p>
          <p><strong>End Date:</strong> {education.end_date}</p>
   
        </li>
      ))}
    </ul>
  ) : (
    <p>No education information provided.</p>
  )}
</div>
            

     
        <div className={styles.jobDescriptionSection}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          {skills && skills.length > 0 ? (
            <ul className={styles.list}>
              {skills.map((skill, index) => (
                <li key={index} className={styles.listItem}>
                  {skill.skill_name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No skills information provided.</p>
          )}
        </div>
        
        <div className={styles.jobDescriptionSection}>
  <h2 className={styles.sectionTitle}>Work Experience</h2>
  {work_experiences && work_experiences.length > 0 ? (
    <div className={styles.workExperienceList}>
      {work_experiences.map((experience, index) => (
        <div key={index} className={styles.workExperienceItem}>
          <h3 className={styles.workExperienceTitle}>
            {experience.company_name === "Default Company" ? 
              experience.job_title : 
              `${experience.job_title} at ${experience.company_name}`}
          </h3>
          <p className={styles.workExperienceDates}>
            {experience.start_date} to {experience.end_date}
          </p>
          <div className={styles.workExperienceDescription}>
  {/* Split description by '- ' (hyphen followed by space) and render each part */}
  {experience.job_description.split('- ').map((part, idx) => (
    <React.Fragment key={idx}>
      {/* Add a bullet point before each item except the first */}
      {idx > 0 && <span>• </span>}
      {part}
      {/* Ensure we don't add a new line after the last item */}
      {idx < experience.job_description.split('- ').length - 1 && <br />}
    </React.Fragment>
  ))}
</div>
        </div>
      ))}
    </div>
  ) : (
    <p>No work experience information provided.</p>
  )}
</div>

      </div>
  
      <Footer />
    </div>
  );
  
  
};

export default CandidatePage;
