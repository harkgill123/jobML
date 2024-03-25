import React from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import Navigation1 from "../components/Navigation1";
import Footer from "../components/Footer";
import styles from './JobPage.module.css';





// type Skill = {
//     skill_name: string;
// };
type job = {

    title: string;
    company_name?: string;
    loc?: string;
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
type LocationState = {
    job: job;
    confidence_rating: confidence_rating;
  };
const FeaturedJobsPage: React.FC = () => {
    const location = useLocation();
    const state = location.state as LocationState;
    console.log("State:", state.job)
    console.log("rating:", state.confidence_rating)
    // console.log("score is",state.sc1)
    if (!state?.job) {
        return <Navigate to="/candidate-search-page" />;
      }
    const {
        title,
        company_name,
        loc,
        description,
        posted_date,
        application_deadline,
        employment_type,
        skills,
        experience_required,
    } = state.job;
    const score = state.confidence_rating;
    console.log(score)
    console.log(skills)
    const HandleApply = () =>{
        console.log("apply")
    }
    return (    <div className={styles.jobPage}>
      <Navigation1 />
    
        <div className={styles.jobContent}>
          <div className={styles.jobDetailHeader}>
            <h1 className={styles.jobTitle}>{title}</h1>
            {company_name && <p className={styles.jobCompany}>{company_name}</p>}
            {loc && <p className={styles.jobLocation}>{loc}</p>}
          </div>
      
          <div className={styles.jobDescriptionSection}>
            <h2 className={styles.sectionTitle}>Description</h2>
            {description && <p className={styles.jobDescription}>{description}</p>}
          </div>
      
          <div className={styles.jobDetailSection}>

        <div className={styles.jobDescriptionSection}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          {skills && skills.length > 0 ? (
            <ul className={styles.list}>
              {skills.map((skill,index) => (
                <li key={index} className={styles.listItem}>
                  {skill}
                </li>
              ))}
            </ul>
          ) : (
            <p>No skills information provided.</p>
          )}
        </div>
        <div className={styles.jobDescriptionSection}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          {experience_required && <p className={styles.jobExperienceRequired}>Experience: {experience_required}</p>}
        </div>
        <div className={styles.jobDescriptionSection}>
          <h2 className={styles.sectionTitle}>Posted Date</h2>
          {posted_date && <p className={styles.jobPostedDate}>Posted: {new Date(posted_date).toLocaleDateString()}</p>}
        </div>
        <div className={styles.jobDescriptionSection}>
          <h2 className={styles.sectionTitle}>Deadline</h2>
          {application_deadline && <p className={styles.jobApplicationDeadline}>Deadline: {new Date(application_deadline).toLocaleDateString()}</p>}
        </div>
        <div className={styles.jobDescriptionSection}>
          <h2 className={styles.sectionTitle}>Confidence Rating</h2>
          {score && <p className={styles.jobExperienceRequired}> Confidence: {Number(score)}</p>}
        </div>
        </div>
            <button className={styles.findJobButton} onClick={HandleApply}>Apply</button> {/* Added find job button */}
          </div>
          
    
        <Footer />
      </div>);
}



export default FeaturedJobsPage;