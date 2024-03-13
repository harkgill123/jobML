import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navigation2 from '../components/Navigation2';
import { useNavigate } from 'react-router-dom';
import styles from './EmployerCreateJob.module.css';

const EmployerCreateJob = () => {
  
  const [formData, setFormData] = useState({
    title: '',
    company_name: '',
    location: '',
    job_description: '',
    posted_date: '',
    application_deadline: '',
    skills: '', // Initially, skills are an empty string.
    benefits: '',
    employment_type: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Add a function to map skill names to IDs (placeholder)
  const mapSkillsToIds = async (skillNames) => {
    // Placeholder: Implement the actual logic to convert skill names to IDs.
    // This could involve fetching from your backend a list of skills with their IDs.
    // For demonstration, it just returns an empty array.
    return [];
  };

  const handleCreateJob = async (e) => {
    e.preventDefault();

    // Assuming you have a function to convert skill names to their IDs
    const skillIds = await mapSkillsToIds(formData.skills.split(',').map(skill => skill.trim()));

    const formDataWithSkillsArray = {
      ...formData,
      skills: skillIds, // Use the IDs instead of names
    };

    console.log(formDataWithSkillsArray); // For debugging

    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:8000/Recruiter/jobPostingCreateView/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataWithSkillsArray),
    });

    if (response.ok) {
      const data = await response.json();
      navigate('/employer-homepage'); // Navigate on success
    } else {
      console.error('Failed to create job posting');
      // Here you could set an error state and display it to the user.
    }
  };
  
  return (
    <>
      <Navigation2 />
      <div className={styles.createJobFormContainer}>
        <h2>Create your job posting</h2>
        <div className={styles.formRow}>
          <div className={styles.formColumn}>
            {/* Left column fields */}
            <div className={styles.formGroup}>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter job title"
              />
            </div>
            <div className={styles.formGroup}>
              <label>Company Name</label>
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleInputChange}
                placeholder="Enter company name"
              />
            </div>
            <div className={styles.formGroup}>
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Enter job location"
              />
            </div>
            <div className={styles.formGroup}>
              <label>Posted Date</label>
              <input
                type="date"
                name="posted_date"
                value={formData.posted_date}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Application Deadline</label>
              <input
                type="date"
                name="application_deadline"
                value={formData.application_deadline}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Benefits</label>
              <input
                type="text"
                name="benefits"
                value={formData.benefits}
                onChange={handleInputChange}
                placeholder="Enter benefits"
              />
            </div>
            <div className={styles.formGroup}>
              <label>Employment Type</label>
              <input
                type="text"
                name="employment_type"
                value={formData.employment_type}
                onChange={handleInputChange}
                placeholder="Enter employment type"
              />
            </div>
          </div>
          <div className={styles.formColumn}>
            {/* Right column fields */}
            <div className={styles.formGroup}>
              <label>Job Description</label>
              <textarea
                name="job_description"
                value={formData.job_description}
                onChange={handleInputChange}
                placeholder="Enter job description"
              />
            </div>
            <div className={styles.formSkill}>
              <label>Job Skills</label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="Enter required job skills"
              />
            </div>
          </div>
        </div>
        <button className={styles.formButton} onClick={handleCreateJob}>Create Job</button>
      </div>
      <Footer />
    </>
  );
};

export default EmployerCreateJob;
