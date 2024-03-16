import { FunctionComponent, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CandidateProfile.module.css";

const CandidateProfile = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [emailUpdateMessage, setEmailUpdateMessage] = useState('');
  const [passwordUpdateMessage, setPasswordUpdateMessage] = useState('');


  // stuf to edit resume

  const [school1, setSchool1] = useState("");
  const [degree1, setDegree1] = useState("");
  const [startDate1, setStartDate1] = useState("");
  const [endDate1, setEndDate1] = useState("");
  const [school2, setSchool2] = useState("");
  const [degree2, setDegree2] = useState("");
  const [startDate2, setStartDate2] = useState("");
  const [endDate2, setEndDate2] = useState("");
  const [companyName1, setCompanyName1] = useState("");
  const [jobTitle1, setJobTitle1] = useState("");
  const [startWorkDate1, setStartWorkDate1] = useState("");
  const [endWorkDate1, setEndWorkDate1] = useState("");
  const [companyName2, setCompanyName2] = useState("");
  const [jobTitle2, setJobTitle2] = useState("");
  const [startWorkDate2, setStartWorkDate2] = useState("");
  const [endWorkDate2, setEndWorkDate2] = useState("");
  const [skills, setSkills] = useState([]);
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [desc2, setDesc2] = useState("");
  useEffect(() => {
    
    get_resume_data();
  }, []);
  const token = localStorage.getItem('token');
  const get_resume_data = async (event) => {
    
 
  
    // Create a FormData object to build the multipart/form-data request
   
  
    // Send the request
    try {
      const response = await fetch('http://localhost:8000/UserAuth/display-resume/', {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        // Headers may be configured as needed by your backend
      });
      // event.preventDefault();
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("result")
      console.log(result)
      // console.log('File uploaded successfully', result);
      console.log(result)
      const resume = result['resumes'][0]
      
      console.log(resume)
      console.log(resume['educations'][0]['school_name'])
      if (resume['educations'] && resume['educations'].length > 0) {
        // Update for first education entry
        console.log("education")
        
        setSchool1(resume['educations'][0]['school_name']);
        setDegree1(resume['educations'][0]['degree']);
        setStartDate1(resume['educations'][0]['start_date']);
        setEndDate1(resume['educations'][0]['end_date']);
        // Add handling for start and end dates if present in your JSON data
      }

      if (resume['educations'] && resume['educations'].length > 1) {
        // Update for first education entry
        console.log("education")
        console.log(resume['educations'][1]['school_name'])
        setSchool2(resume['educations'][1]['school_name']);
        setDegree2(resume['educations'][1]['degree']);
        setStartDate2(resume['educations'][1]['start_date']);
        setEndDate2(resume['educations'][1]['end_date']);
        // Add handling for start and end dates if present in your JSON data
      }

      if (resume['work_experiences'] && resume['work_experiences'].length > 0) {
        // Update for first work experience entry
        console.log("experience")
        console.log(resume['work_experiences'][0]['company_name'])
        setCompanyName1(resume['work_experiences'][0]['company_name']);
        setJobTitle1(resume['work_experiences'][0]['job_title']);
        setDesc(resume['work_experiences'][0]['job_description']);
        setStartWorkDate1(resume['work_experiences'][0]['start_date']);
        setEndWorkDate1(resume['work_experiences'][0]['end_date']);

        // Add handling for start and end dates if present in your JSON data
      }

      if (resume['work_experiences'] && resume['work_experiences'].length > 1) {
        // Update for first work experience entry
        console.log("experience")
        console.log(resume['work_experiences'][0]['company_name'])
        setCompanyName2(resume['work_experiences'][1]['company_name']);
        setJobTitle2(resume['work_experiences'][1]['job_title']);
        setDesc2(resume['work_experiences'][0]['job_description']);
        setStartWorkDate1(resume['work_experiences'][0]['start_date']);
        setStartWorkDate2(resume['work_experiences'][1]['start_date']);
        setEndWorkDate1(resume['work_experiences'][0]['end_date']);
        setEndWorkDate2(resume['work_experiences'][1]['end_date']);
      }

      // Correct handling for skills (assuming you modify your JSON or parse the string)
      

      setSkills(resume['resume_skills'].map(skill => skill.skill_name));
      console.log(skills)
      // console.log("skills")
      // console.log(resume['resume_skills'])
      // setSkills(resume['resume_skills']);
      // console.log("address")
      // console.log(resume['Address'])
      // setAddress(resume['Address']);
  
      
    } catch (error) {
      console.error('There was an error uploading the file', error);
    }
  };
  const handleEmailClick = async (event) => {
    event.preventDefault();
    const payload = { new_email: newEmail, password: password };

    try {
      const response = await fetch('http://localhost:8000/UserAuth/update-email/', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,

          'Content-Type': 'application/json',
      
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Email update success:', data);
        setEmailUpdateMessage('Email has been updated.'); // Set success message
        setTimeout(() => setEmailUpdateMessage(''), 5000); // Optional: Clear message after 5 seconds
      } else {
        console.error('Email update error:', data.result);
      }
    } catch (error) {
      console.error('Email update failed:', error);
    }
  };

  const handlePasswordClick = async (event) => {
    event.preventDefault();
    const payload = { password: oldPassword, new_password: newPassword };

    if (newPassword !== confirmNewPassword) {
      console.error('New passwords do not match.');
      setPasswordUpdateMessage('New passwords do not match.');
      setTimeout(() => setEmailUpdateMessage(''), 5000); // Optional: Clear message after 5 seconds
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/UserAuth/update-password/', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,

          'Content-Type': 'application/json',
      
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Password update success:', data);
        setPasswordUpdateMessage('Password has been changed.'); // Set success message
        setTimeout(() => setPasswordUpdateMessage(''), 5000); // Optional: Clear message after 5 seconds
      } else {
        console.error('Password update error:', data.result);
      }
    } catch (error) {
      console.error('Password update failed:', error);
    }
  };
  

  const handleUpdateResumeClick = async (event) => {
    event.preventDefault();
    // Add your logic for updating resume
    console.log('Update Resume Clicked');

    event.preventDefault();
    // const payload = { password: oldPassword, new_password: newPassword };
    const payload = {"work_experiences" :["company_name" : companyName1]}}



    try {
      const response = await fetch('http://localhost:8000/UserAuth/edit-resume/', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,

          'Content-Type': 'application/json',
      
        },
        body: JSON.stringify(payload),
      });

      // const data = await response.json();

      if (response.ok) {
        console.log('update success:');

      } else {
        console.error('update error:', data.result);
      }
    } catch (error) {
      console.error('update failed:', error);
    }
  };


  return (
  <form className={styles.candidateSettings}>
    {/* Update Email Section */}
    <h2 className={styles.settings}>Update Email</h2>
    <div className={styles.inputFieldParent}>
      <div className={styles.inputField}>
        <input
          placeholder="New Email"
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
      </div>
      <div className={styles.inputField}>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
    {emailUpdateMessage && <div className={styles.updateMessage}>{emailUpdateMessage}</div>}
    <button onClick={handleEmailClick} className={styles.button}>
      Save Changes
    </button>

    {/* Change Password Section */}
    <h2 className={styles.settings}>Change Your Password</h2>
    <div className={styles.inputFieldParent}>
      <div className={styles.inputField}>
        <input
          placeholder="Old Password"
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>
      <div className={styles.inputField}>
        <input
          placeholder="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className={styles.inputField}>
        <input
          placeholder="Confirm New Password"
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </div>
    </div>
    {passwordUpdateMessage && <div className={styles.updateMessage}>{passwordUpdateMessage}</div>}
    <button onClick={handlePasswordClick} className={styles.button}>
      Save Changes
    </button>

    {/* Resume Section - Placeholder for resume update functionality */}
    <h2 className={styles.settings}>Resume</h2>
    <form  className={styles.resumeForm}>
            {/* Education 1 inputs */}
            <div className={styles.inputGroup}>
              <h3 className={styles.inputTitle}>Education 1</h3>
              <input type="text" placeholder="School" value={school1} onChange={e => setSchool1(e.target.value)} />
              <input type="text" placeholder="Degree" value={degree1} onChange={e => setDegree1(e.target.value)} />
              <input type="date" placeholder="Start Date" value={startDate1} onChange={e => setStartDate1(e.target.value)} />
              <input type="date" placeholder="End Date" value={endDate1} onChange={e => setEndDate1(e.target.value)} />
            </div>
            {/* Education 2 inputs */}
            <div className={styles.inputGroup}>
              <h3 className={styles.inputTitle}>Education 2</h3>
              <input type="text" placeholder="School" value={school2} onChange={e => setSchool2(e.target.value)} />
              <input type="text" placeholder="Degree" value={degree2} onChange={e => setDegree2(e.target.value)} />
              <input type="date" placeholder="Start Date" value={startDate2} onChange={e => setStartDate2(e.target.value)} />
              <input type="date" placeholder="End Date" value={endDate2} onChange={e => setEndDate2(e.target.value)} />
            </div>
            {/* Work Experience 1 inputs */}
            <div className={styles.inputGroup}>
              <h3 className={styles.inputTitle}>Work Experience 1</h3>
              <input type="text" placeholder="Company Name" value={companyName1} onChange={e => setCompanyName1(e.target.value)} />
              <input type="text" placeholder="Job Title" value={jobTitle1} onChange={e => setJobTitle1(e.target.value)} />
              <input type="text" placeholder="Job Description" value={desc} onChange={e => setDesc(e.target.value)} />
              <input type="date" placeholder="Start Date" value={startWorkDate1} onChange={e => setStartWorkDate1(e.target.value)} />
              <input type="date" placeholder="End Date" value={endWorkDate1} onChange={e => setEndWorkDate1(e.target.value)} />
            </div>
            {/* Work Experience 2 inputs */}
            <div className={styles.inputGroup}>
              <h3 className={styles.inputTitle}>Work Experience 2</h3>
              <input type="text" placeholder="Company Name" value={companyName2} onChange={e => setCompanyName2(e.target.value)} />
              <input type="text" placeholder="Job Title" value={jobTitle2} onChange={e => setJobTitle2(e.target.value)} />
              <input type="text" placeholder="Job Description" value={desc2} onChange={e => setDesc2(e.target.value)} />
              <input type="date" placeholder="Start Date" value={startWorkDate2} onChange={e => setStartWorkDate2(e.target.value)} />
              <input type="date" placeholder="End Date" value={endWorkDate2} onChange={e => setEndWorkDate2(e.target.value)} />
            </div>
            {/* Skills input */}
            <div className={styles.inputGroup}>
              <h3 className={styles.inputTitle}>Skills</h3>
              <input type="text" placeholder="Skills" value={skills} onChange={e => setSkills(e.target.value)} />
            </div>
            {/* Address input */}
            <div className={styles.inputGroup}>
              <h3 className={styles.inputTitle}>Address</h3>
              <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
            </div>
            <button onClick={handleUpdateResumeClick} className={styles.button}>
              Update Resume
            </button>
          </form>
  


  </form>
);

};

export default CandidateProfile;