import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CheckCircleFullTimeChecked.module.css";

export type CheckCircleFullTimeCheckedType = {
  suniorUXDesigner?: string;
  daysRemaining?: string;
  expire?: string;
  applications?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propFlexWrap?: CSSProperties["flexWrap"];
};

const CheckCircleFullTimeChecked: FunctionComponent<
  CheckCircleFullTimeCheckedType
> = ({
  suniorUXDesigner,
  daysRemaining,
  expire,
  applications,
  propWidth,
  propFlex,
  propMarginLeft,
  propFlexWrap,
}) => {
  const checkCircleFullTimeChecked1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      marginLeft: propMarginLeft,
    };
  }, [propWidth, propFlex, propMarginLeft]);

  const job5Style: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  return (
    <div
      className={styles.checkCircleFullTimeChecked}
      style={checkCircleFullTimeChecked1Style}
    >
      <div className={styles.checkCircleFullTimeCheckedChild} />
      <div className={styles.job} style={job5Style}>
        <div className={styles.suniorUxDesignerParent}>
          <div className={styles.suniorUxDesigner}>{suniorUXDesigner}</div>
          <div className={styles.fullTimeParent}>
            <div className={styles.fullTime}>Full Time</div>
            <div className={styles.div}>•</div>
            <div className={styles.daysRemaining}>{daysRemaining}</div>
          </div>
        </div>
        <div className={styles.jobStatus}>
          <img
            className={styles.xcircleIcon}
            loading="eager"
            alt=""
            src="/xcircle.svg"
          />
          <div className={styles.expire}>{expire}</div>
        </div>
        <div className={styles.jobStatus1}>
          <img className={styles.usersIcon} alt="" src="/users.svg" />
          <div className={styles.applications}>{applications}</div>
        </div>
        <div className={styles.buttonParent}>
          <button className={styles.button}>
            <div className={styles.primary}>View Applications</div>
          </button>
          <div className={styles.iconButton}>
            <img
              className={styles.dotsthreeverticalIcon}
              alt=""
              src="/dotsthreevertical.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckCircleFullTimeChecked;
