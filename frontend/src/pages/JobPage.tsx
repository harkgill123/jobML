import { FunctionComponent } from "react";
import LineEmpty from "../components/LineEmpty";
import CompanyInfo from "../components/CompanyInfo";
import Info from "../components/Info";
import RelatedJobsFrame from "../components/RelatedJobsFrame";
import Footer1 from "../components/Footer1";
import styles from "./JobPage.module.css";

const JobPage: FunctionComponent = () => {
  return (
    <div className={styles.jobPage}>
      <LineEmpty />
      <section className={styles.heading}>
        <div className={styles.jobParent}>
          <div className={styles.job}>
            <div className={styles.heading1}>
              <h3 className={styles.seniorUxDesigner}>Senior UX Designer</h3>
            </div>
            <div className={styles.company}>
              <div className={styles.atFacebook}>at Facebook</div>
              <button className={styles.lineSeparator}>
                <div className={styles.fullTime}>FULL-TIME</div>
              </button>
              <button className={styles.badge}>
                <div className={styles.featured}>Featured</div>
              </button>
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.iconButton}>
              <img
                className={styles.bookmarksimpleIcon}
                loading="eager"
                alt=""
                src="/bookmarksimple1.svg"
              />
            </div>
            <button className={styles.button}>
              <div className={styles.primary}>Apply now</div>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright1.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.jobLevelSection}>
          <CompanyInfo />
          <div className={styles.candidateLinksFooter}>
            <div className={styles.salaryLocation}>
              <div className={styles.callToActionButton}>
                <div className={styles.salaryUsd}>Salary (USD)</div>
                <div className={styles.interactionDesignJob}>
                  <div className={styles.partTimeFull}>$100,000 - $120,000</div>
                  <div className={styles.yearlySalary}>Yearly salary</div>
                </div>
              </div>
              <div className={styles.companyMarkerFrame} />
              <div className={styles.footerLinksContainer}>
                <img
                  className={styles.maptrifoldIcon}
                  loading="eager"
                  alt=""
                  src="/maptrifold.svg"
                />
                <div className={styles.jobPostingLine}>
                  <div className={styles.jobLocation}>Job Location</div>
                  <div className={styles.dhakaBangladesh}>
                    Dhaka, Bangladesh
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.jobInformation}>
              <div className={styles.entryLevelText}>
                <div className={styles.jobOverview}>Job Overview</div>
                <div className={styles.infoParent}>
                  <Info
                    calendarBlank="/calendarblank.svg"
                    jobPosted="Job Posted:"
                    jun2021="14 Jun, 2021"
                  />
                  <Info
                    calendarBlank="/timer.svg"
                    jobPosted="Job expire in:"
                    jun2021="14 Aug, 2021"
                    propMinWidth="109px"
                    propOverflow="unset"
                  />
                  <Info
                    calendarBlank="/stack.svg"
                    jobPosted="Job Level:"
                    jun2021="Entry Level"
                    propMinWidth="109px"
                    propOverflow="unset"
                  />
                </div>
                <div className={styles.infoBriefcaseFrame}>
                  <Info
                    calendarBlank="/wallet.svg"
                    jobPosted="Experience"
                    jun2021="3+ years"
                    propMinWidth="unset"
                    propOverflow="unset"
                  />
                  <Info
                    calendarBlank="/briefcase.svg"
                    jobPosted="Education"
                    jun2021="Undergrad"
                    propMinWidth="unset"
                    propOverflow="hidden"
                  />
                </div>
              </div>
              <div className={styles.jobInformationChild} />
            </div>
          </div>
        </div>
      </section>
      <RelatedJobsFrame />
      <Footer1 />
    </div>
  );
};

export default JobPage;
