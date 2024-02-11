import { FunctionComponent } from 'react';
import  Navigation14 from "../components/Navigation14";
import styles from './EmployerCreateAccount.module.css';


const EmployerCreateAccount:FunctionComponent = () => {
  return (
    <div className={styles.employerCreateAccount}>
      <header className={styles.createAccountFrame}><Navigation14 />
      </header>
      <form className={styles.anotherFrame}>
        <div className={styles.selectionFrameParent}>
          <div className={styles.selectionFrame}>
            <h3 className={styles.createAnEmployer}>Create an Employer account.</h3>
            <div className={styles.alreadyHaveAccountParent}>
              <div className={styles.alreadyHaveAccount}>Already have account?</div>
              <div className={styles.logIn}> Log In</div>
            </div>
          </div>
          <div className={styles.select}>
            <div className={styles.selected}>Are you an Applicant?</div>
          </div>
        </div>
        <div className={styles.inputFieldEmail}>
          <div className={styles.inputFieldFrame}>
            <div className={styles.inputField}>
              <input className={styles.emailAddress} placeholder="Company Name" type="text" />
            </div>
            <div className={styles.inputField1}>
              <input className={styles.emailAddress1} placeholder="Username" type="text" />
            </div>
          </div>
          <div className={styles.inputField2}>
            <input className={styles.emailAddress2} placeholder="Email address" type="text" />
          </div>
          <div className={styles.inputField3}>
            <input className={styles.password} placeholder="Password" type="text" />
            <img className={styles.fieyeIcon} alt="" src="/fieye.svg" />
          </div>
          <div className={styles.inputField4}>
            <input className={styles.password1} placeholder="Confirm Password" type="text" />
            <img className={styles.fieyeIcon1} alt="" src="/fieye.svg" />
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.primary}>Create account</div>
          <img className={styles.fiarrowRightIcon} alt="" src="/fiarrowright1.svg" />
        </button>
      </form>
    </div>);
};

export default EmployerCreateAccount;
