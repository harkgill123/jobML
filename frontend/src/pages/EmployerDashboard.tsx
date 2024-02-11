import { FunctionComponent } from "react";
import HeaderContainer from "../components/HeaderContainer";
import FunFacts from "../components/FunFacts";
import Job5 from "../components/Job5";
import CheckCircleFullTimeChecked1 from "../components/CheckCircleFullTimeChecked1";
import CheckCircleFullTimeChecked from "../components/CheckCircleFullTimeChecked";
import styles from "./EmployerDashboard.module.css";

const EmployerDashboard: FunctionComponent = () => {
  return (
    <footer className={styles.employerDashboard}>
      <div className={styles.frameJobStatus} />
      <main className={styles.checkCircleActive}>
        <HeaderContainer
          jobTitleKeywordPlaceholde="Skills, keyword"
          navigationPadding="unset"
          navigationBoxShadow="0px -1px 0px #e4e5e8 inset"
          paginationNavWidth="112px"
          iconButtonLeftPadding="0px var(--padding-12xs) 0px 0px"
        />
        <section className={styles.dotsThreeVertical}>
          <div className={styles.sidebar}>
            <div className={styles.links}>
              <div className={styles.employersDashboard}>
                EMPLOYERS DASHBOARD
              </div>
              <div className={styles.jobFrameStatusJob}>
                <div className={styles.dashboardNavItem}>
                  <img className={styles.stackIcon} alt="" src="/stack1.svg" />
                  <input
                    className={styles.logOut}
                    placeholder="Overview"
                    type="text"
                  />
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
          <div className={styles.buttonPrimary}>
            <div className={styles.iconButtonDotsThreeVertica}>
              <div className={styles.jobStatusFrameCheckCircle}>
                <div className={styles.helloInstagram}>Hello, Instagram</div>
                <div className={styles.hereIsYour}>
                  Here is your daily activities and applications
                </div>
              </div>
              <div className={styles.daysremainingnumber}>
                <div className={styles.users}>
                  <FunFacts
                    jobCardFrame="12"
                    appliedJobs="Open Jobs"
                    briefcaseDuotone11="/briefcaseduotone-1-1.svg"
                    propBackgroundColor="#fee7f4"
                    propPadding="var(--padding-xl) var(--padding-xl) var(--padding-xl) var(--padding-5xl)"
                    propWidth="204px"
                    propOverflow="hidden"
                  />
                  <div className={styles.funFacts}>
                    <div className={styles.info}>
                      <div className={styles.div}>25</div>
                      <div className={styles.savedCandidates}>
                        Saved Candidates
                      </div>
                    </div>
                    <button className={styles.icon}>
                      <img
                        className={styles.identificationcardIcon}
                        alt=""
                        src="/identificationcard.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.headingParent}>
                <div className={styles.heading}>
                  <div className={styles.recentlyPostedJobs}>
                    Recently Posted Jobs
                  </div>
                  <button className={styles.button}>
                    <div className={styles.readMore}>View all</div>
                    <img
                      className={styles.fiarrowRightIcon}
                      alt=""
                      src="/fiarrowright-1.svg"
                    />
                  </button>
                </div>
                <div className={styles.navParent}>
                  <div className={styles.nav}>
                    <div className={styles.jobs}>JOBS</div>
                    <div className={styles.status}>STATUS</div>
                    <div className={styles.applications}>APPLICATIONS</div>
                    <div className={styles.actions}>ACTIONS</div>
                  </div>
                  <Job5
                    suniorUXDesigner="UI/UX Designer"
                    fullTime="Full Time"
                    daysRemaining="27 days remaing"
                    checkCircleChecked
                    applications="798 Applications"
                  />
                  <div className={styles.checkCircleFullTimeChecked}>
                    <Job5
                      suniorUXDesigner="Senior UX Designer"
                      fullTime="Internship"
                      daysRemaining="8 days remaing"
                      applications="185 Applications"
                      propWidth="unset"
                      propFlex="0.9593"
                      propFlexWrap="unset"
                      propMinWidth="239px"
                      propBorderColor="unset"
                      propAccentColor="unset"
                    />
                    <div className={styles.jobParent}>
                      <Job5
                        suniorUXDesigner="Senior UX Designer"
                        fullTime="Internship"
                        daysRemaining="8 days remaing"
                        applications="185 Applications"
                        propWidth="unset"
                        propFlex="0.9593"
                        propFlexWrap="wrap"
                        propMinWidth="239px"
                        propBorderColor="unset"
                        propAccentColor="unset"
                      />
                      <div className={styles.jobGroup}>
                        <Job5
                          suniorUXDesigner="Senior UX Designer"
                          fullTime="Internship"
                          daysRemaining="8 days remaing"
                          applications="185 Applications"
                          propWidth="unset"
                          propFlex="0.9593"
                          propFlexWrap="wrap"
                          propMinWidth="239px"
                          propBorderColor="unset"
                          propAccentColor="unset"
                        />
                        <div className={styles.jobContainer}>
                          <Job5
                            suniorUXDesigner="Senior UX Designer"
                            fullTime="Internship"
                            daysRemaining="8 days remaing"
                            applications="185 Applications"
                            propWidth="unset"
                            propFlex="0.9593"
                            propFlexWrap="wrap"
                            propMinWidth="239px"
                            propBorderColor="unset"
                            propAccentColor="unset"
                          />
                          <div className={styles.checkCircleFullTimeChecked1}>
                            <div
                              className={styles.checkCircleFullTimeCheckedChild}
                            />
                            <div className={styles.job}>
                              <div className={styles.suniorUXDesigner}>
                                <div className={styles.suniorUxDesigner}>
                                  Senior UX Designer
                                </div>
                                <div className={styles.fullTimeParent}>
                                  <div className={styles.fullTime}>
                                    Internship
                                  </div>
                                  <div className={styles.div1}>•</div>
                                  <div className={styles.daysRemaining}>
                                    8 days remaing
                                  </div>
                                </div>
                              </div>
                              <div className={styles.jobStatus}>
                                <input
                                  className={styles.checkcircle}
                                  type="radio"
                                />
                                <div className={styles.active}>Active</div>
                              </div>
                              <div className={styles.jobStatus1}>
                                <img
                                  className={styles.usersIcon}
                                  alt=""
                                  src="/users.svg"
                                />
                                <div className={styles.applications1}>
                                  185 Applications
                                </div>
                              </div>
                              <div className={styles.activeJobStatus}>
                                <button className={styles.button1}>
                                  <div className={styles.primary}>
                                    View Applications
                                  </div>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.checkCircleFullTimeChecked2}>
                    <div className={styles.checkCircleFullTimeCheckedItem} />
                    <CheckCircleFullTimeChecked1
                      suniorUXDesigner="Senior UX Designer"
                      fullTime="Internship"
                      daysRemaining="8 days remaing"
                      applications="185 Applications"
                    />
                  </div>
                  <Job5
                    suniorUXDesigner="Junior Graphic Designer"
                    fullTime="Full Time"
                    daysRemaining="24 days remaing"
                    applications="583 Applications"
                    propWidth="984px"
                    propFlex="unset"
                    propFlexWrap="unset"
                    propMinWidth="unset"
                    propBorderColor="unset"
                    propAccentColor="unset"
                  />
                  <CheckCircleFullTimeChecked
                    suniorUXDesigner="Front End Developer"
                    daysRemaining="Dec 7, 2019"
                    expire="Expired"
                    applications="740 Applications"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </footer>
  );
};

export default EmployerDashboard;
