import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filter}>
        <div className={styles.select}>
          <div className={styles.selected}>Latest</div>
          <img
            className={styles.fichevronDownIcon}
            alt=""
            src="/fichevrondown-1.svg"
          />
        </div>
        <div className={styles.select1}>
          <div className={styles.selected1}>12 per page</div>
          <img
            className={styles.fichevronDownIcon1}
            alt=""
            src="/fichevrondown-1.svg"
          />
        </div>
        <div className={styles.viewType}>
          <div className={styles.grid}>
            <img className={styles.grid1Icon} alt="" src="/grid-1.svg" />
          </div>
          <div className={styles.grid1}>
            <input className={styles.grid11} type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
