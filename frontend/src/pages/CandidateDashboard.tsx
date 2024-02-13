import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import FunFacts from "../components/FunFacts";
import FeaturedBadgeFrame from "../components/FeaturedBadgeFrame";
import Job4 from "../components/Job4";
import styles from "./CandidateDashboard.module.css";

const CandidateDashboard: FunctionComponent = () => {
  return (
    <div className={styles.candidateDashboard}>
      <Navigation1  />
      <section className={styles.sidebarContainer}>
        <div className={styles.sidebar}>
          <div className={styles.links}>
            <div className={styles.candidateDashboard1} />
            <div className={styles.dashboardNavItemStack}>
              <div className={styles.dashboardNavItem}>
                <img className={styles.stackIcon} alt="" src="/stack1.svg" />
                <input
                  className={styles.logOut}
                  placeholder="Overview"
                  type="text"
                />
              </div>
              <div className={styles.dashboardNavItem1}>
                <img
                  className={styles.briefcaseIcon}
                  loading="eager"
                  alt=""
                  src="/briefcase1.svg"
                />
                <div className={styles.logOut1}>Applied Jobs</div>
              </div>
              <div className={styles.dashboardNavItem2}>
                <img
                  className={styles.bookmarksimpleIcon}
                  loading="eager"
                  alt=""
                  src="/bookmarksimple-1.svg"
                />
                <div className={styles.logOut2}>Favorite Jobs</div>
              </div>
              <div className={styles.dashboardNavItem3}>
                <div className={styles.logOut3}>Job Alert</div>
                <div className={styles.wrapper}>
                  <div className={styles.div}>09</div>
                </div>
                <img
                  className={styles.bellringingIcon}
                  alt=""
                  src="/bellringing.svg"
                />
              </div>
              <div className={styles.dashboardNavItem4}>
                <div className={styles.logOut4}>Settings</div>
                <img className={styles.gearIcon} alt="" src="/gear.svg" />
              </div>
            </div>
          </div>
          <div className={styles.dashboardNavItem5}>
            <img className={styles.signoutIcon} alt="" />
            <div className={styles.logOut5} />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.helloUserNameFrame}>
            <div className={styles.welcomeMessageFrame}>
              <div className={styles.funFactsFrame}>
                <div className={styles.helloUserName}>Hello, User Name</div>
                <div className={styles.welcomeToYour}>
                  Welcome to your job search overview
                </div>
              </div>
              <div className={styles.funFactsParent}>
                <FunFacts
                  jobCardFrame="23"
                  appliedJobs="Applied jobs"
                  briefcaseDuotone11="/briefcaseduotone-1-1.svg"
                />
                <FunFacts
                  jobCardFrame="10"
                  appliedJobs="Favorite jobs"
                  briefcaseDuotone11="/bookmarksimple-11.svg"
                  propBackgroundColor="rgba(241, 155, 19, 0.1)"
                  propPadding="var(--padding-xl) var(--padding-12xl) var(--padding-xl) var(--padding-16xl)"
                  propWidth="180px"
                  propOverflow="unset"
                />
              </div>
              <div className={styles.changeResumeBtn}>
                <div className={styles.recommendedFrame}>
                  <div className={styles.haveYouMadeAnyChangesToYWrapper}>
                    <div className={styles.haveYouMade}>
                      Have you made any changes to your Resume?
                    </div>
                  </div>
                </div>
                <button className={styles.button}>
                  <div className={styles.primary}>Edit Profile</div>
                  <img
                    className={styles.fiarrowRightIcon}
                    alt=""
                    src="/fiarrowright4.svg"
                  />
                </button>
              </div>
            </div>
            <div className={styles.headingParent}>
              <div className={styles.heading}>
                <div className={styles.recommended}>Recommended</div>
                <button className={styles.button1}>
                  <div className={styles.readMore}>View all</div>
                  <img
                    className={styles.fiarrowRightIcon1}
                    alt=""
                    src="/fiarrowright-1.svg"
                  />
                </button>
              </div>
              <div className={styles.googleIncInfo}>
                <div className={styles.nav}>
                  <div className={styles.job}>Job</div>
                  <div className={styles.dateApplied}>Date Applied</div>
                  <div className={styles.status}>Status</div>
                  <div className={styles.action}>Action</div>
                </div>
                <div className={styles.googleCompanyFrame}>
                  <FeaturedBadgeFrame
                    networkingEngineer="Networking Engineer"
                    featured="Remote"
                    washington="Washington"
                    june122021="Jan 2, 2024 19:28"
                  />
                  <FeaturedBadgeFrame
                    networkingEngineer="Product Designer"
                    featured="Full Time"
                    washington="Dhaka"
                    june122021="Dec 7, 2023 23:26"
                    propFlex="0.9593"
                    propPadding="16px 20px"
                    propPadding1="var(--padding-10xs) var(--padding-4xs) var(--padding-10xs) var(--padding-xs)"
                  />
                  <Job4
                    suniorUXDesigner="Junior Graphic Designer"
                    featured="Temporary"
                    newYork="Brazil"
                    june122021="Jan 2, 2024 19:28"
                  />
                  <FeaturedBadgeFrame
                    networkingEngineer="Visual Designer"
                    featured="Contract Base"
                    washington="Wisconsin"
                    june122021="Dec 7, 2023 23:26"
                    propFlex="0.9604"
                    propPadding="var(--padding-xl) var(--padding-lgi) var(--padding-xl) var(--padding-xl)"
                    propPadding1="var(--padding-10xs) var(--padding-4xs) var(--padding-10xs) var(--padding-xs)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CandidateDashboard;
