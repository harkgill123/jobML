import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import SiteLogo from "../components/SiteLogo";
import FeaturedJob from "../components/FeaturedJob";
import Category from "../components/Category";
import Footer from "../components/Footer";
import styles from "./CandidateHomepage.module.css";

const CandidateHomepage = () => {
  const [fullName, setFullName] = useState("default");
  const [featuredJobs, setFeaturedJobs] = useState([]); // State to hold job data
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    // This effect runs once on component mount to fetch recommended jobs
    const fetchRecommendedJobs = async () => {
      try {
        console.log('Token:', token)
        const response = await fetch('http://localhost:8000/Applicant/recommend-jobs/',{
          headers: {
            'Authorization': `Bearer ${token}`,
  
            'Content-Type': 'application/json',
        
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFeaturedJobs(data.recommended_jobs);
        console.log('Job data:', featuredJobs)
      } catch (error) {
        console.error('Error fetching recommended jobs:', error.message);
      }
    };

    fetchRecommendedJobs();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className={styles.candidateHomepage}>
      <Navigation1 fullName={fullName} />
      <SiteLogo
        findAJobThatSuitsYourInte={`Find a job that suits your interest & skills.`}
        jobTitleKeywordPlacehold="Job title, Keyword..."
      />
      <FeaturedJob
        jobsYouMightLike="Jobs you might like"
        featuredJobs={featuredJobs} // Pass the fetched jobs to the FeaturedJob component
      />
      <Category />
      <Footer />
    </div>
  );
};

export default CandidateHomepage;
