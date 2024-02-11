import { FunctionComponent, useState } from "react";
import styles from "./CreateFrame.module.css";

const CreateFrame: FunctionComponent = () => {
  return (
    <form className={styles.createFrame}>
      <div className={styles.frameParent}>
        <div className={styles.createAnApplicantAccountParent}>
          <h3 className={styles.createAnApplicant}>
            Create an Applicant account.
          </h3>
          <div className={styles.logInText}>
            <div className={styles.alreadyHaveAccount}>
              Already have account?
            </div>
            <div className={styles.logIn}> Log In</div>
          </div>
        </div>
        <div className={styles.select}>
          <div className={styles.selected}>Are you an employer?</div>
          <img
            className={styles.fichevronDownIcon}
            alt=""
            src="/fichevrondown-1.svg"
          />
        </div>
      </div>
      <div className={styles.emailInputField}>
        <div className={styles.inputFieldEmailAddress}>
          <div className={styles.inputField}>
            <input
              className={styles.emailAddress}
              placeholder="Full Name"
              type="text"
            />
          </div>
          <div className={styles.inputField1}>
            <input
              className={styles.emailAddress1}
              placeholder="Username"
              type="text"
            />
          </div>
        </div>
        <div className={styles.inputField2}>
          <input
            className={styles.emailAddress2}
            placeholder="Email address"
            type="text"
          />
        </div>
        <div className={styles.inputField3}>
          <input
            className={styles.password}
            placeholder="Password"
            type="text"
          />
          <img className={styles.fieyeIcon} alt="" src="/fieye.svg" />
        </div>
        <div className={styles.inputField4}>
          <input
            className={styles.password1}
            placeholder="Confirm Password"
            type="text"
          />
          <img className={styles.fieyeIcon1} alt="" src="/fieye.svg" />
        </div>
      </div>
      <div className={styles.cvResume}>
        <img className={styles.pluscircleIcon} alt="" src="/pluscircle.svg" />
        <div className={styles.frameSelect}>
          <div className={styles.addCvresume}>Add Cv/Resume</div>
          <input
            className={styles.browseFileOr}
            placeholder="Browse file or drop here. only pdf"
            type="text"
          />
        </div>
      </div>
      <button className={styles.button}>
        <div className={styles.primary}>Create account</div>
        <img
          className={styles.fiarrowRightIcon}
          alt=""
          src="/fiarrowright1.svg"
        />
      </button>
    </form>
  );
};

export default CreateFrame;
