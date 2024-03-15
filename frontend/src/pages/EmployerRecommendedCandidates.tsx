import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Navigation2 from "../components/Navigation2";
import Footer from "../components/Footer";
import styles from './EmployerRecommendedCandidates.module.css';

type Job = {
  id: number;
  title: string;
  company_name?: string;
  location?: string;
  posted_date?: string;
  application_deadline?: string;
  experience_required?: string;
  job_description?: string;
};

type LocationState = {
  job: Job;
};

type UserFields = {
  name: string;
  email: string;
  phone_number: string;
};

type UserResponse = {
  pk: number;
  fields: UserFields;
};

type User = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
};
type Skill = {
  skill_name: string;
};
type WorkExperience = {
  company_name: string;
  end_date: string;
  job_description: string;
  job_title: string;
  start_date: string;
};
type Education = {
  school_name: string;
  degree: string;
  start_date: string; // or Date
  end_date: string;   // or Date
  gpa?: string;
};
type Applicant = {

name: string;
email?: string;
phone_number?: string;
skills?: Skill[];
educations?: Education[];
work_experiences?: WorkExperience[];
projects?: string[];
};

const EmployerRecommendedCandidates: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const token = localStorage.getItem('token');
  const [recommendedCandidates, setRecommendedCandidates] = useState<User[]>([]);
  const [applicant, setApplicant] = useState<Applicant | null>(null);

  useEffect(() => {
    console.log("Applicant state updated:", applicant);
  }, [applicant]);
  


  const {
    title,
    company_name,
    location: jobLocation,
    posted_date,
    application_deadline,
    experience_required,
    job_description,
  } = state.job;

  useEffect(() => {
    const fetchRecommendedCandidates = async () => {
      try {
        const response = await fetch('http://localhost:8000/Recruiter/candidate-recommendations/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ job_id: jobId }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        console.log(jsonResponse)
        const usersArray: UserResponse[] = jsonResponse.recommended_users;

        const users = usersArray.map(({ pk, fields }) => ({
          id: pk,
          name: fields.name,
          email: fields.email,
          phone_number: fields.phone_number
        }));

        setRecommendedCandidates(users);
        console.log(recommendedCandidates)
      } catch (error) {
        console.error('Error fetching recommended candidates:', error);
      }
    };

    if (jobId && token) {
      fetchRecommendedCandidates();
    }
  }, [jobId, token]);
  
  const viewapplicant = async (user: User) => {
    try {
      // Assuming 'applicant.id' is the ID of the user you want to fetch details for
      // and 'http://localhost:8000/user-info/' is the endpoint to your Django view.
      const response = await fetch(`http://localhost:8000/Recruiter/display_user_info/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: user.id }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("data",data)
      setApplicant(data)
      
      // If you want to navigate to the candidate page and pass the user info
      navigate(`/candidatepage/${user.id}`, { state: { applicant: data } });

    } catch (error) {
      console.error('Error fetching user details:', error);
      // Handle any additional error logic here, such as showing a notification to the user
    }
  };

  return (
    <div className={styles.jobPage}>
      <Navigation2 />
  
      <div className={styles.jobContent}>
        {/* Left Column for Job Details */}
        <div className={styles.jobDetailColumn}>
          <div className={styles.jobDetailHeader}>
            <h1 className={styles.jobTitle}>{title}</h1>
            {company_name && <p className={styles.jobCompany}>{company_name}</p>}
            {jobLocation && <p className={styles.jobLocation}>{jobLocation}</p>}
          </div>
  
          <div className={styles.jobDescriptionSection}>
            <h2 className={styles.sectionTitle}>Description</h2>
            {job_description && <p className={styles.jobDescription}>{job_description}</p>}
          </div>
  
          <div className={styles.jobDetailSection}>
            {posted_date && <p className={styles.jobPostedDate}>Posted: {new Date(posted_date).toLocaleDateString()}</p>}
            {application_deadline && <p className={styles.jobApplicationDeadline}>Deadline: {new Date(application_deadline).toLocaleDateString()}</p>}
            {experience_required && <p className={styles.jobExperienceRequired}>Experience: {experience_required}</p>}
          </div>
        </div>
  
        {/* Right Column for Additional Content */}
        <div className={styles.additionalContentColumn}>
        {recommendedCandidates.map((user) => (
          <div key={user.id} className={styles.candidateCard}>
            <div className={styles.candidateDetails}>
              <h2 className={styles.candidateName}>{user.name}</h2>
              <p className={styles.candidatePhoneNumber}>{user.phone_number}</p>
              <p className={styles.candidateEmail}>{user.email}</p>
            </div>
            <button
              className={styles.viewCandidateButton}
              onClick={() =>viewapplicant(user)}
            >
              View Candidate
            </button>
          </div>
        ))}
      </div>
    </div>
  
      <Footer />
    </div>
  );
  
  
  
};

export default EmployerRecommendedCandidates;
