import { FunctionComponent } from "react";
import styles from "./Notifymewhenemployerssavedmypr.module.css";

export type NotifymewhenemployerssavedmyprType = {
  deleteYourAccount?: string;
};

const Notifymewhenemployerssavedmypr: FunctionComponent<
  NotifymewhenemployerssavedmyprType
> = ({ deleteYourAccount }) => {
  return (
    <div className={styles.notifymewhenemployerssavedmypr}>
      <div className={styles.notifymewhenemployersrejectedm}>
        <div className={styles.deleteYourAccount}>{deleteYourAccount}</div>
        <div className={styles.ifYouDelete}>
          If you delete your Jobpilot account, you will no longer be able to get
          information about the matched jobs, following employers, and job
          alert, shortlisted jobs and more. You will be abandoned from all the
          services of Jobpilot.com.
        </div>
      </div>
      <div className={styles.button}>
        <img
          className={styles.xcircleIcon}
          loading="eager"
          alt=""
          src="/xcircle1.svg"
        />
        <div className={styles.primary}>Close Account</div>
      </div>
    </div>
  );
};

export default Notifymewhenemployerssavedmypr;
