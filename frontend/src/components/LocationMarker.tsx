import { FunctionComponent } from "react";
import styles from "./LocationMarker.module.css";

const LocationMarker: FunctionComponent = () => {
  return (
    <div className={styles.locationMarker}>
      <div className={styles.locationMarkerChild} />
      <div className={styles.job}>
        <div className={styles.info}>
          <div className={styles.employersLogo}>
            <img
              className={styles.employersLogoIcon}
              alt=""
              src="/employers-logo2.svg"
            />
          </div>
          <div className={styles.heading}>
            <div className={styles.heading1}>
              <div className={styles.seniorUxDesigner}>
                Techical Support Specialist
              </div>
              <div className={styles.badge}>
                <div className={styles.featured}>Full Time</div>
              </div>
            </div>
            <div className={styles.info1}>
              <div className={styles.loaction}>
                <img
                  className={styles.fimapPinIcon}
                  alt=""
                  src="/fimappin-4.svg"
                />
                <div className={styles.unitedKingdomOf}>Idaho, USA</div>
              </div>
              <div className={styles.price}>
                <img
                  className={styles.currencyDollar1Icon}
                  alt=""
                  src="/currencydollar-1-3.svg"
                />
                <div className={styles.k35k}>$15K-$20K</div>
              </div>
              <div className={styles.price1}>
                <img
                  className={styles.calendarBlank11}
                  alt=""
                  src="/calendarblank-1-1-3.svg"
                />
                <img className={styles.xcircleIcon} alt="" src="/xcircle.svg" />
                <div className={styles.daysRemaining}>Job Expire</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconButtonParent}>
          <div className={styles.iconButton}>
            <img
              className={styles.bookmarksimpleIcon}
              alt=""
              src="/bookmarksimple-12.svg"
            />
          </div>
          <button className={styles.button}>
            <div className={styles.primary}>Deadline expired</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationMarker;
