import { FunctionComponent } from "react";
import styles from "./AdbanceFilter.module.css";

const AdbanceFilter: FunctionComponent = () => {
  return (
    <div className={styles.adbanceFilter}>
      <div className={styles.inputField}>
        <img className={styles.fisearchIcon} alt="" src="/fisearch.svg" />
        <input
          className={styles.jobTittleKeyword}
          placeholder="Job tittle, Keyword..."
          type="text"
        />
      </div>
      <div className={styles.devider} />
      <div className={styles.inputField1}>
        <img className={styles.fimapPinIcon} alt="" src="/fimappin.svg" />
        <input
          className={styles.jobTittleKeyword1}
          placeholder="Location"
          type="text"
        />
      </div>
      <div className={styles.devider1} />
      <div className={styles.pagination}>
        <div className={styles.inputField2}>
          <div className={styles.pages}>
            <img className={styles.filayersIcon} alt="" src="/filayers.svg" />
            <div className={styles.selectCategory}>Select Category</div>
          </div>
          <img
            className={styles.fichevronDownIcon}
            alt=""
            src="/fichevrondown1.svg"
          />
        </div>
        <div className={styles.devider2} />
      </div>
      <button className={styles.button}>
        <div className={styles.primary}>Find Job</div>
      </button>
    </div>
  );
};

export default AdbanceFilter;
