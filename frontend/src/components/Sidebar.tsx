import { FunctionComponent } from "react";
import styles from "./Sidebar.module.css";

const Sidebar: FunctionComponent = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarheaderframe}>
        <div className={styles.employersDashboard}>EMPLOYERS DASHBOARD</div>
        <div className={styles.dashboardnavitemstack}>
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
            <img
              className={styles.usercircleIcon}
              alt=""
              src="/usercircle.svg"
            />
          </div>
          <div className={styles.dashboardNavItem2}>
            <img
              className={styles.pluscircleIcon}
              loading="eager"
              alt=""
              src="/pluscircle1.svg"
            />
            <div className={styles.logOut2}>Post a Job</div>
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
          <button className={styles.dashboardNavItem4}>
            <input className={styles.bookmarksimple} type="checkbox" />
            <div className={styles.logOut4}>Saved Candidate</div>
          </button>
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
            <img className={styles.gearIcon} alt="" src="/gear1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.bookmarkSimpleicon}>
        <div className={styles.logOut8} />
      </div>
      <img className={styles.signoutIcon} alt="" src="/signout.svg" />
    </div>
  );
};

export default Sidebar;
