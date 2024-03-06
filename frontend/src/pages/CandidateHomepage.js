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
    const fetchRecommendedJobs = async () => {
      try {
        console.log('Token:', token);
        const response = await fetch('http://localhost:8000/Applicant/recommend-jobs/', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json(); // This will parse the JSON response body content.
        console.log('Received jobs:', json); // Debug: log the raw received data
        
        // Parse the recommended_jobs string into an array
        if (json.hasOwnProperty('recommended_jobs')) {
          let jobsArray;
          try {
            jobsArray = JSON.parse(json.recommended_jobs);
          } catch (e) {
            console.error('Parsing error on recommended_jobs:', e);
            // Handle parsing error if json.recommended_jobs is not a valid JSON string
            jobsArray = []; // Fallback to an empty array
          }
  
          if (Array.isArray(jobsArray)) {
            // Map the received jobs to the expected format
            const mappedJobs = jobsArray.map(item => {
              const job = item.fields;
              return {
                id: item.pk,
                title: job.title,
                company: job.company,
                location: job.location
              };
            });
            setFeaturedJobs(mappedJobs);
          } else {
            console.error('recommended_jobs is not an array:', jobsArray);
          }
        } else {
          console.error('Expected an array of jobs, but received:', json);
        }
      } catch (error) {
        console.error('Error fetching recommended jobs:', error.message);
      }
    };
  
    fetchRecommendedJobs();
  }, [token]); // Dependency array includes token to refetch if it changes
  
  
  
  

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
