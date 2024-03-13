import React, { useEffect, useState } from "react";
import SiteLogo2 from "../components/SiteLogo2";
import Footer from "../components/Footer";
import styles from "./EmployerHomepage.module.css";
import Navigation2 from "../components/Navigation2";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for programmatic navigation

const EmployerHomepage = () => {
  const [jobPostings, setJobPostings] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        console.log('Token:', token);
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
        console.log(data)
        setJobPostings(data);
        

      } catch (error) {
        console.error("Error fetching job postings:", error);
      }
    };

    fetchJobPostings();
  }, []);



  return (
    <div className={styles.employerHomepage}>
      <Navigation2 />
      <SiteLogo2 findAJobThatSuitsYourInte="Find a candidate that suits your needs." />
      
      {/* Map over the job postings and render them */}
      <div className={styles.jobPostings}>
        {jobPostings.map((jobPosting) => (
          <JobPosting key={jobPosting.id} {...jobPosting} />
        ))}
      </div>
      {jobPostings.length === 0 ? (
        <div className={styles.jobContainer}>
          <h2 className={styles.noJobsMessage}>You have not created any jobs.</h2>
          <button className={styles.createJobButton }onClick={() => navigate('/create-job')}>Create a Job</button>
        </div>
      ) : (
        <div className={styles.jobPostings}>
          {jobPostings.map((jobPosting) => (
            <JobPosting key={jobPosting.id} {...jobPosting} />
          ))}
        </div>
      )}
      <Footer propMargin="unset" propMargin1="unset" propMargin2="unset" />
    </div>
  );
};

export default EmployerHomepage;