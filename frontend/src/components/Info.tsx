import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Info.module.css";

export type InfoType = {
  calendarBlank?: string;
  jobPosted?: string;
  jun2021?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propOverflow?: CSSProperties["overflow"];
};

const Info: FunctionComponent<InfoType> = ({
  calendarBlank,
  jobPosted,
  jun2021,
  propMinWidth,
  propOverflow,
}) => {
  const infoStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const calendarBlankIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className={styles.info} style={infoStyle}>
      <img
        className={styles.calendarblankIcon}
        alt=""
        src={calendarBlank}
        style={calendarBlankIconStyle}
      />
      <div className={styles.heading}>
        <div className={styles.jobPosted}>{jobPosted}</div>
        <div className={styles.jun2021}>{jun2021}</div>
      </div>
    </div>
  );
};

export default Info;
