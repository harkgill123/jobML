import { FunctionComponent } from "react";
import styles from "./Category2.module.css";

export type Category2Type = {
  megaphoneSimpleDuotone1?: string;
  digitalMarketing?: string;
  openPosition?: string;
};

const Category2: FunctionComponent<Category2Type> = ({
  megaphoneSimpleDuotone1,
  digitalMarketing,
  openPosition,
}) => {
  return (
    <div className={styles.category}>
      <button className={styles.icon}>
        <img
          className={styles.megaphoneSimpleDuotone1Icon}
          alt=""
          src={megaphoneSimpleDuotone1}
        />
      </button>
      <div className={styles.info}>
        <div className={styles.digitalMarketing}>{digitalMarketing}</div>
        <div className={styles.openPosition}>{openPosition}</div>
      </div>
    </div>
  );
};

export default Category2;
