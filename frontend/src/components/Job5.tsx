import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Job5.module.css";

export type Job5Type = {
  suniorUXDesigner?: string;
  fullTime?: string;
  daysRemaining?: string;
  checkCircleChecked?: boolean;
  applications?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propFlexWrap?: CSSProperties["flexWrap"];
  propMinWidth?: CSSProperties["minWidth"];
  propBorderColor?: CSSProperties["borderColor"];
  propAccentColor?: CSSProperties["accentColor"];
};

const Job5: FunctionComponent<Job5Type> = ({
  suniorUXDesigner,
  fullTime,
  daysRemaining,
  checkCircleChecked,
  applications,
  propWidth,
  propFlex,
  propFlexWrap,
  propMinWidth,
  propBorderColor,
  propAccentColor,
}) => {
  const job3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      flexWrap: propFlexWrap,
    };
  }, [propWidth, propFlex, propFlexWrap]);

  const activeCheckedStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const checkCircleStyle: CSSProperties = useMemo(() => {
    return {
      borderColor: propBorderColor,
      accentColor: propAccentColor,
    };
  }, [propBorderColor, propAccentColor]);

  return (
    <div className={styles.job} style={job3Style}>
      <div className={styles.activeChecked} style={activeCheckedStyle}>
        <div className={styles.suniorUxDesigner}>{suniorUXDesigner}</div>
        <div className={styles.fullTimeParent}>
          <div className={styles.fullTime}>{fullTime}</div>
          <div className={styles.div}>•</div>
          <div className={styles.daysRemaining}>{daysRemaining}</div>
        </div>
      </div>
      <div className={styles.jobStatus}>
        <input
          className={styles.checkcircle}
          checked={checkCircleChecked}
          type="radio"
          style={checkCircleStyle}
        />
        <div className={styles.active}>Active</div>
      </div>
      <div className={styles.jobStatus1}>
        <img
          className={styles.usersIcon}
          loading="eager"
          alt=""
          src="/users.svg"
        />
        <div className={styles.applications}>{applications}</div>
      </div>
      <div className={styles.navJobsStatusApplications}>
        <button className={styles.button}>
          <div className={styles.primary}>View Applications</div>
        </button>
        <div className={styles.iconButton}>
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

export default Job5;
