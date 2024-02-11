import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Job8.module.css";

export type Job8Type = {
  employersLogo?: string;
  suniorUXDesigner?: string;
  featured?: string;
  california?: string;
  bookmarkSimple?: string;
  showEmployersLogoIcon?: boolean;

  /** Style props */
  propBackground?: CSSProperties["background"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth?: CSSProperties["width"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propHeight?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Job8: FunctionComponent<Job8Type> = ({
  employersLogo,
  suniorUXDesigner,
  featured,
  california,
  bookmarkSimple,
  showEmployersLogoIcon,
  propBackground,
  propBackgroundColor,
  propWidth,
  propBackgroundColor1,
  propHeight,
  propWidth1,
  propPadding,
  propMinWidth,
  propFlex,
  propFlex1,
  propMinWidth1,
}) => {
  const job6Style: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
      backgroundColor: propBackgroundColor,
    };
  }, [propBackground, propBackgroundColor]);

  const info4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const employersLogo2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      height: propHeight,
      width: propWidth1,
    };
  }, [propBackgroundColor1, propHeight, propWidth1]);

  const badge4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const loaction2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propMinWidth, propFlex]);

  const price2Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth1,
    };
  }, [propFlex1, propMinWidth1]);

  return (
    <div className={styles.job} style={job6Style}>
      <div className={styles.info} style={info4Style}>
        <div className={styles.employersLogo} style={employersLogo2Style}>
          {showEmployersLogoIcon && (
            <img
              className={styles.employersLogoIcon}
              alt=""
              src={employersLogo}
            />
          )}
        </div>
        <div className={styles.heading}>
          <div className={styles.heading1}>
            <div className={styles.suniorUxDesigner}>{suniorUXDesigner}</div>
            <div className={styles.badge}>
              <div className={styles.featured}>Featured</div>
            </div>
            <div className={styles.badge1} style={badge4Style}>
              <div className={styles.featured1}>{featured}</div>
            </div>
          </div>
          <div className={styles.info1}>
            <div className={styles.loaction} style={loaction2Style}>
              <img
                className={styles.fimapPinIcon}
                alt=""
                src="/fimappin-1.svg"
              />
              <div className={styles.california}>{california}</div>
            </div>
            <div className={styles.price}>
              <img
                className={styles.currencyDollar1Icon}
                alt=""
                src="/currencydollar-1.svg"
              />
              <div className={styles.k80kmonth}>$50k-80k/month</div>
            </div>
            <div className={styles.price1} style={price2Style}>
              <img
                className={styles.calendarBlank11}
                alt=""
                src="/calendarblank-1-1.svg"
              />
              <div className={styles.daysRemaining}>4 Days Remaining</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoButtonFrameWrapper}>
        <div className={styles.infoButtonFrame}>
          <div className={styles.iconButton}>
            <img
              className={styles.bookmarksimpleIcon}
              loading="eager"
              alt=""
              src={bookmarkSimple}
            />
          </div>
          <button className={styles.button}>
            <div className={styles.primary}>Apply Now</div>
            <img
              className={styles.fiarrowRightIcon}
              alt=""
              src="/fiarrowright3.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job8;
