import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Navigation12.module.css";

export type Navigation12Type = {
  /** Style props */
  ellipseIconRowGap?: CSSProperties["rowGap"];
};

const Navigation12: FunctionComponent = () => {

  return (
      <div className={styles.navigation1}>
      <div className={styles.categoryIconGroup}>
          <div className={styles.sitelogo}>
            <div className={styles.digitalMarketing} />
            <div className={styles.digitalMarketing1} />
            <div className={styles.digitalMarketing2} />
            <div className={styles.sitelogo1} />
          </div>
          <h3 className={styles.jobsync}>JobSync</h3>
      </div>
      <div className={styles.gap}></div>
      </div>

  );
};

export default Navigation12;
