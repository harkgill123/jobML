import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FeaturedBadgeFrame.module.css";

export type FeaturedBadgeFrameType = {
  networkingEngineer?: string;
  featured?: string;
  washington?: string;
  june122021?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const FeaturedBadgeFrame: FunctionComponent<FeaturedBadgeFrameType> = ({
  networkingEngineer,
  featured,
  washington,
  june122021,
  propFlex,
  propPadding,
  propPadding1,
}) => {
  const job1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  const badge2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.featuredBadgeFrame}>
      <div className={styles.job} style={job1Style}>
        <div className={styles.heading}>
          <div className={styles.googleInc}>
            <div className={styles.heading1}>
              <div className={styles.networkingEngineer}>
                {networkingEngineer}
              </div>
              <div className={styles.badge} style={badge2Style}>
                <div className={styles.featured}>{featured}</div>
              </div>
            </div>
            <div className={styles.googleInc1}>Google Inc.</div>
            <div className={styles.info}>
              <div className={styles.loaction}>
                <img
                  className={styles.fimapPinIcon}
                  loading="eager"
                  alt=""
                  src="/fimappin1.svg"
                />
                <div className={styles.washington}>{washington}</div>
              </div>
              <div className={styles.price}>
                <img
                  className={styles.currencyDollar1Icon}
                  loading="eager"
                  alt=""
                  src="/currencydollar-11.svg"
                />
                <div className={styles.k80kmonth}>$50k-80k/month</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.june122021}>{june122021}</div>
        <div className={styles.checkboxGroup}>
          <img
            className={styles.checkIcon}
            loading="eager"
            alt=""
            src="/check.svg"
          />
          <div className={styles.active}>Active</div>
        </div>
        <button className={styles.button}>
          <div className={styles.primary}>View details</div>
        </button>
      </div>
      <div className={styles.lineSeparator} />
    </div>
  );
};

export default FeaturedBadgeFrame;
