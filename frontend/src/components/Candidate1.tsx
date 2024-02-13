import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Candidate1.module.css";

export type Candidate1Type = {
  guyHawkins?: string;
  uXDesigner?: string;
  mapPin?: string;
  losAngales?: string;
  stack?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlexWrap?: CSSProperties["flexWrap"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Candidate1: FunctionComponent<Candidate1Type> = ({
  guyHawkins,
  uXDesigner,
  mapPin,
  losAngales,
  stack,
  propAlignSelf,
  propFlexWrap,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const candidate2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flexWrap: propFlexWrap,
      width: propWidth,
    };
  }, [propAlignSelf, propFlexWrap, propWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div className={styles.candidate} style={candidate2Style}>
      <div className={styles.image} />
      <div className={styles.savedCandidatesFrame}>
        <div className={styles.guyHawkins}>{guyHawkins}</div>
        <div className={styles.uxDesigner}>{uXDesigner}</div>
      </div>
      <div className={styles.suniorUxDesignerParent}>
        <div className={styles.suniorUxDesigner}>Senior UX Designer</div>
        <div className={styles.dateParent}>
          <div className={styles.date}>Dec 7, 2019 23:26</div>
          <div className={styles.div}>•</div>
          <div className={styles.fullTime}>Internship</div>
        </div>
      </div>
      <div className={styles.mappinParent}>
        <img
          className={styles.mappinIcon}
          loading="eager"
          alt=""
          src={mapPin}
        />
        <div className={styles.losAngales}>{losAngales}</div>
      </div>
      <div className={styles.stackParent}>
        <img className={styles.stackIcon} alt="" src={stack} />
        <div className={styles.years}>{`23 Years `}</div>
      </div>
      <div className={styles.iconButtonParent} style={frameDivStyle}>
        <div className={styles.iconButton}>
          <img
            className={styles.bookmarksimpleIcon}
            alt=""
            src="/bookmarksimple-13.svg"
          />
        </div>
        <button className={styles.button}>
          <div className={styles.primary}>View Profile</div>
          <img
            className={styles.fiarrowRightIcon}
            alt=""
            src="/fiarrowright3.svg"
          />
        </button>
        <div className={styles.iconButton1}>
          <img
            className={styles.dotsthreeverticalIcon}
            loading="eager"
            alt=""
            src="/dotsthreevertical.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Candidate1;
