import { FunctionComponent } from "react";
import Location2 from "./Location2";
import FrameAccountDetails from "./FrameAccountDetails";
import Notifymewhenemployerssavedmypr from "./Notifymewhenemployerssavedmypr";
import styles from "./EmployersSettingsLine.module.css";

const EmployersSettingsLine: FunctionComponent = () => {
  return (
    <section className={styles.employersSettingsLine}>
      <form className={styles.employersSettings}>
        <div className={styles.tabUserPersonalGearSixPer}>
          <h2 className={styles.settings}>Settings</h2>
          <div className={styles.searchFrame}>
            <div className={styles.tab}>
              <div className={styles.jobtitlekeywordcompany} />
              <div className={styles.phoneInputField}>
                <div className={styles.tab1}>
                  <img
                    className={styles.userIcon}
                    loading="eager"
                    alt=""
                    src="/user1.svg"
                  />
                  <div className={styles.personal}>Company Info</div>
                </div>
                <div className={styles.tab2}>
                  <img
                    className={styles.usercircleIcon}
                    alt=""
                    src="/usercircle.svg"
                  />
                  <div className={styles.personal1}>Founding Info</div>
                </div>
                <div className={styles.tab3}>
                  <img
                    className={styles.globesimpleIcon}
                    alt=""
                    src="/globesimple.svg"
                  />
                  <div className={styles.personal2}>Social Media Profile</div>
                </div>
                <button className={styles.tab4}>
                  <img
                    className={styles.gearsixIcon}
                    alt=""
                    src="/gearsix1.svg"
                  />
                  <div className={styles.personal3}>Account Setting</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Location2 locationframe="Contact Information" />
        <button className={styles.button}>
          <div className={styles.primary}>Save Changes</div>
        </button>
        <div className={styles.settingsTab} />
        <FrameAccountDetails />
        <button className={styles.button1}>
          <div className={styles.primary1}>Change Password</div>
        </button>
        <div className={styles.settingsTab1} />
        <Notifymewhenemployerssavedmypr deleteYourAccount="Delete Your Company" />
      </form>
    </section>
  );
};

export default EmployersSettingsLine;
