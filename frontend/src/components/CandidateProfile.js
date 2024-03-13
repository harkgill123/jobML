import { FunctionComponent, useState } from "react";
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

  const handleSaveChangesClick = (event) => {
    event.preventDefault();
    // Add your logic for save changes
    console.log('Save Changes Clicked');
  };

  const handleUpdateResumeClick = (event) => {
    event.preventDefault();
    // Add your logic for updating resume
    console.log('Update Resume Clicked');
  };

  const handleCloseAccountClick = (event) => {
    event.preventDefault();
    // Add your logic for closing account
    console.log('Close Account Clicked');
  };

  return (
    <form className={styles.candidateSettings}>

      {/* Personal Info Section */}
      

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
      <button onClick={handleSaveChangesClick} className={styles.button}>
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
      <button onClick={handleSaveChangesClick} className={styles.button}>
        Save Changes
      </button>

      {/* Resume Section */}
      <h2 className={styles.settings}>Resume</h2>
      <button onClick={handleUpdateResumeClick} className={styles.button}>
        Update Resume
      </button>

      {/* Delete Account Section */}
      <h2 className={styles.settings}>Delete Your Account</h2>
      <button onClick={handleCloseAccountClick} className={styles.deleteButton}>
        Close Account
      </button>

    </form>
  );
};

export default CandidateProfile;