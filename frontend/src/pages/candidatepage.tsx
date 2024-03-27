import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import Navigation2 from "../components/Navigation2";
import Footer from "../components/Footer";
import styles from './candidatepage.module.css';

type JobPosting = {
  id: string; // or number, depending on your data
  title: string;
};

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
  id: string;
  name: string;
  email?: string;
  phone_number?: string;
  skills?: Skill[];
  educations?: Education[];
  work_experiences?: WorkExperience[];
  projects?: string[];
};
type confidence_rating = {
  score : string;
}
type LocationState = {
  applicant: Applicant;
  confidence_rating: confidence_rating;
};

const CandidatePage: React.FC = () => {
//   const { jobId } = useParams<{ jobId: string }>();
  const location = useLocation();
  const state = location.state as LocationState;
  const token = localStorage.getItem('token');
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [selectedJobId, setSelectedJobId] = useState('');

  console.log("State:", state.applicant)
  if (!state?.applicant) {
    return <Navigate to="/employer-search-page" />;
  }

  const {
    id,
    name,
    email,
    phone_number,
    skills,
    educations,
    work_experiences,
    projects,
  } = state.applicant;
  const filteredWorkExperiences = work_experiences?.filter(experience => experience.company_name !== "Default Company");
  const score = state.confidence_rating;
  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        const response = await fetch('http://localhost:8000/Recruiter/jobPostingListView/', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setJobPostings(data.jobs); // Adjust this if the structure of your data is different
      } catch (error) {
        console.error('Error fetching job postings:', error);
        setJobPostings([]); // Set jobPostings to an empty array in case of error
      }
    };

    fetchJobPostings();
  }, [token]);
  

  const handleJobTitleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Log the value that the user has selected
    console.log("Selected job title:", event.target.value);
  
    // Find the corresponding job in the jobPostings array
    const job = jobPostings.find(j => j.title === event.target.value);
  
    // Log the job object (if found)
    console.log("Corresponding job object:", job);
  
    if (job) {
      setSelectedJobId(job.id);
      // Log the job ID that will be set in the state
      console.log("Setting job ID to:", job.id);
    } else {
      setSelectedJobId('');
      // Log that no job ID will be set because no corresponding job was found
      console.log("No corresponding job found. Resetting job ID.");
    }
  };
  



  const HandleContact = async () => {
    console.log("apply clicked")
    try {
      const response = await fetch('http://localhost:8000/Recruiter/send_email_to_applicant/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ job_id: selectedJobId, applicant_id: id}),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.text();
console.log('Email sent response:', data);
      
    } catch (error) {
      console.error('Error while sending email:', error);
    }
  }
  
  
  
  
  return (
    <div className={styles.jobPage}>
      <Navigation2 />
  
      <div className={styles.jobContent}>
      <div className={styles.jobDetailHeader}>
          <div>
            <h1 className={styles.jobTitle}>{name}</h1>
            {email && <p className={styles.jobCompany}>{email}</p>}
            {phone_number && <p className={styles.jobLocation}>{phone_number}</p>}
          </div>

          <div className={styles.jobActions}>
      
    {Array.isArray(jobPostings) && jobPostings.length > 0 ? (
      <>
        <select 
          onChange={handleJobTitleChange}
          className={styles.jobTitleDropdown}
        >
          <option value="">Select a Job Title</option>
          {jobPostings.map((job) => (
            <option key={job.id} value={job.title}>
              {job.title}
            </option>
          ))}
        </select>
        <button className={styles.findJobButton} onClick={HandleContact}>
          Contact
        </button>
      </>
    ) : (
      <h2 className={styles.noJobsMessage}>You have not created any jobs yet.</h2>
    )}
  </div>
        </div>
        
          
            
            {score && (
              <div className={styles.jobDescriptionSection}>
              <div className={styles.jobExperienceRequired}>
                <h2 className={styles.sectionTitle}>Resume Match</h2>
                <div className={styles.progressContainer}>
                  <progress
                    className={styles.jobConfidenceProgress}
                    value={Number(score)}
                    max="100"
                  ></progress>
                  <div className={styles.percentageLabel}>{Number(score)}%</div>
                </div>
              </div>
              </div>
            )}
          
              
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
