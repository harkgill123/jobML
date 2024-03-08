import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FeaturedJob.module.css";

export type Job = {
  id: number; // or string, depending on your backend
  title: string;
  company?: string; // Optional if the backend may not provide this field
  location?: string; // Optional if the backend may not provide this field
};

export type FeaturedJobProps = {
  jobsYouMightLike: string;
  featuredJobs: Job[];
};



const FeaturedJob = ({ jobsYouMightLike, featuredJobs }: FeaturedJobProps) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLike = async (jobId: number) => {
    try {
      console.log('Token:', token);
      console.log(jobId);
      const response = await fetch('http://localhost:8000/Applicant/update_feedback/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ job_id: jobId, feedback: '1' }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      window.location.reload();
      const data = await response.json();
      console.log('Like response:', data);
    } catch (error) {
      console.error('Error sending like:', error);
    }
  };
  
  const handleDislike = async (jobId: number) => {
    try {
      const response = await fetch('http://localhost:8000/Applicant/update_feedback/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ job_id: jobId, feedback: '-1' }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      window.location.reload();
      const data = await response.json();
      console.log('Dislike response:', data);
    } catch (error) {
      console.error('Error sending dislike:', error);
    }
  };
  
  return (
    <section className={styles.featuredJob}>
      <div className={styles.heading}>
        <h1 className={styles.jobsYouMight}>{jobsYouMightLike}</h1>
      </div>
      <div className={styles.jobsContainer}>
        {featuredJobs.map((job) => (
          <div key={job.id} className={styles.job}>
            <div className={styles.jobTitle}>{job.title}</div>
            <div className={styles.companyName}>{job.company}</div>
            <div className={styles.locationName}>{job.location}</div>
            <div className={styles.interactionIcons}>
              <button className={styles.likeButton} onClick={() => handleLike(job.id)}>
                <img
                  className={styles.thumbsupIcon}
                  loading="lazy"
                  alt="Like"
                  src="/thumbsup.svg"
                />
              </button>
              <button className={styles.dislikeButton} onClick={() => handleDislike(job.id)}>
                <img
                  className={styles.thumbsdownIcon}
                  loading="lazy"
                  alt="Dislike"
                  src="/thumbsdown.svg"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJob;
