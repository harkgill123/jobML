import { FunctionComponent } from "react";
import styles from "./Job6.module.css";

export type Job6Type = {
  suniorUXDesigner?: string;
  fullTime?: string;
  daysRemaining?: string;
  applications?: string;
};

const Job6: FunctionComponent<Job6Type> = ({
  suniorUXDesigner,
  fullTime,
  daysRemaining,
  applications,
}) => {
  return (
    <div className={styles.job}>
      <div className={styles.statusCircle}>
        <div className={styles.suniorUxDesigner}>{suniorUXDesigner}</div>
        <div className={styles.dotsButtonFrame}>
          <div className={styles.fullTime}>{fullTime}</div>
          <div className={styles.div}>•</div>
          <div className={styles.daysRemaining}>{daysRemaining}</div>
        </div>
      </div>
      <div className={styles.jobStatus}>
        <img className={styles.xcircleIcon} alt="" src="/xcircle.svg" />
        <div className={styles.expire}>Expire</div>
      </div>
      <div className={styles.jobStatus1}>
        <img className={styles.usersIcon} alt="" src="/users.svg" />
        <div className={styles.applications}>{applications}</div>
      </div>
      <div className={styles.applicationStatusFrame}>
        <button className={styles.button}>
          <div className={styles.primary}>View Applications</div>
        </button>
        <div className={styles.iconButton}>
          <img
            className={styles.dotsthreeverticalIcon}
            alt=""
            src="/dotsthreevertical.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Job6;
