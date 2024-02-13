import { FunctionComponent } from "react";
import styles from "./FrameContainer.module.css";

const FrameContainer: FunctionComponent = () => {
  return (
    <div className={styles.frameContainer}>
      <div className={styles.dashboardNavItem}>
        <img
          className={styles.stackIcon}
          loading="eager"
          alt=""
          src="/stack11.svg"
        />
        <div className={styles.logOut}>Overview</div>
      </div>
      <div className={styles.dashboardNavItem1}>
        <div className={styles.logOut1}>Employers Profile</div>
        <img className={styles.usercircleIcon} alt="" src="/usercircle.svg" />
      </div>
      <div className={styles.dashboardNavItem2}>
        <img className={styles.pluscircleIcon} alt="" src="/pluscircle2.svg" />
        <input
          className={styles.logOut2}
          placeholder="Post a Job"
          type="text"
        />
      </div>
      <div className={styles.dashboardNavItem3}>
        <img
          className={styles.briefcaseIcon}
          loading="eager"
          alt=""
          src="/briefcase1.svg"
        />
        <div className={styles.logOut3}>My Jobs</div>
      </div>
      <div className={styles.dashboardNavItem4}>
        <img
          className={styles.bookmarksimpleIcon}
          loading="eager"
          alt=""
          src="/bookmarksimple-1.svg"
        />
        <div className={styles.logOut4}>Saved Candidate</div>
      </div>
      <div className={styles.dashboardNavItem5}>
        <div className={styles.logOut5}>{`Plans & Billing`}</div>
        <img className={styles.notebookIcon} alt="" src="/notebook.svg" />
      </div>
      <div className={styles.dashboardNavItem6}>
        <div className={styles.logOut6}>All Companies</div>
        <img className={styles.userListIcon} alt="" src="/user-list.svg" />
      </div>
      <div className={styles.dashboardNavItem7}>
        <div className={styles.logOut7}>Settings</div>
        <img className={styles.gearIcon} alt="" src="/gear.svg" />
      </div>
    </div>
  );
};

export default FrameContainer;
