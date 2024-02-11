import { FunctionComponent } from "react";
import styles from "./Navigation8.module.css";

const Navigation8: FunctionComponent = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.navigation1}>
        <div className={styles.navigation2}>
          <nav className={styles.navigation3}>
            <div className={styles.button}>
              <img
                className={styles.buttonChild}
                alt=""
                src="/ellipse-18@2x.png"
              />
            </div>
            <div className={styles.suniorUXDesignerText}>
              <div className={styles.sitelogoParent}>
                <div className={styles.sitelogo}>
                  <div className={styles.sitelogoChild} />
                  <div className={styles.sitelogoItem} />
                  <div className={styles.sitelogoInner} />
                  <div className={styles.sitelogo1} />
                </div>
                <h2 className={styles.jobsync}>JobSync</h2>
              </div>
            </div>
            <div className={styles.searchWrapper}>
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
                  className={styles.skillsKeyword}
                  placeholder="Skills, keyword"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.homeWrapper}>
                <h3 className={styles.home}>Home</h3>
              </div>
              <h3 className={styles.dashboard}>Dashboard</h3>
              <h3 className={styles.myProfile}>My Profile</h3>
              <div className={styles.signoutParent}>
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
        </div>
      </div>
    </header>
  );
};

export default Navigation8;
