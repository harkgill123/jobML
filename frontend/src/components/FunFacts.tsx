import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FunFacts.module.css";

export type FunFactsType = {
  jobCardFrame?: string;
  appliedJobs?: string;
  briefcaseDuotone11?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propOverflow?: CSSProperties["overflow"];
};

const FunFacts: FunctionComponent<FunFactsType> = ({
  jobCardFrame,
  appliedJobs,
  briefcaseDuotone11,
  propBackgroundColor,
  propPadding,
  propWidth,
  propOverflow,
}) => {
  const funFactsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBackgroundColor, propPadding]);

  const jobDateStatusActionFrameStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const briefcaseDuotone11Style: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className={styles.funFacts} style={funFactsStyle}>
      <div
        className={styles.jobDateStatusActionFrame}
        style={jobDateStatusActionFrameStyle}
      >
        <div className={styles.jobCardFrame}>{jobCardFrame}</div>
        <div className={styles.appliedJobs}>{appliedJobs}</div>
      </div>
      <div className={styles.icon}>
        <img
          className={styles.briefcaseDuotone11}
          loading="eager"
          alt=""
          src={briefcaseDuotone11}
          style={briefcaseDuotone11Style}
        />
      </div>
    </div>
  );
};

export default FunFacts;
