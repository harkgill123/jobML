import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Navigation5.module.css";

export type Navigation5Type = {
  jobTitleKeywordPlaceholde?: string;

  /** Style props */
  navigationAlignSelf?: CSSProperties["alignSelf"];
  navigationPosition?: CSSProperties["position"];
  navigationTop?: CSSProperties["top"];
  navigationLeft?: CSSProperties["left"];
  navigationWidth?: CSSProperties["width"];
  funFactsFrameWidth?: CSSProperties["width"];
  appliedjobsIconPadding?: CSSProperties["padding"];
};

const Navigation5: FunctionComponent<Navigation5Type> = ({
  jobTitleKeywordPlaceholde,
  navigationAlignSelf,
  navigationPosition,
  navigationTop,
  navigationLeft,
  navigationWidth,
  funFactsFrameWidth,
  appliedjobsIconPadding,
}) => {
  const navigation1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: navigationAlignSelf,
      position: navigationPosition,
      top: navigationTop,
      left: navigationLeft,
      width: navigationWidth,
    };
  }, [
    navigationAlignSelf,
    navigationPosition,
    navigationTop,
    navigationLeft,
    navigationWidth,
  ]);

  const jobTitleKeyword1Style: CSSProperties = useMemo(() => {
    return {
      width: funFactsFrameWidth,
    };
  }, [funFactsFrameWidth]);

  const funFactsFrameStyle: CSSProperties = useMemo(() => {
    return {
      padding: appliedjobsIconPadding,
    };
  }, [appliedjobsIconPadding]);

  return (
    <header className={styles.navigation} style={navigation1Style}>
      <div className={styles.navigation1}>
        <div className={styles.button}>
          <img className={styles.buttonChild} alt="" src="/ellipse-18@2x.png" />
        </div>
        <div className={styles.jobSyncText}>
          <div className={styles.searchFrame}>
            <div className={styles.sitelogo}>
              <div className={styles.dashboardTitle} />
              <div className={styles.dashboardTitle1} />
              <div className={styles.dashboardTitle2} />
              <div className={styles.sitelogo1} />
            </div>
            <h2 className={styles.jobsync}>JobSync</h2>
          </div>
        </div>
        <div className={styles.sidebarInstance}>
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
              placeholder={jobTitleKeywordPlaceholde}
              type="text"
              style={jobTitleKeyword1Style}
            />
          </div>
        </div>
        <div className={styles.funFactsFrame} style={funFactsFrameStyle}>
          <div className={styles.appliedjobsIcon}>
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
      </div>
    </header>
  );
};

export default Navigation5;
