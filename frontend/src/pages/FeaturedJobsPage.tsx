import React from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import Navigation1 from "../components/Navigation1";
import Footer from "../components/Footer";
import styles from './FeaturedJobsPage.module.css';





// type Skill = {
//     skill_name: string;
// };
type job = {

    title: string;
    company_name?: string;
    location?: string;
    description?: string;
    posted_date?: Date;
    application_deadline?: Date;
    employment_type?:string;
    skills?: String[];
    experience_required?: string;

  };
type confidence_rating = {
  score : string;
}
type job_id = {
  jobId : number;
}
type LocationState = {
    job: job;
    confidence_rating: confidence_rating;
    job_id: job_id;
  };
const FeaturedJobsPage: React.FC = () => {
    const token = localStorage.getItem('token');
    const location1 = useLocation();
    const state = location1.state as LocationState;
    console.log("State:", state.job)
    console.log("rating:", state.confidence_rating)    
    // console.log("score is",state.sc1)
    if (!state?.job) {
        return <Navigate to="/candidate-search-page" />;
      }
    const {
        title,
        company_name,
        location,
        description,
        posted_date,
        application_deadline,
        employment_type,
        skills,
        experience_required,
    } = state.job;
    const score = state.confidence_rating;
    const jobId = state.job_id;
    console.log(jobId)
    console.log(score)
    console.log(skills)
    console.log("location:",location)
    const HandleApply = async () => {
      console.log("apply clicked")
      try {
        const response = await fetch('http://localhost:8000/Applicant/send_email_to_recruiter/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ job_id: jobId}),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('email sent response:', data);
        
      } catch (error) {
        console.error('Error sending dislike:', error);
      }
    }
    
    return (    <div className={styles.jobPage}>
      <Navigation1 />
    
        <div className={styles.jobContent}>
          <div className={styles.jobDetailHeader}>
            <div>
              <h1 className={styles.jobTitle}>{title}</h1>
              {company_name && <p className={styles.jobCompany}>{company_name}</p>}
            </div>
          <button className={styles.findJobButton} onClick={HandleApply}>Apply</button>
          </div>
          <div className={styles.jobDescriptionSection}>
            <h2 className={styles.sectionTitle}>Resume Match</h2>
            {score && (
              <div className={styles.jobExperienceRequired}>
                <div className={styles.progressContainer}>
                  <progress
                    className={styles.jobConfidenceProgress}
                    value={Number(score)}
                    max="100"
                  ></progress>
                  <div className={styles.percentageLabel}>{Number(score)}%</div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.jobDetailSection}>
              <div className={styles.jobDescriptionSection}>
                <h2 className={styles.sectionTitle}>Job Overview</h2>
                <div className={styles.jobOverviewContainer}>
                  <div className={styles.jobPosted}>
                    <img src="/calendarblank.svg" alt="Calendar Icon" className={styles.icon} />
                    <div className={styles.textContainer}>
                      <span className={styles.subHeading}>JOB POSTED:</span>
                      <span className={styles.date}>{posted_date && new Date(posted_date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className={styles.jobExpire}>
                    <img src="/timer.svg" alt="Timer Icon" className={styles.icon} />
                    <div className={styles.textContainer}>
                      <span className={styles.subHeading}>JOB EXPIRE IN:</span>
                      <span className={styles.date}>{application_deadline && new Date(application_deadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className={styles.location}>
                    <img src="/maptrifold.svg" alt="Maptrifold Icon" className={styles.icon} />
                    <div className={styles.textContainer}>
                      <span className={styles.subHeading}>LOCATION:</span>
                      <span className={styles.locationDetail}>{location}</span>
                    </div>
                  </div>
                  <div className={styles.experience}>
                    <img src="/briefcase.svg" alt="Briefcase Icon" className={styles.icon} />
                    <div className={styles.textContainer}>
                      <span className={styles.subHeading}>EXPERIENCE:</span>
                      <span className={styles.experienceLevel}>{experience_required}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.jobDescriptionSection}>
                <h2 className={styles.sectionTitle}>Skills</h2>
                {skills && skills.length > 0 ? (
                  <div className={styles.skillsContainer}> {/* Change from <ul> to <div> */}
                    {skills.map((skill, index) => (
                      <span key={index} className={styles.skillBox}> {/* Change from <li> to <span> */}
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p>No skills information provided.</p>
                )}
              </div>
            </div>
          <div className={styles.jobDescriptionSection}>
            <h2 className={styles.sectionTitle}>Description</h2>
            {description && (
              <div className={styles.jobDescriptionContent}>
                {/* First split by new lines, then map and check each line for bullets or dashes */}
                {description.split(/\r\n|\r|\n/).map((line, lineIndex) => {
                  // Then split by the pattern that detects standalone bullets or dashes
                  return line.split(/(•|-| -) /).map((text, textIndex, array) => {
                    // Check if the text is a bullet or dash, and not an empty string
                    if (text === '•' || text === '-' || text === ' -') {
                      // The next item in the array will be the text after bullet/dash
                      // Return null for the bullet/dash, as we will add it before the actual text item
                      return null;
                    } else {
                      // If the previous item was a bullet/dash, prepend it to this text
                      const bulletOrDash = array[textIndex - 1] === '•' || array[textIndex - 1] === '-' ? array[textIndex - 1] + ' ' : '';
                      return (
                        <div key={`${lineIndex}-${textIndex}`} className={styles.jobDescriptionListItem}>
                          {bulletOrDash}{text}
                        </div>
                      );
                    }
                  });
                })}
              </div>
            )}
          </div>
        </div>
        {/* <div className={styles.jobDescriptionSection}>
          <h2 className={styles.sectionTitle}>Confidence Rating</h2>
          {email && <p className={styles.jobExperienceRequired}> Confidence: {email}</p>}
        </div> */}
        <Footer />
      </div>);
}



export default FeaturedJobsPage;