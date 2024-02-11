import { FunctionComponent } from "react";
import Job5 from "./Job5";
import CheckCircleFullTimeChecked1 from "./CheckCircleFullTimeChecked1";
import Job6 from "./Job6";
import CheckCircleFullTimeChecked from "./CheckCircleFullTimeChecked";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.jobStatusPanelParent}>
      <div className={styles.jobStatusPanel}>
        <div className={styles.myJobs589Container}>
          <span className={styles.myJobs}>{`My Jobs `}</span>
          <span className={styles.span}>(589)</span>
        </div>
        <div className={styles.applicationsActionNode}>
          <div className={styles.jobStatus}>Job status</div>
          <div className={styles.select}>
            <div className={styles.select1}>All Jobs</div>
            <img
              className={styles.fichevronDownIcon}
              alt=""
              src="/fichevrondown2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.jobsContainer}>
        <div className={styles.nav}>
          <div className={styles.jobs}>JOBS</div>
          <div className={styles.status}>STATUS</div>
          <div className={styles.applications}>APPLICATIONS</div>
          <div className={styles.actions}>ACTIONS</div>
        </div>
        <Job5
          suniorUXDesigner="UI/UX Designer"
          fullTime="Full Time"
          daysRemaining="27 days remaing"
          checkCircleChecked
          applications="798 Applications"
          propWidth="984px"
          propFlex="unset"
          propFlexWrap="unset"
          propMinWidth="unset"
          propBorderColor="#ffffff"
          propAccentColor="#ffffff"
        />
        <CheckCircleFullTimeChecked1
          suniorUXDesigner="Senior UX Designer"
          fullTime="Internship"
          daysRemaining="8 days remaing"
          applications="185 Applications"
          propAlignSelf="unset"
          propFlexDirection="column"
          propWidth="984px"
          propFlex="unset"
          propAlignSelf1="stretch"
          propFlex1="unset"
          propFlexWrap="unset"
          propMarginLeft="unset"
          propAlignSelf2="stretch"
          propPadding="16px 20px"
        />
        <CheckCircleFullTimeChecked1
          suniorUXDesigner="Junior Graphic Designer"
          fullTime="Full Time"
          daysRemaining="24 days remaing"
          applications="583 Applications"
          propAlignSelf="unset"
          propFlexDirection="column"
          propWidth="984px"
          propFlex="unset"
          propAlignSelf1="stretch"
          propFlex1="unset"
          propFlexWrap="unset"
          propMarginLeft="unset"
          propAlignSelf2="stretch"
          propPadding="16px 20px"
        />
        <div className={styles.jobFrame}>
          <Job6
            suniorUXDesigner="Front End Developer"
            fullTime="Full Time"
            daysRemaining="Dec 7, 2019"
            applications="740 Applications"
          />
          <CheckCircleFullTimeChecked
            suniorUXDesigner="Front End Developer"
            daysRemaining="Dec 7, 2019"
            expire="Expire"
            applications="740 Applications"
            propWidth="unset"
            propFlex="1"
            propMarginLeft="-984px"
            propFlexWrap="wrap"
          />
        </div>
        <CheckCircleFullTimeChecked
          suniorUXDesigner="Front End Developer"
          daysRemaining="Dec 7, 2019"
          expire="Expire"
          applications="740 Applications"
          propWidth="984px"
          propFlex="unset"
          propMarginLeft="unset"
          propFlexWrap="unset"
        />
        <div className={styles.jobParent}>
          <Job6
            suniorUXDesigner="Interaction Designer"
            fullTime="Contract Base"
            daysRemaining="Feb 2, 2019"
            applications="426 Applications"
          />
          <div className={styles.lineSeparator} />
        </div>
        <CheckCircleFullTimeChecked1
          suniorUXDesigner="Software Engineer"
          fullTime="Temporary"
          daysRemaining="9 days remaing"
          applications="922 Applications"
          propAlignSelf="unset"
          propFlexDirection="column"
          propWidth="984px"
          propFlex="unset"
          propAlignSelf1="stretch"
          propFlex1="unset"
          propFlexWrap="unset"
          propMarginLeft="unset"
          propAlignSelf2="stretch"
          propPadding="16px 20px"
        />
        <CheckCircleFullTimeChecked1
          suniorUXDesigner="Product Designer"
          fullTime="Full Time"
          daysRemaining="7 days remaing"
          applications="994 Applications"
          propAlignSelf="unset"
          propFlexDirection="column"
          propWidth="984px"
          propFlex="unset"
          propAlignSelf1="stretch"
          propFlex1="unset"
          propFlexWrap="unset"
          propMarginLeft="unset"
          propAlignSelf2="stretch"
          propPadding="16px 20px"
        />
        <CheckCircleFullTimeChecked
          suniorUXDesigner="Project Manager"
          daysRemaining="Dec 4, 2019"
          expire="Expire"
          applications="196 Applications"
          propWidth="984px"
          propFlex="unset"
          propMarginLeft="unset"
          propFlexWrap="unset"
        />
        <CheckCircleFullTimeChecked1
          suniorUXDesigner="Marketing Manager"
          fullTime="Full Time"
          daysRemaining="4 days remaing"
          applications="492 Applications"
          propAlignSelf="unset"
          propFlexDirection="column"
          propWidth="984px"
          propFlex="unset"
          propAlignSelf1="stretch"
          propFlex1="unset"
          propFlexWrap="unset"
          propMarginLeft="unset"
          propAlignSelf2="stretch"
          propPadding="var(--padding-xl) var(--padding-xl) 0px"
        />
      </div>
      <div className={styles.pagination}>
        <div className={styles.iconButton}>
          <img
            className={styles.fiarrowRightIcon}
            loading="eager"
            alt=""
            src="/fiarrowright-12.svg"
          />
        </div>
        <div className={styles.pages}>
          <div className={styles.pagination1}>
            <div className={styles.paginationData}>01</div>
          </div>
          <div className={styles.pagination2}>
            <div className={styles.div}>02</div>
          </div>
          <div className={styles.pagination3}>
            <div className={styles.div1}>03</div>
          </div>
          <div className={styles.pagination4}>
            <div className={styles.div2}>04</div>
          </div>
          <div className={styles.pagination5}>
            <div className={styles.div3}>05</div>
          </div>
        </div>
        <button className={styles.iconButton1}>
          <img
            className={styles.fiarrowRightIcon1}
            alt=""
            src="/fiarrowright3.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default FrameComponent1;
