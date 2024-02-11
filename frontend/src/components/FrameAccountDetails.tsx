import { FunctionComponent } from "react";
import styles from "./FrameAccountDetails.module.css";

const FrameAccountDetails: FunctionComponent = () => {
  return (
    <div className={styles.frameAccountDetails}>
      <div className={styles.deleteAccount}>Change Password</div>
      <div className={styles.buttonX}>
        <div className={styles.inputField}>
          <div className={styles.currentPassword}>Current Password</div>
          <div className={styles.inputField1}>
            <input
              className={styles.password}
              placeholder="Password"
              type="text"
            />
            <img className={styles.fieyeIcon} alt="" src="/fieye.svg" />
          </div>
        </div>
        <div className={styles.inputField2}>
          <div className={styles.newPassword}>New Password</div>
          <div className={styles.inputField3}>
            <input
              className={styles.password1}
              placeholder="Password"
              type="text"
            />
            <img className={styles.fieyeIcon1} alt="" src="/fieye.svg" />
          </div>
        </div>
        <div className={styles.inputField4}>
          <div className={styles.confirmPassword}>Confirm Password</div>
          <div className={styles.inputField5}>
            <input
              className={styles.password2}
              placeholder="Password"
              type="text"
            />
            <img className={styles.fieyeIcon2} alt="" src="/fieye.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameAccountDetails;
