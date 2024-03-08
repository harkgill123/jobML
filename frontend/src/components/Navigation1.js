import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for programmatic navigation
import styles from "./Navigation1.module.css";



const Navigation1 = ({ fullName }) => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Placeholder for the logout function; you'll fill in your logout logic here
  const handleLogout = () => {
    console.log("Logging out...");
    // Remove the token from local storage
    localStorage.removeItem('token');
    //Navigate back to the sign-in page
    navigate('/');
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
              placeholder="Job title, keyword, company"
              type="text"
            />
          </div>
          
        </div>
        <div className={styles.science}>
          <div className={styles.fullName}>{fullName}</div>
          <button className={styles.navButton} onClick={() => navigate('/candidate-homepage')}>Home</button>
          <button className={styles.navButton} onClick={() => navigate('/candidate-dashboard')}>Dashboard</button>
          <button className={styles.navButton} onClick={() => navigate('/candidate-my-profile')}>My Profile</button>
          <button className={styles.navButton} onClick={handleLogout}>Log-out</button>
          <div className={styles.quickLink}>


          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation1;
