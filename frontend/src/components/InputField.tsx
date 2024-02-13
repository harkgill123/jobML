import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InputField.module.css";

export type InputFieldType = {
  addYourJobDescription?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const InputField: FunctionComponent<InputFieldType> = ({
  addYourJobDescription,
  propTop,
}) => {
  const inputField1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.inputField} style={inputField1Style}>
      <div className={styles.addYourJobDescriptionWrapper}>
        <div className={styles.addYourJob}>{addYourJobDescription}</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.labelEducationParent}>
          <div className={styles.labelEducation}>
            <img
              className={styles.textBolder1Icon}
              loading="eager"
              alt=""
              src="/textbolder-1.svg"
            />
          </div>
          <div className={styles.frameExperience}>
            <img
              className={styles.textItalic1Icon}
              loading="eager"
              alt=""
              src="/textitalic-1.svg"
            />
          </div>
          <div className={styles.salaryRange}>
            <img
              className={styles.textUnderline1Icon}
              loading="eager"
              alt=""
              src="/textunderline-1.svg"
            />
          </div>
          <div className={styles.maxSaleryInput}>
            <img
              className={styles.textstrikethroughIcon}
              loading="eager"
              alt=""
              src="/textstrikethrough.svg"
            />
          </div>
        </div>
        <div className={styles.vacanciesInputWrapper}>
          <div className={styles.vacanciesInput} />
        </div>
        <div className={styles.jobLevelSelectWrapper}>
          <div className={styles.jobLevelSelect}>
            <img
              className={styles.filinkIcon}
              loading="eager"
              alt=""
              src="/filink.svg"
            />
          </div>
        </div>
        <div className={styles.frameJobDetailsWrapper}>
          <div className={styles.frameJobDetails} />
        </div>
        <div className={styles.listSeparator}>
          <img className={styles.listdashesIcon} alt="" src="/listdashes.svg" />
        </div>
        <div className={styles.listBulletNumbers}>
          <img
            className={styles.listnumbersIcon}
            alt=""
            src="/listnumbers.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
