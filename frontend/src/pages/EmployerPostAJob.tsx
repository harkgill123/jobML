import { FunctionComponent } from "react";
import InputField1 from "../components/InputField1";
import InputField from "../components/InputField";
import FrameContainer from "../components/FrameContainer";
import Navigation5 from "../components/Navigation5";
import styles from "./EmployerPostAJob.module.css";

const EmployerPostAJob: FunctionComponent = () => {
  return (
    <div className={styles.employerPostAJob}>
      <h2 className={styles.postAJob}>Post a job</h2>
      <div className={styles.jobTittle}>Job Tittle</div>
      <div className={styles.inputField}>
        <input
          className={styles.emailAddress}
          placeholder="Add job tittle, role, vacancies etc"
          type="text"
        />
      </div>
      <div className={styles.tags}>Tags</div>
      <div className={styles.inputField1}>
        <input
          className={styles.emailAddress1}
          placeholder="Job keyword, tags etc..."
          type="text"
        />
      </div>
      <div className={styles.jobRole}>Job Role</div>
      <div className={styles.select}>
        <div className={styles.select1}>Select...</div>
        <img
          className={styles.fichevronDownIcon}
          alt=""
          src="/fichevrondown.svg"
        />
      </div>
      <div className={styles.salery}>Salery</div>
      <div className={styles.minSalery}>Min Salery</div>
      <div className={styles.inputField2}>
        <div className={styles.minimumSalery}>Minimum salery...</div>
        <button className={styles.usdWrapper}>
          <div className={styles.usd}>USD</div>
        </button>
      </div>
      <div className={styles.maxSalery}>Max Salery</div>
      <div className={styles.inputField3}>
        <div className={styles.maximumSalery}>Maximum salery...</div>
        <button className={styles.usdContainer}>
          <div className={styles.usd1}>USD</div>
        </button>
      </div>
      <div className={styles.saleryType}>Salery Type</div>
      <div className={styles.select2}>
        <div className={styles.select3}>Select...</div>
        <img
          className={styles.fichevronDownIcon1}
          alt=""
          src="/fichevrondown.svg"
        />
      </div>
      <div className={styles.information}>Information</div>
      <div className={styles.jobPostingForm}>
        <InputField1 education="Education" />
        <InputField1 education="Experience" propWidth="94px" />
        <InputField1 education="Job Type" propWidth="82px" />
      </div>
      <div className={styles.vacancies}>Vacancies</div>
      <div className={styles.select4}>
        <div className={styles.select5}>Select...</div>
        <img
          className={styles.fichevronDownIcon2}
          alt=""
          src="/fichevrondown.svg"
        />
      </div>
      <div className={styles.expirationDate}>Expiration Date</div>
      <div className={styles.inputField4}>
        <input
          className={styles.emailAddress2}
          placeholder="DD/MM/YYYY"
          type="text"
        />
      </div>
      <div className={styles.jobLevel}>Job Level</div>
      <div className={styles.select6}>
        <div className={styles.select7}>Select...</div>
        <img
          className={styles.fichevronDownIcon3}
          alt=""
          src="/fichevrondown.svg"
        />
      </div>
      <div
        className={styles.descriptionResponsibility}
      >{`Description & Responsibility`}</div>
      <div className={styles.description}>Description</div>
      <InputField addYourJobDescription="Add your job description..." />
      <div className={styles.responsibilities}>Responsibilities</div>
      <InputField
        addYourJobDescription="Add your job responsibilities..."
        propTop="1094px"
      />
      <button className={styles.button}>
        <div className={styles.primary}>Post Job</div>
        <img
          className={styles.fiarrowRightIcon}
          alt=""
          src="/fiarrowright1.svg"
        />
      </button>
      <div className={styles.sidebar}>
        <div className={styles.links}>
          <div className={styles.employersDashboard}>EMPLOYERS DASHBOARD</div>
          <FrameContainer />
        </div>
        <div className={styles.dashboardNavItem}>
          <div className={styles.logOut} />
          <img className={styles.signoutIcon} alt="" src="/signout.svg" />
        </div>
      </div>
      <Navigation5
        jobTitleKeywordPlaceholde="Skills, keyword"
        navigationAlignSelf="unset"
        navigationPosition="absolute"
        navigationTop="0px"
        navigationLeft="0px"
        navigationWidth="100%"
        funFactsFrameWidth="112px"
        appliedjobsIconPadding="0px var(--padding-12xs) 0px 0px"
      />
    </div>
  );
};

export default EmployerPostAJob;
