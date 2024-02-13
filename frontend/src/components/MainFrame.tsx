import { FunctionComponent } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainFrame.module.css";

const MainFrame: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Replace with your backend API endpoint
    const endpoint = "/Login/";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Sign in successful", data);
        // Implement your logic upon successful sign in
        // For example, navigate to the dashboard or set user context
        navigate("/candidate-homepage"); 
      } else {
        console.error("Sign in failed");
        // Handle errors, like showing a message to the user
      }
    } catch (error) {
      console.error("There was an error signing in", error);
    }
  };

  const handleCreateAccountClick = () => {
    navigate('/candidate-create-account');
  };

  return (
    <form className={styles.mainFrame} onSubmit={handleSignIn}>
      <div className={styles.signInFrame}>
        <h1 className={styles.signIn}>Sign in</h1>
        <div className={styles.textNode}>
          <div className={styles.dontHaveAccount}>Don’t have account</div>
          <div 
            className={styles.createAccount}
            onClick={handleCreateAccountClick}
            role="button"
            tabIndex={0}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputField1}>
          <input
            className={styles.password}
            placeholder="Password"
            type="password" // Use type="password" for password inputs
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img className={styles.fieyeIcon} alt="" src="/fieye.svg" />
        </div>
      </div>
      <div className={styles.buttonInstance}>
        <div className={styles.reminderCheck}>
          <input className={styles.check} type="checkbox" />
          <div className={styles.rememberMe}>Remember Me</div>
        </div>
        <div className={styles.forgetPassword}>Forget password</div>
      </div>
      <button className={styles.button} type="submit">
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
