import { FunctionComponent } from "react";
import styles from "./Navigation14.module.css";

const Navigation14: FunctionComponent = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation1}>
        <div className={styles.navigation2}>
          <div className={styles.navigation3}>
            <div className={styles.button}>
              <img
                className={styles.buttonChild}
                alt=""
                src="/ellipse-18@2x.png"
              />
            </div>
            <div className={styles.inputFieldEmail} />
            <div className={styles.inputFieldEmail1} />
            <div className={styles.cVResumeFrame}>
              <div className={styles.addCVButton} />
              <div className={styles.primaryButton}>
                <h3 className={styles.jobsync}>JobSync</h3>
                <div className={styles.sitelogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation14;
