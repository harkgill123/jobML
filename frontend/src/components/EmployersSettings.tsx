import { FunctionComponent } from "react";
import styles from "./EmployersSettings.module.css";

const EmployersSettings: FunctionComponent = () => {
  return (
    <div className={styles.employersSettings}>
      <div className={styles.settingsParent}>
        <h2 className={styles.settings}>Settings</h2>
        <div className={styles.tabWrapper}>
          <div className={styles.tab}>
            <div className={styles.tabChild} />
            <div className={styles.tabParent}>
              <button className={styles.tab1}>
                <img className={styles.userIcon} alt="" src="/user.svg" />
                <div className={styles.personal}>Company Info</div>
              </button>
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
              <div className={styles.tab4}>
                <img
                  className={styles.gearsixIcon}
                  loading="eager"
                  alt=""
                  src="/gearsix.svg"
                />
                <div className={styles.personal3}>Account Setting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logoBannerImageParent}>
        <div className={styles.logoBanner}>{`Logo & Banner Image`}</div>
        <div className={styles.profilePictureParent}>
          <div className={styles.profilePicture}>
            <div className={styles.profilePicture1}>Upload Logo</div>
            <div className={styles.bg} />
            <div className={styles.information}>
              <div className={styles.mb}>3.5 MB</div>
              <div className={styles.remove}>Remove</div>
              <div className={styles.replace}>Replace</div>
            </div>
          </div>
          <div className={styles.profilePicture2}>
            <div className={styles.bannerImage}>Banner Image</div>
            <textarea className={styles.bg1} rows={12} cols={36} />
            <div className={styles.information1}>
              <div className={styles.mb1}>4.3 MB</div>
              <div className={styles.remove1}>Remove</div>
              <div className={styles.replace1}>Replace</div>
            </div>
          </div>
        </div>
        <div className={styles.inputField} />
        <div className={styles.inputField1}>
          <div className={styles.companyName}>Company name</div>
          <input className={styles.inputField2} type="text" />
        </div>
        <div className={styles.inputField3}>
          <div className={styles.aboutUs}>About us</div>
          <div className={styles.inputField4}>
            <div className={styles.writeDownAboutYourCompanyWrapper}>
              <div className={styles.writeDownAbout}>
                Write down about your company here. Let the candidate know who
                we are...
              </div>
            </div>
            <div className={styles.frameListParent}>
              <div className={styles.frameList}>
                <div className={styles.textBolder1Wrapper}>
                  <img
                    className={styles.textBolder1Icon}
                    loading="eager"
                    alt=""
                    src="/textbolder-1.svg"
                  />
                </div>
                <div className={styles.textItalic1Wrapper}>
                  <img
                    className={styles.textItalic1Icon}
                    loading="eager"
                    alt=""
                    src="/textitalic-1.svg"
                  />
                </div>
                <div className={styles.textUnderline1Wrapper}>
                  <img
                    className={styles.textUnderline1Icon}
                    loading="eager"
                    alt=""
                    src="/textunderline-1.svg"
                  />
                </div>
                <div className={styles.textstrikethroughWrapper}>
                  <img
                    className={styles.textstrikethroughIcon}
                    loading="eager"
                    alt=""
                    src="/textstrikethrough.svg"
                  />
                </div>
              </div>
              <div className={styles.frameChild} />
              <div className={styles.linkButton}>
                <img
                  className={styles.filinkIcon}
                  loading="eager"
                  alt=""
                  src="/filink.svg"
                />
              </div>
              <div className={styles.frameItem} />
              <div className={styles.listDashes}>
                <div className={styles.buttonInstance}>
                  <img
                    className={styles.listdashesIcon}
                    loading="eager"
                    alt=""
                    src="/listdashes.svg"
                  />
                </div>
                <div className={styles.buttonInstance1}>
                  <img
                    className={styles.listnumbersIcon}
                    loading="eager"
                    alt=""
                    src="/listnumbers.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <div className={styles.primary}>Save Change</div>
      </button>
    </div>
  );
};

export default EmployersSettings;
