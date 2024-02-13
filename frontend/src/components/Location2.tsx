import { FunctionComponent } from "react";
import styles from "./Location2.module.css";

export type Location2Type = {
  locationframe?: string;
};

const Location2: FunctionComponent<Location2Type> = ({ locationframe }) => {
  return (
    <div className={styles.location}>
      <div className={styles.locationframe}>{locationframe}</div>
      <div className={styles.inputField}>
        <div className={styles.mapLocation}>Map Location</div>
        <div className={styles.inputField1}>
          <div className={styles.emailAddress}>Kevin Gilbert</div>
        </div>
      </div>
      <div className={styles.inputField2}>
        <div className={styles.phone}>Phone</div>
        <div className={styles.search}>
          <div className={styles.searchiconLocation}>
            <div className={styles.image1Parent}>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-11@2x.png"
              />
              <div className={styles.india}>+1</div>
              <img
                className={styles.caretdownIcon}
                alt=""
                src="/caretdown-1.svg"
              />
            </div>
            <div className={styles.inputFieldPhone} />
            <div className={styles.fisearchParent}>
              <img className={styles.fisearchIcon} alt="" src="/fisearch.svg" />
              <div className={styles.jobTittleKeyword}>Phone number..</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inputField3}>
        <div className={styles.email}>Email</div>
        <div className={styles.inputField4}>
          <img className={styles.envelopeIcon} alt="" src="/envelope.svg" />
          <input
            className={styles.jobTittleKeyword1}
            placeholder="Email address"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Location2;
