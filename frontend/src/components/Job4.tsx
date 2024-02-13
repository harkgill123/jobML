import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Job4.module.css";

export type Job4Type = {
  suniorUXDesigner?: string;
  featured?: string;
  newYork?: string;
  june122021?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding1?: CSSProperties["padding"];
};

const Job4: FunctionComponent<Job4Type> = ({
  suniorUXDesigner,
  featured,
  newYork,
  june122021,
  propWidth,
  propPadding,
  propPosition,
  propTop,
  propLeft,
  propMinWidth,
  propPadding1,
}) => {
  const job2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propWidth, propPadding, propPosition, propTop, propLeft]);

  const heading1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const badge3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.job} style={job2Style}>
      <div className={styles.heading} style={heading1Style}>
        <div className={styles.headingParent}>
          <div className={styles.heading1}>
            <div className={styles.suniorUxDesigner}>{suniorUXDesigner}</div>
            <div className={styles.badge} style={badge3Style}>
              <div className={styles.featured}>{featured}</div>
            </div>
          </div>
          <div className={styles.googleInc}>Google Inc.</div>
          <div className={styles.info}>
            <div className={styles.loaction}>
              <img
                className={styles.fimapPinIcon}
                alt=""
                src="/fimappin1.svg"
              />
              <div className={styles.newYork}>{newYork}</div>
            </div>
            <div className={styles.price}>
              <img
                className={styles.currencyDollar1Icon}
                alt=""
                src="/currencydollar-11.svg"
              />
              <div className={styles.k80kmonth}>$50k-80k/month</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.june122021}>{june122021}</div>
      <div className={styles.statusIndicator}>
        <img className={styles.checkIcon} alt="" src="/check.svg" />
        <div className={styles.active}>Active</div>
      </div>
      <button className={styles.button}>
        <div className={styles.primary}>View details</div>
      </button>
    </div>
  );
};

export default Job4;
