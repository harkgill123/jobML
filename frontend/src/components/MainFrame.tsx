import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import styles from "./MainFrame.module.css";

const MainFrame: FunctionComponent = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle click event for the create account text
  const handleCreateAccountClick = () => {
    navigate('/candidate-create-account'); // Navigate to create account page
  };
  return (
    <form className={styles.mainFrame}>
      <div className={styles.signInFrame}>
        <h1 className={styles.signIn}>Sign in</h1>
        <div className={styles.textNode}>
          <div className={styles.dontHaveAccount}>Don’t have account</div>
          {/* Add onClick handler to this div to act as a button */}
          <div 
            className={styles.createAccount}
            onClick={handleCreateAccountClick} // Handle click event
            role="button" // Accessibility improvement
            tabIndex={0} // Make it focusable
          >
            Create Account
          </div>
        </div>
      </div>
      <div className={styles.inputFieldWrapper}>
        <div className={styles.inputField}>
          <input
            className={styles.emailAddress}
            placeholder="Email address"
            type="text"
          />
        </div>
        <div className={styles.inputField1}>
          <input
            className={styles.password}
            placeholder="Password"
            type="text"
          />
          <img className={styles.fieyeIcon} alt="" src="/fieye.svg" />
        </div>
        <div className={styles.buttonInstance}>
          <div className={styles.reminderCheck}>
            <input className={styles.check} type="checkbox" />
            <div className={styles.rememberMe}>Remember Me</div>
          </div>
          <div className={styles.forgetPassword}>Forget password</div>
        </div>
      </div>
      <button className={styles.button}>
        <div className={styles.primary}>Sign in</div>
        <img
          className={styles.fiarrowRightIcon}
          alt=""
          src="/fiarrowright.svg"
        />
      </button>
    </form>
  );
};

export default MainFrame;
