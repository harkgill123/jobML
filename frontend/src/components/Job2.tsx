import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Job2.module.css";

export type Job2Type = {
  employersLogo?: string;
  seniorUXDesigner?: string;
  featured?: string;
  unitedKingdomOfGreatBrita?: string;
  bookmarkSimple?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackground?: CSSProperties["background"];
  propOverflow?: CSSProperties["overflow"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex2?: CSSProperties["flex"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Job2: FunctionComponent<Job2Type> = ({
  employersLogo,
  seniorUXDesigner,
  featured,
  unitedKingdomOfGreatBrita,
  bookmarkSimple,
  propWidth,
  propBackgroundColor,
  propBackground,
  propOverflow,
  propFlex,
  propPadding,
  propAlignSelf,
  propFlex1,
  propMinWidth,
  propFlex2,
  propMinWidth1,
}) => {
  const info2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const employersLogo1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      background: propBackground,
    };
  }, [propBackgroundColor, propBackground]);

  const employersLogoIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const headingStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const badge1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const info3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const loaction1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth,
    };
  }, [propFlex1, propMinWidth]);

  const price1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex2,
      minWidth: propMinWidth1,
    };
  }, [propFlex2, propMinWidth1]);

  return (
    <div className={styles.job}>
      <div className={styles.info} style={info2Style}>
        <div className={styles.employersLogo} style={employersLogo1Style}>
          <img
            className={styles.employersLogoIcon}
            alt=""
            src={employersLogo}
            style={employersLogoIconStyle}
          />
        </div>
        <div className={styles.heading} style={headingStyle}>
          <div className={styles.heading1}>
            <div className={styles.seniorUxDesigner}>{seniorUXDesigner}</div>
            <div className={styles.badge} style={badge1Style}>
              <div className={styles.featured}>{featured}</div>
            </div>
          </div>
          <div className={styles.info1} style={info3Style}>
            <div className={styles.loaction} style={loaction1Style}>
              <img
                className={styles.fimapPinIcon}
                alt=""
                src="/fimappin-4.svg"
              />
              <div className={styles.unitedKingdomOf}>
                {unitedKingdomOfGreatBrita}
              </div>
            </div>
            <div className={styles.price}>
              <img
                className={styles.currencyDollar1Icon}
                alt=""
                src="/currencydollar-1-3.svg"
              />
              <div className={styles.k35k}>$30K-$35K</div>
            </div>
            <div className={styles.price1} style={price1Style}>
              <img
                className={styles.calendarBlank11}
                alt=""
                src="/calendarblank-1-1-3.svg"
              />
              <img className={styles.xcircleIcon} alt="" src="/xcircle.svg" />
              <div className={styles.daysRemaining}>4 Days Remaining</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pagination}>
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
  );
};

export default Job2;
