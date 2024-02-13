import { FunctionComponent } from "react";
import CVResume from "./CVResume";
import styles from "./CandidateSettings.module.css";

const CandidateSettings: FunctionComponent = () => {
  return (
    <div className={styles.candidateSettings}>
      <div className={styles.settingParent}>
        <h2 className={styles.setting}>My Profile</h2>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.tabParent}>
            <button className={styles.tab}>
              <img className={styles.userIcon} alt="" src="/user.svg" />
              <div className={styles.personal}>Personal</div>
            </button>
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
            <div className={styles.tab3}>
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
      <div className={styles.basicInformationParent}>
        <div className={styles.basicInformation}>Basic Information</div>
        <div className={styles.profilePictureParent}>
          <div className={styles.profilePicture}>
            <div className={styles.profilePicture1}>Profile Picture</div>
            <div className={styles.uploadProfilePhoto}>
              <div className={styles.bg} />
              <div className={styles.content}>
                <img
                  className={styles.fiuploadCloudIcon}
                  alt=""
                  src="/fiuploadcloud.svg"
                />
                <div className={styles.info}>
                  <div className={styles.browsePhotoOrContainer}>
                    <span>
                      <span className={styles.browsePhoto}>Browse photo</span>
                    </span>
                    <span>
                      <span>{` `}</span>
                      <span className={styles.orDropHere}>or drop here</span>
                    </span>
                  </div>
                  <div className={styles.aPhotoLarger}>
                    A photo larger than 400 pixels work best. Max photo size 5
                    MB.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputFieldParent}>
            <div className={styles.inputField}>
              <div className={styles.row}>
                <div className={styles.inputField1}>
                  <div className={styles.fullName}>Full name</div>
                  <input className={styles.inputField2} type="text" />
                </div>
                <div className={styles.inputField3}>
                  <div className={styles.tittleheadline}>Tittle/headline</div>
                  <input className={styles.inputField4} type="text" />
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.inputField5}>
                  <div className={styles.experience}>Experience</div>
                  <div className={styles.select}>
                    <div className={styles.select1}>Select...</div>
                    <img
                      className={styles.fichevronDownIcon}
                      alt=""
                      src="/fichevrondown.svg"
                    />
                  </div>
                </div>
                <div className={styles.inputField6}>
                  <div className={styles.educations}>Education</div>
                  <div className={styles.select2}>
                    <div className={styles.select3}>Select...</div>
                    <img
                      className={styles.fichevronDownIcon1}
                      alt=""
                      src="/fichevrondown.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.inputField7}>
                <div className={styles.personalWebsite}>Personal Website</div>
                <div className={styles.inputField8}>
                  <img
                    className={styles.linksimpleIcon}
                    alt=""
                    src="/linksimple.svg"
                  />
                  <input
                    className={styles.jobTittleKeyword}
                    placeholder="Website url..."
                    type="text"
                  />
                </div>
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.primary}>Save Changes</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.yourCvresume}>
        <div className={styles.yourCvresume1}>Your Cv/Resume</div>
        <div className={styles.row2}>
          <CVResume
            professionalResume="Professional Resume"
            mB="3.5 MB"
            showCVResume
          />
          <div className={styles.cvResume}>
            <img className={styles.filetextIcon} alt="" src="/filetext.svg" />
            <div className={styles.information}>
              <div className={styles.professionalResume}>Product Designer</div>
              <div className={styles.mb}>4.7 MB</div>
            </div>
            <div className={styles.button1}>
              <div className={styles.dot} />
              <div className={styles.dot1} />
              <div className={styles.dot2} />
            </div>
            <div className={styles.dropdown}>
              <div className={styles.menuItem}>
                <div className={styles.editResume}>Edit Resume</div>
                <img className={styles.editIcon} alt="" src="/edit.svg" />
              </div>
              <div className={styles.menuItem1}>
                <div className={styles.delete}>Delete</div>
                <img className={styles.trashIcon} alt="" src="/trash.svg" />
              </div>
            </div>
          </div>
          <CVResume
            professionalResume="Visual Designer"
            mB="1.3 MB"
            showCVResume={false}
            propFlex="unset"
            propAlignSelf="stretch"
            propWidth="312px"
            propAlignSelf1="stretch"
            propFlex1="1"
            propFlex2="1"
          />
        </div>
        <div className={styles.cvResume1}>
          <img className={styles.pluscircleIcon} alt="" src="/pluscircle.svg" />
          <div className={styles.information1}>
            <div className={styles.addCvresume}>Add Cv/Resume</div>
            <input
              className={styles.browseFileOr}
              placeholder="Browse file or drop here. only pdf"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSettings;
