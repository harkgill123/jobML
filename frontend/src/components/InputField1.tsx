import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InputField1.module.css";

export type InputField1Type = {
  education?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const InputField1: FunctionComponent<InputField1Type> = ({
  education,
  propWidth,
}) => {
  const educationStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.inputField}>
      <div className={styles.education} style={educationStyle}>
        {education}
      </div>
      <div className={styles.select}>
        <div className={styles.select1}>Select...</div>
        <img
          className={styles.fichevronDownIcon}
          alt=""
          src="/fichevrondown.svg"
        />
      </div>
    </div>
  );
};

export default InputField1;
