import { FunctionComponent } from "react";
import Navigation8 from "../components/Navigation8";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./EmployerMyJobs.module.css";

const EmployerMyJobs: FunctionComponent = () => {
  return (
    <div className={styles.employerMyJobs}>
      <Navigation8 />
      <section className={styles.sidebarParent}>
        <div className={styles.sidebar}>
          <div className={styles.links}>
            <div className={styles.employersDashboard}>EMPLOYERS DASHBOARD</div>
            <div className={styles.checkCircleNode}>
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
                  alt=""
                  src="/briefcase2.svg"
                />
                <input
                  className={styles.logOut3}
                  placeholder="My Jobs"
                  type="text"
                />
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
                <img
                  className={styles.notebookIcon}
                  alt=""
                  src="/notebook.svg"
                />
              </div>
              <div className={styles.dashboardNavItem6}>
                <div className={styles.logOut6}>All Companies</div>
                <img
                  className={styles.userListIcon}
                  alt=""
                  src="/user-list.svg"
                />
              </div>
              <div className={styles.dashboardNavItem7}>
                <div className={styles.logOut7}>Settings</div>
                <img className={styles.gearIcon} alt="" src="/gear.svg" />
              </div>
            </div>
          </div>
          <div className={styles.dashboardNavItem8}>
            <div className={styles.logOut8} />
            <img className={styles.signoutIcon} alt="" src="/signout.svg" />
          </div>
        </div>
        <div className={styles.primaryNode}>
          <FrameComponent1 />
        </div>
      </section>
    </div>
  );
};

export default EmployerMyJobs;
