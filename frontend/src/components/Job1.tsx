import { FunctionComponent } from "react";
import styles from "./Job1.module.css";

export type Job1Type = {
  seniorUXDesigner?: string;
};

const Job1: FunctionComponent<Job1Type> = ({ seniorUXDesigner }) => {
  return (
    <div className={styles.job}>
      <div className={styles.info}>
        <div className={styles.employersLogo}>
          <img
            className={styles.employersLogoIcon}
            alt=""
            src="/employers-logo-4.svg"
          />
        </div>
        <div className={styles.heading}>
          <div className={styles.heading1}>
            <div className={styles.seniorUxDesigner}>{seniorUXDesigner}</div>
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
              <div className={styles.unitedKingdomOf}>Natore, Bangladesh</div>
            </div>
            <div className={styles.price}>
              <img
                className={styles.currencyDollar1Icon}
                alt=""
                src="/currencydollar-1-3.svg"
              />
              <div className={styles.k35k}>$30K-$35K</div>
            </div>
            <div className={styles.price1}>
              <img
                className={styles.calendarBlank11}
                alt=""
                src="/calendarblank-1-1-3.svg"
              />
              <div className={styles.daysRemaining}>4 Days Remaining</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.framewithbuttons}>
        <div className={styles.iconButton}>
          <img
            className={styles.bookmarksimpleIcon}
            loading="eager"
            alt=""
            src="/bookmarksimple-1.svg"
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

export default Job1;
