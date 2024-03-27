import React, { useState, useEffect } from 'react';
import styles from './Stats.module.css'; // assuming you have this CSS file

const Stats = () => {
  const [statsData, setStatsData] = useState({
    totalUsers: 0,
    totalRecruiters: 0,
    totalApplicants: 0,
    totalJobPostings: 0,
    dataScienceRoles: 0,
    frontendRoles: 0
  });

  useEffect(() => {
    fetchStatsData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const fetchStatsData = async () => {
    try {
      const response = await fetch('http://localhost:8000/UserAuth/stats_view'); // Replace '/api/stats_view' with your actual backend API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setStatsData({
        totalUsers: data.total_users,
        totalRecruiters: data.total_recruiters,
        totalApplicants: data.total_applicants,
        totalJobPostings: data.total_job_postings,
        dataScienceRoles: data.data_science_roles,
        frontendRoles: data.frontend_roles
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className={styles.statsContainer}>
      <div className={styles.statsBox} style={{ backgroundColor: '#3c90ff33' }}>
        <div className={styles.statValue}>{statsData.totalApplicants}</div>
        <div className={styles.statLabel}>Total Applicants</div>
      </div>
      <div className={styles.statsBox} style={{ backgroundColor: '#ffc13c38' }}>
        <div className={styles.statValue}>{statsData.totalRecruiters}</div>
        <div className={styles.statLabel}>Total Recruiters</div>
      </div>
      <div className={styles.statsBox} style={{ backgroundColor: '#ff3c9d38' }}>
        <div className={styles.statValue}>{statsData.totalUsers}</div>
        <div className={styles.statLabel}>Total Users</div>
      </div>
      <div className={styles.statsBox} style={{ backgroundColor: '#3c90ff33' }}>
        <div className={styles.statValue}>{statsData.frontendRoles}</div>
        <div className={styles.statLabel}>Frontend Roles</div>
      </div>
      <div className={styles.statsBox} style={{ backgroundColor: '#ffc13c38' }}>
        <div className={styles.statValue}>{statsData.totalJobPostings}</div>
        <div className={styles.statLabel}>Total Job Postings</div>
      </div>
      <div className={styles.statsBox} style={{ backgroundColor: '#ff3c9d38' }}>
        <div className={styles.statValue}>{statsData.dataScienceRoles}</div>
        <div className={styles.statLabel}>Data Science Roles</div>
      </div>
    </div>
  );
};

export default Stats;
