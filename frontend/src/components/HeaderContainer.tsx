import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HeaderContainer.module.css";

export type HeaderContainerType = {
  jobTitleKeywordPlaceholde?: string;

  /** Style props */
  navigationPadding?: CSSProperties["padding"];
  navigationBoxShadow?: CSSProperties["boxShadow"];
  paginationNavWidth?: CSSProperties["width"];
  iconButtonLeftPadding?: CSSProperties["padding"];
};

const HeaderContainer: FunctionComponent<HeaderContainerType> = ({
  jobTitleKeywordPlaceholde,
  navigationPadding,
  navigationBoxShadow,
  paginationNavWidth,
  iconButtonLeftPadding,
}) => {
  const headerContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: navigationPadding,
      boxShadow: navigationBoxShadow,
    };
  }, [navigationPadding, navigationBoxShadow]);

  const jobTitleKeyword2Style: CSSProperties = useMemo(() => {
    return {
      width: paginationNavWidth,
    };
  }, [paginationNavWidth]);

  const paginationNavStyle: CSSProperties = useMemo(() => {
    return {
      padding: iconButtonLeftPadding,
    };
  }, [iconButtonLeftPadding]);

  return (
    <header className={styles.headerContainer} style={headerContainerStyle}>
      <div className={styles.navigation}>
        <div className={styles.navigation1}>
          <div className={styles.button}>
            <img
              className={styles.buttonChild}
              alt=""
              src="/ellipse-18@2x.png"
            />
          </div>
          <div className={styles.mainContent}>
            <div className={styles.sidebar}>
              <div className={styles.sitelogo}>
                <div className={styles.checkbox} />
                <div className={styles.checkbox1} />
                <div className={styles.checkbox2} />
                <div className={styles.sitelogo1} />
              </div>
              <h3 className={styles.jobsync}>JobSync</h3>
            </div>
          </div>
          <div className={styles.primaryButton}>
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
                className={styles.jobTitleKeyword}
                placeholder={jobTitleKeywordPlaceholde}
                type="text"
                style={jobTitleKeyword2Style}
              />
            </div>
          </div>
          <div className={styles.paginationNav} style={paginationNavStyle}>
            <div className={styles.iconButtonLeft}>
              <h3 className={styles.home}>Home</h3>
            </div>
            <h3 className={styles.dashboard}>Dashboard</h3>
            <h3 className={styles.myProfile}>My Profile</h3>
            <div className={styles.frameHeader}>
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
    </header>
  );
};

export default HeaderContainer;
