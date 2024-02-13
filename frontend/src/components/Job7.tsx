import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Job7.module.css";

export type Job7Type = {
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
  propWidth1?: CSSProperties["width"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Job7: FunctionComponent<Job7Type> = ({
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
  propWidth1,
  propFlex1,
  propMinWidth,
}) => {
  const info5Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const employersLogo3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      background: propBackground,
    };
  }, [propBackgroundColor, propBackground]);

  const employersLogoIcon1Style: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const heading2Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const badge5Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const info6Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const loaction3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const price3Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth,
    };
  }, [propFlex1, propMinWidth]);

  return (
    <div className={styles.job}>
      <div className={styles.info} style={info5Style}>
        <div className={styles.employersLogo} style={employersLogo3Style}>
          <img
            className={styles.employersLogoIcon}
            alt=""
            src={employersLogo}
            style={employersLogoIcon1Style}
          />
        </div>
        <div className={styles.heading} style={heading2Style}>
          <div className={styles.heading1}>
            <div className={styles.seniorUxDesigner}>{seniorUXDesigner}</div>
            <div className={styles.badge} style={badge5Style}>
              <div className={styles.featured}>{featured}</div>
            </div>
          </div>
          <div className={styles.info1} style={info6Style}>
            <div className={styles.loaction} style={loaction3Style}>
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
            <div className={styles.price1} style={price3Style}>
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
      <div className={styles.iconButtonParent}>
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

export default Job7;
