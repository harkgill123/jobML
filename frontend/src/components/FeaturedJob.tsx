import React from "react";
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
  return (
    <section className={styles.featuredJob}>
      <div className={styles.heading}>
        <h1 className={styles.jobsYouMight}>{jobsYouMightLike}</h1>
        <button className={styles.button}>
          <div className={styles.primary}>View All</div>
          <img className={styles.fiarrowRightIcon} alt="" src="/fiarrowright3.svg" />
        </button>
      </div>
      <div className={styles.jobsContainer}>
        {featuredJobs.map((job) => (
          <div key={job.id} className={styles.job}>
            <div className={styles.jobTitle}>{job.title}</div>
            <div className={styles.companyName}>{job.company}</div>
            <div className={styles.locationName}>{job.location}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJob;
