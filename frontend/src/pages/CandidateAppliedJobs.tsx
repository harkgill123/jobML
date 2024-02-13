import { FunctionComponent } from "react";
import HeaderContainer from "../components/HeaderContainer";
import FeaturedBadgeFrame from "../components/FeaturedBadgeFrame";
import Job4 from "../components/Job4";
import styles from "./CandidateAppliedJobs.module.css";

const CandidateAppliedJobs: FunctionComponent = () => {
  return (
    <div className={styles.candidateAppliedJobs}>
      <HeaderContainer jobTitleKeywordPlaceholde="Job title, keyword, company" />
      <section className={styles.headercontainer}>
        <div className={styles.navigationmenu}>
          <div className={styles.sidebar}>
            <div className={styles.links}>
              <div className={styles.candidateDashboard}>
                CANDIDATE DASHBOARD
              </div>
              <div className={styles.calltoaction}>
                <div className={styles.dashboardNavItem}>
                  <img
                    className={styles.stackIcon}
                    loading="eager"
                    alt=""
                    src="/stack11.svg"
                  />
                  <div className={styles.logOut}>Overview</div>
                </div>
                <button className={styles.dashboardNavItem1}>
                  <img
                    className={styles.briefcaseIcon}
                    alt=""
                    src="/briefcase2.svg"
                  />
                  <div className={styles.logOut1}>Applied Jobs</div>
                </button>
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
              <div className={styles.logOut5} />
              <img className={styles.signoutIcon} alt="" src="/signout.svg" />
            </div>
          </div>
          <div className={styles.linebreak}>
            <div className={styles.buttongroup}>
              <div className={styles.appliedJobs23Container}>
                <span className={styles.appliedJobs}>{`Applied Jobs `}</span>
                <span className={styles.span}>(23)</span>
              </div>
              <div className={styles.nav}>
                <div className={styles.jobs}>JOBS</div>
                <div className={styles.dateApplied}>DATE APPLIED</div>
                <div className={styles.status}>STATUS</div>
                <div className={styles.action}>ACTION</div>
              </div>
              <div className={styles.labeltext}>
                <FeaturedBadgeFrame
                  networkingEngineer="Networking Engineer"
                  featured="Remote"
                  washington="Washington"
                  june122021="Jan 2, 2024 19:28"
                  propFlex="0.9634"
                  propPadding="var(--padding-xl) var(--padding-base) var(--padding-xl) var(--padding-xl)"
                  propPadding1="var(--padding-10xs) var(--padding-xs)"
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
                  propWidth="984px"
                  propPadding="16px 20px"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propMinWidth="unset"
                  propPadding1="var(--padding-10xs) var(--padding-xs)"
                />
                <div className={styles.currencySymbol}>
                  <Job4
                    suniorUXDesigner="Visual Designer"
                    featured="Contract Base"
                    newYork="Wisconsin"
                    june122021="Dec 7, 2023 23:26"
                    propWidth="100%"
                    propPadding="var(--padding-xl) var(--padding-lgi) var(--padding-xl) var(--padding-xl)"
                    propPosition="absolute"
                    propTop="0px"
                    propLeft="0.5px"
                    propMinWidth="289px"
                    propPadding1="var(--padding-10xs) var(--padding-4xs) var(--padding-10xs) var(--padding-xs)"
                  />
                  <div className={styles.lineSeparator} />
                  <div className={styles.job}>
                    <div className={styles.heading}>
                      <div className={styles.headingParent}>
                        <div className={styles.heading1}>
                          <div className={styles.networkingEngineer}>
                            Networking Engineer
                          </div>
                          <div className={styles.badge}>
                            <div className={styles.featured}>Remote</div>
                          </div>
                        </div>
                        <div className={styles.googleInc}>Google Inc.</div>
                        <div className={styles.info}>
                          <div className={styles.loaction}>
                            <img
                              className={styles.fimapPinIcon}
                              alt=""
                              src="/fimappin1.svg"
                            />
                            <div className={styles.washington}>Washington</div>
                          </div>
                          <div className={styles.price}>
                            <img
                              className={styles.currencyDollar1Icon}
                              alt=""
                              src="/currencydollar-11.svg"
                            />
                            <div className={styles.k80kmonth}>
                              $50k-80k/month
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.june122021}>Jan 2, 2024 19:28</div>
                    <div className={styles.checkParent}>
                      <img
                        className={styles.checkIcon}
                        alt=""
                        src="/check.svg"
                      />
                      <div className={styles.active}>Active</div>
                    </div>
                    <button className={styles.button}>
                      <div className={styles.primary}>View details</div>
                    </button>
                    <img
                      className={styles.jobChild}
                      alt=""
                      src="/line-36.svg"
                    />
                  </div>
                </div>
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
                  propWidth="984px"
                  propPadding="16px 20px"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  propMinWidth="unset"
                  propPadding1="var(--padding-10xs) var(--padding-xs)"
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
        <div className={styles.lastLine}>
          <div className={styles.pagination}>
            <div className={styles.iconButton}>
              <img
                className={styles.fiarrowRightIcon}
                loading="eager"
                alt=""
                src="/fiarrowright-12.svg"
              />
            </div>
            <div className={styles.pages}>
              <div className={styles.pagination1}>
                <div className={styles.pagesContainer}>01</div>
              </div>
              <div className={styles.pagination2}>
                <div className={styles.div1}>02</div>
              </div>
              <div className={styles.pagination3}>
                <div className={styles.div2}>03</div>
              </div>
              <div className={styles.pagination4}>
                <div className={styles.div3}>04</div>
              </div>
              <div className={styles.pagination5}>
                <div className={styles.div4}>05</div>
              </div>
            </div>
            <button className={styles.iconButton1}>
              <img
                className={styles.fiarrowRightIcon1}
                alt=""
                src="/fiarrowright3.svg"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CandidateAppliedJobs;
