import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Category1.module.css";

export type Category1Type = {
  penNibDuotone1?: string;
  graphicsDesign?: string;
  openPosition?: string;

  /** Style props */
  propTextAlign?: CSSProperties["textAlign"];
  propTextAlign1?: CSSProperties["textAlign"];
};

const Category1: FunctionComponent<Category1Type> = ({
  penNibDuotone1,
  graphicsDesign,
  openPosition,
  propTextAlign,
  propTextAlign1,
}) => {
  const graphicsDesignStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const openPositionStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign1,
    };
  }, [propTextAlign1]);

  return (
    <div className={styles.category}>
      <div className={styles.icon}>
        <img
          className={styles.penNibDuotone1Icon}
          loading="eager"
          alt=""
          src={penNibDuotone1}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.graphicsDesign} style={graphicsDesignStyle}>
          {graphicsDesign}
        </div>
        <div className={styles.openPosition} style={openPositionStyle}>
          {openPosition}
        </div>
      </div>
    </div>
  );
};

export default Category1;
