import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for programmatic navigation
import styles from "./Navigation1.module.css";

const Navigation2 = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation
  const [searchQuery, setSearchQuery] = useState(""); // State to keep track of the search query

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleFindJob = async () => {
    console.log("Finding job...");
    console.log("Search query:", searchQuery); // Print the search query
  
    try {
      const response = await fetch('http://127.0.0.1:8000/Recruiter/search_applicants/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'X-CSRFToken': csrfToken // Include this if you're not exempting CSRF verification
        },
        body: JSON.stringify({ q: searchQuery }),
        credentials: 'include' // Required if you're sending CSRF token from a cookie
      });
  
      if (!response.ok) {
        // const data = await response.json();
        // console.log(data.jobs)
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();

      console.log(data.applicants)
      navigate('/employer-search-page', { state: { searchQuery, applicants: data.applicants } });
    } catch (error) {
      console.error("There was an error with the search:", error);
    }
  };
  

  return (
    <header className={styles.navigation}>
      <div className={styles.navigation1}>
        <div className={styles.button}>
          <img className={styles.buttonChild} alt="" src="/ellipse-18@2x.png" />
        </div>
        <div className={styles.loaction}>
          <div className={styles.categoryIconGroup}>
            <div className={styles.sitelogo}>
              <div className={styles.digitalMarketing} />
              <div className={styles.digitalMarketing1} />
              <div className={styles.digitalMarketing2} />
              <div className={styles.sitelogo1} />
            </div>
            <h3 className={styles.jobsync}>JobSync</h3>
          </div>
        </div>
        <div className={styles.videoAnimation}>
          <div className={styles.search}>
            <div className={styles.searchChild} />
            <img className={styles.fisearchIcon} alt="" src="/fisearch.svg" />
            <input
              className={styles.jobTitleKeyword}
              placeholder="Candidate, skills, experience..."
              type="text"
              value={searchQuery} // Controlled input
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={styles.findJobButton} onClick={handleFindJob}>Search</button> {/* Added find job button */}
          </div>
        </div>
        <div className={styles.science}>
          <button className={styles.navButton} onClick={() => navigate('/employer-homepage')}>Home</button>
          <button className={styles.navButton} onClick={() => navigate('/employer-dashboard')}>Liked Applicants</button>
          <button className={styles.navButton} onClick={() => navigate('/employer-my-profile')}>My Profile</button>
          <button className={styles.navButton} onClick={handleLogout}>Log-out</button>
          <div className={styles.quickLink}>
            {/* Other links or buttons */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation2;
