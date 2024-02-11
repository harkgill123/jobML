import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Navigation12.module.css";

export type Navigation12Type = {
  /** Style props */
  ellipseIconRowGap?: CSSProperties["rowGap"];
};

const Navigation12: FunctionComponent<Navigation12Type> = ({
  ellipseIconRowGap,
}) => {
  const navigationStyle: CSSProperties = useMemo(() => {
    return {
      rowGap: ellipseIconRowGap,
    };
  }, [ellipseIconRowGap]);

  return (
    <div className={styles.navigation}>
      <div className={styles.navigation1}>
        <div className={styles.navigation2}>
          <div className={styles.navigation3} style={navigationStyle}>
            <div className={styles.button}>
              <img
                className={styles.buttonChild}
                alt=""
                src="/ellipse-18@2x.png"
              />
            </div>
            <div className={styles.sitelogo}>
              <div className={styles.checkboxInstance} />
              <div className={styles.checkboxInstance1} />
              <div className={styles.checkboxInstance2} />
              <div className={styles.sitelogo1} />
            </div>
            <h3 className={styles.jobsync}>JobSync</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation12;
