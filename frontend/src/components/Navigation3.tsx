import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Navigation3.module.css";

export type Navigation3Type = {
  jobTitleKeywordPlaceholde?: string;

  /** Style props */
  frameWithMyProfileTextWidth?: CSSProperties["width"];
  frameWithLogoutTextPadding?: CSSProperties["padding"];
};

const Navigation3: FunctionComponent<Navigation3Type> = ({
  jobTitleKeywordPlaceholde,
  frameWithMyProfileTextWidth,
  frameWithLogoutTextPadding,
}) => {
  const jobTitleKeywordStyle: CSSProperties = useMemo(() => {
    return {
      width: frameWithMyProfileTextWidth,
    };
  }, [frameWithMyProfileTextWidth]);

  const settingFrameTabStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameWithLogoutTextPadding,
    };
  }, [frameWithLogoutTextPadding]);

  return (
    <nav className={styles.navigation}>
      <div className={styles.button}>
        <img className={styles.buttonChild} alt="" src="/ellipse-18@2x.png" />
      </div>
      <div className={styles.searchFrame}>
        <div className={styles.homeText}>
          <div className={styles.sitelogo}>
            <div className={styles.sitelogoChild} />
            <div className={styles.sitelogoItem} />
            <div className={styles.sitelogoInner} />
            <div className={styles.sitelogo1} />
          </div>
          <h3 className={styles.jobsync}>JobSync</h3>
        </div>
      </div>
      <div className={styles.userPersonalTab}>
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
            style={jobTitleKeywordStyle}
          />
        </div>
      </div>
      <div className={styles.frameWithHomeText}>
        <div className={styles.frameWithMyProfileText}>
          <h3 className={styles.home}>Home</h3>
        </div>
        <h3 className={styles.dashboard}>Dashboard</h3>
        <div className={styles.settingFrameTab} style={settingFrameTabStyle}>
          <h3 className={styles.myProfile}>My Profile</h3>
          <div className={styles.frameWithLogoutText}>
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
    </nav>
  );
};

export default Navigation3;
