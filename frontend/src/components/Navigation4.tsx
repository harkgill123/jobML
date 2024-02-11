import { FunctionComponent } from "react";
import styles from "./Navigation4.module.css";

const Navigation4: FunctionComponent = () => {
  return (
    <header className={styles.navigation}>
      <nav className={styles.navigation1}>
        <div className={styles.button}>
          <img className={styles.buttonChild} alt="" src="/ellipse-18@2x.png" />
        </div>
        <div className={styles.loaction}>
          <div className={styles.nextPage}>
            <div className={styles.sitelogo}>
              <div className={styles.calendarblank} />
              <div className={styles.calendarblank1} />
              <div className={styles.calendarblank2} />
              <div className={styles.sitelogo1} />
            </div>
            <h2 className={styles.jobsync}>JobSync</h2>
          </div>
        </div>
        <div className={styles.iconButton}>
          <div className={styles.search}>
            <div className={styles.image1Parent}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
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
              className={styles.jobTitleKeyword}
              placeholder="Job title, keyword, company"
              type="text"
            />
          </div>
        </div>
        <div className={styles.favoriteSymbol}>
          <div className={styles.pages}>
            <h3 className={styles.home}>Home</h3>
          </div>
          <h3 className={styles.dashboard}>Dashboard</h3>
          <h3 className={styles.myProfile}>My Profile</h3>
          <div className={styles.candidate}>
            <img
              className={styles.signoutIcon}
              loading="eager"
              alt=""
              src="/signout.svg"
            />
            <h3 className={styles.logOut}>Log-out</h3>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation4;
