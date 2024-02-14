import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateFrame.module.css";

const CreateFrame = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validation logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone_number", "723-789-1234");
    formData.append("user_type", "Recruiter");
    if (cvFile) {
      formData.append("cvFile", cvFile);
    }

    try {
      const response = await fetch('http://localhost:8000/UserAuth/Signup/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        // Handle success
        console.log(data);
      } else {
        // Handle error
        console.error("Signup failed:", response);
      }
    } catch (error) {
      console.error("There was an error during the signup process", error);
    }
  };

  const handleCvFileChange = (event) => {
    setCvFile(event.target.files[0]);
  };

  const handleLogInClick = () => {
    navigate('/');
  };

  const handleEmployerClick = () => {
    navigate('/employer-create-account');
  };

  return (
    <form className={styles.createFrame} onSubmit={handleFormSubmit}>
      <div className={styles.frameParent}>
        <div className={styles.createAnApplicantAccountParent}>
          <h3 className={styles.createAnApplicant}>
            Create an Applicant account.
          </h3>
          <div className={styles.logInText}>
            <div className={styles.alreadyHaveAccount}>
              Already have account? 
            </div>
            <div className={styles.logIn}
            onClick={handleLogInClick}
            role="button"
            tabIndex={0}
            >Log In</div>
          </div>
        </div>
        <div className={styles.select}>
          <div className={styles.selected}
          onClick={handleEmployerClick}
          role="button"
          tabIndex={0}
          >Are you an employer?</div>
        </div>
      </div>
      <div className={styles.emailInputField}>
        <div className={styles.inputFieldEmailAddress}>
          <div className={styles.inputField}>
            <input
              className={styles.emailAddress}
              placeholder="Full Name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className={styles.inputField1}>
            <input
              className={styles.emailAddress1}
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputField2}>
          <input
            className={styles.emailAddress2}
            placeholder="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputField3}>
          <input
            className={styles.password}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Password visibility toggle */}
        </div>
        <div className={styles.inputField4}>
          <input
            className={styles.password1}
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* Password visibility toggle */}
        </div>
      </div>
      <div className={styles.cvResume}>
        <div className={styles.frameSelect}>
          <div className={styles.addCvresume}>Add CV/Resume</div>
          <input
            className={styles.browseFileOr}
            type="file"
            onChange={handleCvFileChange}
          />
        </div>
      </div>
      <button className={styles.button} type="submit">
        <div className={styles.primary}>Create account</div>
        {/* Icon for the button */}
      </button>
    </form>
  );
};

export default CreateFrame;
