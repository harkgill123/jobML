import { FunctionComponent } from "react";
import styles from "./Job.module.css";

export type JobType = {
  interactionDesigner?: string;
  partTime?: string;
};

const Job: FunctionComponent<JobType> = ({ interactionDesigner, partTime }) => {
  return (
    <div className={styles.job}>
      <div className={styles.heading}>
        <div className={styles.interactionDesigner}>{interactionDesigner}</div>
        <div className={styles.frameJobExpireLevel}>
          <div className={styles.type}>
            <div className={styles.partTime}>{partTime}</div>
          </div>
          <div className={styles.salary20000}>Salary: $20,000 - $25,000</div>
        </div>
      </div>
      <div className={styles.company}>
        <div className={styles.info}>
          <div className={styles.googleInc}>Google Inc.</div>
          <div className={styles.loaction}>
            <img
              className={styles.mappinIcon}
              loading="eager"
              alt=""
              src="/mappin.svg"
            />
            <div className={styles.dhakaBangladesh}>Dhaka, Bangladesh</div>
          </div>
        </div>
        <img
          className={styles.bookmarksimpleIcon}
          loading="eager"
          alt=""
          src="/bookmarksimple.svg"
        />
      </div>
    </div>
  );
};

export default Job;
