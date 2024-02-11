import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CheckCircleFullTimeChecked1.module.css";

export type CheckCircleFullTimeChecked1Type = {
  suniorUXDesigner?: string;
  fullTime?: string;
  daysRemaining?: string;
  applications?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propFlex1?: CSSProperties["flex"];
  propFlexWrap?: CSSProperties["flexWrap"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
};

const CheckCircleFullTimeChecked1: FunctionComponent<
  CheckCircleFullTimeChecked1Type
> = ({
  suniorUXDesigner,
  fullTime,
  daysRemaining,
  applications,
  propAlignSelf,
  propFlexDirection,
  propWidth,
  propFlex,
  propAlignSelf1,
  propFlex1,
  propFlexWrap,
  propMarginLeft,
  propAlignSelf2,
  propPadding,
}) => {
  const checkCircleFullTimeCheckedStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flexDirection: propFlexDirection,
      width: propWidth,
    };
  }, [propAlignSelf, propFlexDirection, propWidth]);

  const lineDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf1,
    };
  }, [propFlex, propAlignSelf1]);

  const job4Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      flexWrap: propFlexWrap,
      marginLeft: propMarginLeft,
      alignSelf: propAlignSelf2,
      padding: propPadding,
    };
  }, [propFlex1, propFlexWrap, propMarginLeft, propAlignSelf2, propPadding]);

  return (
    <div
      className={styles.checkCircleFullTimeChecked}
      style={checkCircleFullTimeCheckedStyle}
    >
      <div
        className={styles.checkCircleFullTimeCheckedChild}
        style={lineDivStyle}
      />
      <div className={styles.job} style={job4Style}>
        <div className={styles.suniorUxDesignerParent}>
          <div className={styles.suniorUxDesigner}>{suniorUXDesigner}</div>
          <div className={styles.fullTimeParent}>
            <div className={styles.fullTime}>{fullTime}</div>
            <div className={styles.div}>•</div>
            <div className={styles.daysRemaining}>{daysRemaining}</div>
          </div>
        </div>
        <div className={styles.jobStatus}>
          <input className={styles.checkcircle} type="radio" />
          <div className={styles.active}>Active</div>
        </div>
        <div className={styles.jobStatus1}>
          <img className={styles.usersIcon} alt="" src="/users.svg" />
          <div className={styles.applications}>{applications}</div>
        </div>
        <div className={styles.buttonPrimary}>
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

export default CheckCircleFullTimeChecked1;
