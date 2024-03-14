import React from 'react';
import { useEffect, useState } from "react";
import { useParams, useLocation, Navigate } from 'react-router-dom';
import Navigation2 from "../components/Navigation2";
import Footer from "../components/Footer";
import styles from './EmployerRecommendedCandidates.module.css';

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

const EmployerRecommendedCandidates: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const location = useLocation();
  const state = location.state as LocationState;
  const token = localStorage.getItem('token');
  const [recommendedCandidates, setRecommendedCandidates] = useState([]);

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


  useEffect(() => {
    const fetchRecommendedCandidates = async () => {
      try {
        // Use the `jobId` from the URL parameters in the request
        const response = await fetch('http://localhost:8000/Recruiter/candidate-recommendations/', {
          method: 'POST', // Use the correct method expected by your backend
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ job_id: jobId }) // Send the job_id in the body of the request
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        console.log('Received recommendations:', json);

        // Add logic to handle the json and set the state for recommendedCandidates
        // ...

      } catch (error) {
        console.error('Error fetching recommended candidates:', error);
      }
    };

    if (jobId && token) {
      fetchRecommendedCandidates();
    }
  }, [jobId, token]);








  return (
    <div className={styles.jobPage}>
      <Navigation2 />
  
      <div className={styles.jobContent}>
        {/* Left Column for Job Details */}
        <div className={styles.jobDetailColumn}>
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
            {posted_date && <p className={styles.jobPostedDate}>Posted: {new Date(posted_date).toLocaleDateString()}</p>}
            {application_deadline && <p className={styles.jobApplicationDeadline}>Deadline: {new Date(application_deadline).toLocaleDateString()}</p>}
            {experience_required && <p className={styles.jobExperienceRequired}>Experience: {experience_required}</p>}
          </div>
        </div>
  
        {/* Right Column for Additional Content */}
        <div className={styles.additionalContentColumn}>
          {/* Place additional components or content here */}
          <div className={styles.jobDetailColumn}>
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
            {posted_date && <p className={styles.jobPostedDate}>Posted: {new Date(posted_date).toLocaleDateString()}</p>}
            {application_deadline && <p className={styles.jobApplicationDeadline}>Deadline: {new Date(application_deadline).toLocaleDateString()}</p>}
            {experience_required && <p className={styles.jobExperienceRequired}>Experience: {experience_required}</p>}
          </div>
        </div>
        </div>
      </div>
  
      <Footer />
    </div>
  );
  
  
  
};

export default EmployerRecommendedCandidates;
