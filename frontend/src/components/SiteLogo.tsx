import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SiteLogo.module.css";

export type SiteLogoType = {
  findAJobThatSuitsYourInte?: string;
  jobTittleKeywordPlacehold?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const SiteLogo: FunctionComponent<SiteLogoType> = ({
  findAJobThatSuitsYourInte,
  jobTittleKeywordPlacehold,
  propMinWidth,
  propWidth,
}) => {
  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const jobTittleKeywordStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <section className={styles.siteLogo}>
      <div className={styles.headerSection}>
        <div className={styles.container}>
          <h1 className={styles.findAJob}>{findAJobThatSuitsYourInte}</h1>
          <form className={styles.search}>
            <div className={styles.inputField} style={inputFieldStyle}>
              <img
                className={styles.fisearchIcon}
                alt=""
                src="/fisearch-1.svg"
              />
              <input
                className={styles.jobTittleKeyword}
                placeholder={jobTittleKeywordPlacehold}
                type="text"
                style={jobTittleKeywordStyle}
              />
            </div>
            <div className={styles.searchChild} />
            <div className={styles.icon}>
              <div className={styles.inputField1}>
                <img
                  className={styles.fimapPinIcon}
                  alt=""
                  src="/fimappin.svg"
                />
                <input
                  className={styles.yourLocation}
                  placeholder="Your Location"
                  type="text"
                />
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.primary}>Find Job</div>
            </button>
          </form>
        </div>
      </div>
      <img
        className={styles.illustrationIcon}
        loading="eager"
        alt=""
        src="/illustration.svg"
      />
    </section>
  );
};

export default SiteLogo;
