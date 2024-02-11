import { FunctionComponent, useState } from "react";
import Location2 from "./Location2";
import FrameAccountDetails from "./FrameAccountDetails";
import Notifymewhenemployerssavedmypr from "./Notifymewhenemployerssavedmypr";
import styles from "./CandidateSettings1.module.css";

const CandidateSettings1: FunctionComponent = () => {
  const [checkIconChecked, setCheckIconChecked] = useState(true);
  return (
    <form className={styles.candidateSettings}>
      <div className={styles.settingsParent}>
        <h2 className={styles.settings}>My Profile</h2>
        <div className={styles.candidatesettingsbuttonParent}>
          <div className={styles.candidatesettingsbutton} />
          <div className={styles.tabParent}>
            <div className={styles.tab}>
              <img
                className={styles.userIcon}
                loading="eager"
                alt=""
                src="/user1.svg"
              />
              <div className={styles.personal}>Personal</div>
            </div>
            <div className={styles.tab1}>
              <img
                className={styles.usercircleIcon}
                alt=""
                src="/usercircle.svg"
              />
              <div className={styles.personal1}>Profile</div>
            </div>
            <div className={styles.tab2}>
              <img
                className={styles.globesimpleIcon}
                alt=""
                src="/globesimple.svg"
              />
              <div className={styles.personal2}>Social Links</div>
            </div>
            <button className={styles.tab3}>
              <img className={styles.gearsixIcon} alt="" src="/gearsix1.svg" />
              <div className={styles.personal3}>Account Setting</div>
            </button>
          </div>
        </div>
      </div>
      <Location2 locationframe="Contact Info" />
      <button className={styles.button}>
        <div className={styles.primary}>Save Changes</div>
      </button>
      <div className={styles.candidateSettingsChild} />
      <div className={styles.notificationSettings}>
        <div className={styles.checkNotifyMe}>Notification</div>
        <div className={styles.checkNotifyMeExpired}>
          <div className={styles.frameNotifications}>
            <div className={styles.frameCheckNotify}>
              <input
                className={styles.check}
                checked={checkIconChecked}
                type="checkbox"
                onChange={(event) => setCheckIconChecked(event.target.checked)}
              />
              <div className={styles.notifyMeWhen}>
                Notify me when employers shortlisted me
              </div>
            </div>
            <div className={styles.buttonXCircle}>
              <input className={styles.check1} type="checkbox" />
              <div className={styles.notifyMeWhen1}>
                Notify me when employers saved my profile
              </div>
            </div>
          </div>
          <div className={styles.frameNotifications1}>
            <div className={styles.checkParent}>
              <input className={styles.check2} type="checkbox" />
              <div className={styles.notifyMeWhen2}>
                Notify me when my applied jobs are expire
              </div>
            </div>
            <div className={styles.checkGroup}>
              <input className={styles.check3} type="checkbox" />
              <div className={styles.notifyMeWhen3}>
                Notify me when employers rejected me
              </div>
            </div>
          </div>
          <div className={styles.checkNotifyMeExpiredInner}>
            <div className={styles.checkContainer}>
              <input className={styles.check4} type="checkbox" />
              <div className={styles.notifyMeWhen4}>
                Notify me when i have up to 5 job alerts
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.candidateSettingsItem} />
      <div className={styles.textParent}>
        <div className={styles.text}>Job Alerts</div>
        <div className={styles.inputFieldParent}>
          <div className={styles.inputField}>
            <div className={styles.role}>Role</div>
            <div className={styles.inputField1}>
              <div className={styles.jobTittleKeyword}>Your job roles</div>
              <img
                className={styles.briefcaseIcon}
                alt=""
                src="/briefcase2.svg"
              />
            </div>
          </div>
          <div className={styles.inputField2}>
            <div className={styles.location}>Location</div>
            <div className={styles.inputField3}>
              <div className={styles.jobTittleKeyword1}>
                City, state, country name
              </div>
              <img
                className={styles.mappinlineIcon}
                alt=""
                src="/mappinline.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <button className={styles.button1}>
        <div className={styles.primary1}>Save Changes</div>
      </button>
      <div className={styles.candidateSettingsInner} />
      <div className={styles.frameParent}>
        <div className={styles.textGroup}>
          <div className={styles.text1}>Profile Privacy</div>
          <div className={styles.select}>
            <div className={styles.switch}>
              <div className={styles.circle} />
            </div>
            <div className={styles.yes}>YES</div>
            <div className={styles.selectChild} />
            <div className={styles.yourProfileIs}>
              Your profile is public now
            </div>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text2}>Resume Privacy</div>
          <div className={styles.select1}>
            <div className={styles.switch1}>
              <div className={styles.circle1} />
            </div>
            <div className={styles.no}>NO</div>
            <div className={styles.selectItem} />
            <div className={styles.yourResumeIs}>
              Your resume is private now
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineDiv} />
      <FrameAccountDetails />
      <button className={styles.button2}>
        <div className={styles.primary2}>Save Changes</div>
      </button>
      <div className={styles.candidateSettingsChild1} />
      <Notifymewhenemployerssavedmypr deleteYourAccount="Delete Your Account" />
    </form>
  );
};

export default CandidateSettings1;
