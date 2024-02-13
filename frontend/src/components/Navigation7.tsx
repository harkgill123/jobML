import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Navigation7.module.css";

export type Navigation7Type = {
  jobTitleKeywordPlaceholde?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
};

const Navigation7: FunctionComponent<Navigation7Type> = ({
  jobTitleKeywordPlaceholde,
  frameDivWidth,
}) => {
  const jobTitleKeyword3Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  return (
    <div className={styles.navigation}>
      <div className={styles.button}>
        <img className={styles.buttonChild} alt="" src="/ellipse-18@2x.png" />
      </div>
      <div className={styles.inputFieldWrapper}>
        <div className={styles.inputField}>
          <div className={styles.sitelogo}>
            <div className={styles.text} />
            <div className={styles.text1} />
            <div className={styles.text2} />
            <div className={styles.sitelogo1} />
          </div>
          <h3 className={styles.jobsync}>JobSync</h3>
        </div>
      </div>
      <div className={styles.profileFrame}>
        <div className={styles.search}>
          <div className={styles.image1Parent}>
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            <div className={styles.india}>India</div>
            <img className={styles.caretdownIcon} alt="" src="/caretdown.svg" />
          </div>
          <div className={styles.searchChild} />
          <img className={styles.fisearchIcon} alt="" src="/fisearch.svg" />
          <input
            className={styles.jobTitleKeyword}
            placeholder={jobTitleKeywordPlaceholde}
            type="text"
            style={jobTitleKeyword3Style}
          />
        </div>
      </div>
      <div className={styles.candidateSettingsButton}>
        <div className={styles.homeWrapper}>
          <h3 className={styles.home}>Home</h3>
        </div>
        <h3 className={styles.dashboard}>Dashboard</h3>
        <div className={styles.text3}>
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
      </div>
    </div>
  );
};

export default Navigation7;
