import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Job3.module.css";

export type Job3Type = {
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

const Job3: FunctionComponent<Job3Type> = ({
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
  const jobStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
      backgroundColor: propBackgroundColor,
    };
  }, [propBackground, propBackgroundColor]);

  const info1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const employersLogoStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      height: propHeight,
      width: propWidth1,
    };
  }, [propBackgroundColor1, propHeight, propWidth1]);

  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const loactionStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propMinWidth, propFlex]);

  const priceStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth1,
    };
  }, [propFlex1, propMinWidth1]);

  return (
    <div className={styles.job} style={jobStyle}>
      <div className={styles.info} style={info1Style}>
        <div className={styles.employersLogo} style={employersLogoStyle}>
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
            <div className={styles.badge1} style={badgeStyle}>
              <div className={styles.featured1}>{featured}</div>
            </div>
          </div>
          <div className={styles.info1}>
            <div className={styles.loaction} style={loactionStyle}>
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
            <div className={styles.price1} style={priceStyle}>
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
      <div className={styles.locationWrapper}>
        <div className={styles.location}>
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

export default Job3;
