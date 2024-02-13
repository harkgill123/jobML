import { FunctionComponent } from "react";
import styles from "./LineEmpty.module.css";

const LineEmpty: FunctionComponent = () => {
  return (
    <section className={styles.lineEmpty}>
      <div className={styles.frameExperience}>
        <div className={styles.navigation}>
          <div className={styles.navigation1}>
            <div className={styles.button}>
              <img
                className={styles.buttonChild}
                alt=""
                src="/ellipse-18@2x.png"
              />
            </div>
            <div className={styles.headingEducation}>
              <div className={styles.frameSiteLogoCallNow}>
                <div className={styles.sitelogo}>
                  <div className={styles.parttimeType} />
                  <div className={styles.parttimeType1} />
                  <div className={styles.parttimeType2} />
                  <div className={styles.sitelogo1} />
                </div>
                <h3 className={styles.jobsync}>JobSync</h3>
              </div>
            </div>
            <div className={styles.mapPinLocations}>
              <div className={styles.search}>
                <div className={styles.image1Parent}>
                  <img
                    className={styles.image1Icon}
                    alt=""
                    src="/image-1@2x.png"
                  />
                  <div className={styles.india}>India</div>
                  <img
                    className={styles.caretdownIcon}
                    alt=""
                    src="/caretdown.svg"
                  />
                </div>
                <div className={styles.searchChild} />
                <img
                  className={styles.fisearchIcon}
                  alt=""
                  src="/fisearch.svg"
                />
                <input
                  className={styles.jobTitleKeyword}
                  placeholder="Job title, keyword, company"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.quickLink}>
              <div className={styles.contactFrame}>
                <div className={styles.home}>Home</div>
              </div>
              <div className={styles.dashboard}>Dashboard</div>
              <div className={styles.myProfile}>My Profile</div>
              <div className={styles.frameInfoBriefcase}>
                <img
                  className={styles.signoutIcon}
                  loading="eager"
                  alt=""
                  src="/signout.svg"
                />
                <div className={styles.logOut}>Log-out</div>
              </div>
            </div>
          </div>
        </div>
        <header className={styles.breadcrumb}>
          <div className={styles.label}>Job Details</div>
          <div className={styles.process}>
            <div className={styles.label1}>Home</div>
            <div className={styles.info}>/</div>
            <div className={styles.label2}>Label</div>
            <div className={styles.div}>/</div>
            <div className={styles.label3}>Label</div>
            <div className={styles.div1}>/</div>
            <div className={styles.label4}>Label</div>
            <div className={styles.div2}>/</div>
            <div className={styles.label5}>Label</div>
            <div className={styles.div3}>/</div>
            <div className={styles.label6}>Label</div>
            <div className={styles.div4}>/</div>
            <div className={styles.label7}>Find Job</div>
            <div className={styles.info1}>/</div>
            <div className={styles.label8}>{`Graphics & Design`}</div>
            <div className={styles.div5}>/</div>
            <div className={styles.label9}>Job Details</div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default LineEmpty;
