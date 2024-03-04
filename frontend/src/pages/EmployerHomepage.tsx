import { FunctionComponent } from "react";
import SiteLogo from "../components/SiteLogo";
import FeaturedJob from "../components/FeaturedJob";
import Footer from "../components/Footer";
import styles from "./EmployerHomepage.module.css";

const EmployerHomepage: FunctionComponent = () => {
  return (
    <div className={styles.employerHomepage}>
      <header className={styles.navigation}>
        <div className={styles.navigation1}>
          <div className={styles.button}>
            <img
              className={styles.buttonChild}
              alt=""
              src="/ellipse-18@2x.png"
            />
          </div>
          <div className={styles.siteLogoInstance}>
            <div className={styles.lineTextInput}>
              <div className={styles.sitelogo}>
                <div className={styles.tEXTFrame} />
                <div className={styles.tEXTFrame1} />
                <div className={styles.tEXTFrame2} />
                <div className={styles.sitelogo1} />
              </div>
              <h3 className={styles.jobsync}>JobSync</h3>
            </div>
          </div>
          <div className={styles.callNowButton}>
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
              <img className={styles.fisearchIcon} alt="" src="/fisearch.svg" />
              <input
                className={styles.skillsKeyword}
                placeholder="Skills, keyword"
                type="text"
              />
            </div>
          </div>
          <div className={styles.footerLink}>
            <div className={styles.footerLink1}>
              <b className={styles.home}>Home</b>
            </div>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.myProfile}>My Profile</div>
            <div className={styles.lineSeparator}>
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
      </header>
      <SiteLogo
        findAJobThatSuitsYourInte="Find a candidate that suits your needs."
        jobTittleKeywordPlacehold="Skills"
        propMinWidth="63px"
        propWidth="39px"
      />

      <Footer propMargin="unset" propMargin1="unset" propMargin2="unset" />
    </div>
  );
};

export default EmployerHomepage;
