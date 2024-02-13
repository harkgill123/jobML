import { FunctionComponent } from "react";
import styles from "./Candidate.module.css";

export type CandidateType = {
  jacobJones?: string;
  uXDesigner?: string;
  mapPin?: string;
  stack?: string;
};

const Candidate: FunctionComponent<CandidateType> = ({
  jacobJones,
  uXDesigner,
  mapPin,
  stack,
}) => {
  return (
    <div className={styles.candidate}>
      <div className={styles.image} />
      <div className={styles.suniorUxDesignerParent}>
        <div className={styles.suniorUxDesigner}>Senior UX Designer</div>
        <div className={styles.dateParent}>
          <div className={styles.date}>Dec 7, 2019 23:26</div>
          <div className={styles.div}>•</div>
          <div className={styles.fullTime}>Internship</div>
        </div>
      </div>
      <div className={styles.logoutButton} />
      <div className={styles.frameParent}>
        <div className={styles.jacobJonesParent}>
          <div className={styles.jacobJones}>{jacobJones}</div>
          <div className={styles.uxDesigner}>{uXDesigner}</div>
        </div>
        <div className={styles.mappinParent}>
          <img className={styles.mappinIcon} alt="" src={mapPin} />
          <div className={styles.khulnaBangladesh}>Khulna, Bangladesh</div>
        </div>
        <div className={styles.stackParent}>
          <img className={styles.stackIcon} alt="" src={stack} />
          <div className={styles.years}>{`23 Years `}</div>
        </div>
        <div className={styles.iconButtonParent}>
          <div className={styles.iconButton}>
            <img
              className={styles.bookmarksimpleIcon}
              alt=""
              src="/bookmarksimple-13.svg"
            />
          </div>
          <button className={styles.button}>
            <div className={styles.primary}>View Profile</div>
            <img
              className={styles.fiarrowRightIcon}
              alt=""
              src="/fiarrowright3.svg"
            />
          </button>
          <div className={styles.iconButton1}>
            <img
              className={styles.dotsthreeverticalIcon}
              alt=""
              src="/dotsthreevertical.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
