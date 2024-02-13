import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navigation14 from "../components/Navigation14";
import styles from './EmployerCreateAccount.module.css';

const EmployerCreateAccount = () => {
  // State for form inputs
  const [companyName, setCompanyName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construct the payload from the state
    const payload = {
      companyName,
      username,
      email,
      password,
      confirmPassword,
    };

    try {
      // Replace 'your-backend-endpoint' with the actual endpoint URL
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.success) {
        // Handle success scenario
        console.log(data.message);
        // Redirect to another page or clear the form
      } else {
        // Handle failure scenario
        console.error(data.message);
        // Display error messages from 'data.errors' if any
      }
    } catch (error) {
      console.error('There was an error during the request', error);
    }
  };

  const handleApplicantClick = () => {
    navigate('/candidate-create-account');
  };

  const handleLogInClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.employerCreateAccount}>
      <header className={styles.createAccountFrame}><Navigation14 /></header>
      <form className={styles.anotherFrame} onSubmit={handleSubmit}>
        <div className={styles.selectionFrameParent}>
          <div className={styles.selectionFrame}>
            <h3 className={styles.createAnEmployer}>Create an Employer account.</h3>
            <div className={styles.alreadyHaveAccountParent}>
              <div className={styles.alreadyHaveAccount}>Already have account?</div>
              <div className={styles.logIn}
              onClick={handleLogInClick}
              role="button"
              tabIndex={0}
              >Log In</div>
            </div>
          </div>
          <div className={styles.select}>
            <div className={styles.selected}
              onClick={handleApplicantClick}
              role="button"
              tabIndex={0}
            >Are you an Applicant?</div>
          </div>
        </div>
        <div className={styles.inputFieldEmail}>
          <div className={styles.inputFieldFrame}>
            <div className={styles.inputField}>
              <input className={styles.emailAddress} placeholder="Company Name" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
            <div className={styles.inputField1}>
              <input className={styles.emailAddress1} placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>
          <div className={styles.inputField2}>
            <input className={styles.emailAddress2} placeholder="Email address" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={styles.inputField3}>
            <input className={styles.password} placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <img className={styles.fieyeIcon} alt="" src="/fieye.svg" />
          </div>
          <div className={styles.inputField4}>
            <input className={styles.password1} placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <img className={styles.fieyeIcon1} alt="" src="/fieye.svg" />
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.primary}>Create account</div>
          <img className={styles.fiarrowRightIcon} alt="" src="/fiarrowright1.svg" />
        </button>
      </form>
    </div>
  );
};

export default EmployerCreateAccount;
