import { FunctionComponent, useMemo, CSSProperties } from "react";
import styles from "./CVResume.module.css";

export type CVResumeType = {
  professionalResume?: string;
  mB?: string;
  showCVResume?: boolean;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propFlex1?: CSSProperties["flex"];
  propFlex2?: CSSProperties["flex"];
};

const CVResume: FunctionComponent<CVResumeType> = ({
  professionalResume = '',
  mB = '',
  showCVResume = false,
  propFlex,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
  propFlex1,
  propFlex2,
}) => {
  const cVResumeStyle: CSSProperties = useMemo(() => ({
      flex: propFlex,
      alignSelf: propAlignSelf,
      width: propWidth,
  }), [propFlex, propAlignSelf, propWidth]);

  const informationStyle: CSSProperties = useMemo(() => ({
      alignSelf: propAlignSelf1,
  }), [propAlignSelf1]);

  const professionalResumeStyle: CSSProperties = useMemo(() => ({
      flex: propFlex1,
  }), [propFlex1]);

  const mBStyle: CSSProperties = useMemo(() => ({
      flex: propFlex2,
  }), [propFlex2]);

  if (!showCVResume) return null;

  return (
    <div className={styles.cvResume} style={cVResumeStyle}>
      <img
        className={styles.filetextIcon}
        loading="eager"
        alt=""
        src="/filetext.svg"
      />
      <div className={styles.information} style={informationStyle}>
        <div
          className={styles.professionalResume}
          style={professionalResumeStyle}
        >
          {professionalResume}
        </div>
        <div className={styles.mb} style={mBStyle}>
          {mB}
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.dot} />
        <div className={styles.dot1} />
        <div className={styles.dot2} />
      </div>
    </div>
  );
};

export default CVResume;
