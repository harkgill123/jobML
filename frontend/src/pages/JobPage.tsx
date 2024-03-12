import React from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import Navigation1 from "../components/Navigation1";
import Footer from "../components/Footer";
import styles from './JobPage.module.css';

type Job = {
  id: number;
  title: string;
  company_name?: string;
  location?: string;
  posted_date?: string;
  application_deadline?: string;
  experience_required?: string;
  job_description?: string;
};

type LocationState = {
  job: Job;
};

const JobPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const location = useLocation();
  const state = location.state as LocationState;

  if (!state?.job) {
    return <Navigate to="/candidate-search-page" />;
  }

  const {
    title,
    company_name,
    location: jobLocation,
    posted_date,
    application_deadline,
    experience_required,
    job_description,
  } = state.job;

  return (
    <div className={styles.jobPage}>
      <Navigation1 />
  
      <div className={styles.jobContent}>
        <div className={styles.jobDetailHeader}>
          <h1 className={styles.jobTitle}>{title}</h1>
          {company_name && <p className={styles.jobCompany}>{company_name}</p>}
          {jobLocation && <p className={styles.jobLocation}>{jobLocation}</p>}
        </div>
    
        <div className={styles.jobDescriptionSection}>
          <h2 className={styles.sectionTitle}>Description</h2>
          {job_description && <p className={styles.jobDescription}>{job_description}</p>}
        </div>
    
        <div className={styles.jobDetailSection}>
          <div className={styles.jobDetail}>
            {posted_date && <p className={styles.jobPostedDate}>Posted: {new Date(posted_date).toLocaleDateString()}</p>}
            {application_deadline && <p className={styles.jobApplicationDeadline}>Deadline: {new Date(application_deadline).toLocaleDateString()}</p>}
            {experience_required && <p className={styles.jobExperienceRequired}>Experience: {experience_required}</p>}
          </div>
          {/* Add more job details here */}
        </div>
      </div>
  
      <Footer />
    </div>
  );
  
  
};

export default JobPage;
