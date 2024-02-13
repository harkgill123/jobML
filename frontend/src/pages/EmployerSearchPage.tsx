import { FunctionComponent } from "react";
import Navigation13 from "../components/Navigation13";
import AdbanceFilter from "../components/AdbanceFilter";
import Filter from "../components/Filter";
import Job8 from "../components/Job8";
import Job7 from "../components/Job7";
import Job1 from "../components/Job1";
import Footer1 from "../components/Footer1";
import styles from "./EmployerSearchPage.module.css";

const EmployerSearchPage: FunctionComponent = () => {
  return (
    <div className={styles.employerSearchPage}>
      <Navigation13 />
      <div className={styles.headerContainer}>
        <div className={styles.breadcrumb}>
          <div className={styles.label}>Find Job</div>
          <div className={styles.process}>
            <div className={styles.label1}>Home</div>
            <div className={styles.featuredBadge}>/</div>
            <div className={styles.label2}>Label</div>
            <div className={styles.div}>/</div>
            <div className={styles.label3}>Label</div>
            <div className={styles.div1}>/</div>
            <div className={styles.label4}>Label</div>
            <div className={styles.div2}>/</div>
            <div className={styles.label5}>Label</div>
            <div className={styles.div3}>/</div>
            <div className={styles.label6}>Label</div>
            <div className={styles.div4}>/</div>
            <div className={styles.label7}>Label</div>
            <div className={styles.div5}>/</div>
            <div className={styles.label8}>Label</div>
            <div className={styles.div6}>/</div>
            <div className={styles.label9}>Find job</div>
          </div>
        </div>
      </div>
      <div className={styles.california}>
        <div className={styles.unitedKingdomofGreatBritain}>
          <AdbanceFilter />
        </div>
      </div>
      <main className={styles.headerGroup}>
        <Filter />
        <section className={styles.kK}>
          <div className={styles.calendarblank}>
            <div className={styles.daysRemaining}>
              <div className={styles.jobParent}>
                <Job8
                  employersLogo="/employers-logo.svg"
                  suniorUXDesigner="Guy Hawkins"
                  featured="Remote"
                  california="New Mexico, USA"
                  bookmarkSimple="/bookmarksimple2.svg"
                  showEmployersLogoIcon
                />
                <Job8
                  employersLogo="/employers-logo1.svg"
                  suniorUXDesigner="Jacob Jones"
                  featured="Full Time"
                  california="Dhaka, Bangladesh"
                  bookmarkSimple="/bookmarksimple-1.svg"
                  showEmployersLogoIcon={false}
                  propBackground="unset"
                  propBackgroundColor="#fff"
                  propWidth="475px"
                  propBackgroundColor1="#192033"
                  propHeight="68px"
                  propWidth1="68px"
                  propPadding="var(--padding-10xs) var(--padding-4xs) var(--padding-10xs) var(--padding-xs)"
                  propMinWidth="103px"
                  propFlex="1"
                  propFlex1="1"
                  propMinWidth1="97px"
                />
                <Job8
                  employersLogo="/employers-logo-1.svg"
                  suniorUXDesigner="Jacob Jones"
                  featured="Full Time"
                  california="New York, USA"
                  bookmarkSimple="/bookmarksimple2.svg"
                  showEmployersLogoIcon
                  propBackground="unset"
                  propBackgroundColor="#fff"
                  propWidth="449px"
                  propBackgroundColor1="#000"
                  propHeight="unset"
                  propWidth1="unset"
                  propPadding="var(--padding-10xs) var(--padding-4xs) var(--padding-10xs) var(--padding-xs)"
                  propMinWidth="unset"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth1="unset"
                />
                <Job7
                  employersLogo="/employers-logo-2.svg"
                  seniorUXDesigner="Robert Fox"
                  featured="Full Time"
                  unitedKingdomOfGreatBrita="Washington, USA"
                  bookmarkSimple="/bookmarksimple2.svg"
                />
                <Job8
                  employersLogo="/employers-logo-3.svg"
                  suniorUXDesigner="Kathryn Murphy"
                  featured="Full Time"
                  california="Ohio, USA"
                  bookmarkSimple="/bookmarksimple-1.svg"
                  showEmployersLogoIcon
                  propBackground="unset"
                  propBackgroundColor="#fff"
                  propWidth="416px"
                  propBackgroundColor1="1px solid #edeff5"
                  propHeight="unset"
                  propWidth1="unset"
                  propPadding="var(--padding-10xs) var(--padding-4xs) var(--padding-10xs) var(--padding-xs)"
                  propMinWidth="unset"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth1="unset"
                />
                <Job1 seniorUXDesigner="Darlene Robertson" />
                <Job7
                  employersLogo="/employers-logo-5.svg"
                  seniorUXDesigner="Kristin Watson"
                  featured="Part Time"
                  unitedKingdomOfGreatBrita="Montana, USA"
                  bookmarkSimple="/bookmarksimple-1.svg"
                  propWidth="unset"
                  propBackgroundColor="#1da1f2"
                  propBackground="unset"
                  propOverflow="hidden"
                  propFlex="unset"
                  propPadding="var(--padding-10xs) var(--padding-4xs) var(--padding-10xs) var(--padding-xs)"
                  propAlignSelf="unset"
                  propWidth1="unset"
                  propFlex1="unset"
                  propMinWidth="unset"
                />
                <Job7
                  employersLogo="/employers-logo-6.svg"
                  seniorUXDesigner="Jenny Wilson"
                  featured="Contract Base"
                  unitedKingdomOfGreatBrita="Sivas, Turkey"
                  bookmarkSimple="/bookmarksimple-1.svg"
                  propWidth="unset"
                  propBackgroundColor="#1877f2"
                  propBackground="unset"
                  propOverflow="unset"
                  propFlex="unset"
                  propPadding="var(--padding-10xs) var(--padding-4xs) var(--padding-10xs) var(--padding-xs)"
                  propAlignSelf="unset"
                  propWidth1="unset"
                  propFlex1="unset"
                  propMinWidth="unset"
                />
                <Job7
                  employersLogo="/employers-logo-7.svg"
                  seniorUXDesigner="Marvin McKinney"
                  featured="Full Time"
                  unitedKingdomOfGreatBrita="Chattogram, Bangladesh"
                  bookmarkSimple="/bookmarksimple2.svg"
                  propWidth="unset"
                  propBackgroundColor="1px solid #edeff5"
                  propBackground="unset"
                  propOverflow="hidden"
                  propFlex="unset"
                  propPadding="var(--padding-10xs) var(--padding-4xs) var(--padding-10xs) var(--padding-xs)"
                  propAlignSelf="unset"
                  propWidth1="unset"
                  propFlex1="unset"
                  propMinWidth="unset"
                />
                <Job7
                  employersLogo="/employers-logo-8.svg"
                  seniorUXDesigner="Theresa Webb"
                  featured="Full Time"
                  unitedKingdomOfGreatBrita="Konya, Turkey"
                  bookmarkSimple="/bookmarksimple-1.svg"
                  propWidth="unset"
                  propBackgroundColor="unset"
                  propBackground="radial-gradient(50% 50% at 50% 50%, rgba(140, 58, 170, 0) 64%, #8c3aaa), radial-gradient(50% 50% at 50% 50%, #fa8f21 9%, #d82d7e 78%)"
                  propOverflow="hidden"
                  propFlex="unset"
                  propPadding="var(--padding-10xs) var(--padding-4xs) var(--padding-10xs) var(--padding-xs)"
                  propAlignSelf="unset"
                  propWidth1="unset"
                  propFlex1="unset"
                  propMinWidth="unset"
                />
                <Job7
                  employersLogo="/employers-logo-9.svg"
                  seniorUXDesigner="Stanley Hudson"
                  featured="Temporary"
                  unitedKingdomOfGreatBrita="Penn, USA"
                  bookmarkSimple="/bookmarksimple-1.svg"
                  propWidth="unset"
                  propBackgroundColor="#1e60c6"
                  propBackground="unset"
                  propOverflow="hidden"
                  propFlex="unset"
                  propPadding="var(--padding-10xs) var(--padding-xs)"
                  propAlignSelf="unset"
                  propWidth1="unset"
                  propFlex1="unset"
                  propMinWidth="unset"
                />
                <Job8
                  employersLogo="/employers-logo-10.svg"
                  suniorUXDesigner="Bob Vance"
                  featured="Full Time"
                  california="Mymensingh, Bangladesh"
                  bookmarkSimple="/bookmarksimple-1.svg"
                  showEmployersLogoIcon
                  propBackground="unset"
                  propBackgroundColor="#fff"
                  propWidth="518px"
                  propBackgroundColor1="1px solid #edeff5"
                  propHeight="unset"
                  propWidth1="unset"
                  propPadding="var(--padding-10xs) var(--padding-4xs) var(--padding-10xs) var(--padding-xs)"
                  propMinWidth="131px"
                  propFlex="1"
                  propFlex1="unset"
                  propMinWidth1="unset"
                />
              </div>
              <img
                className={styles.monthPickerLabelText}
                loading="eager"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className={styles.daysLeftCounterText}>
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
                    <div className={styles.previousPageButton}>01</div>
                  </div>
                  <div className={styles.pagination2}>
                    <div className={styles.div7}>02</div>
                  </div>
                  <div className={styles.pagination3}>
                    <div className={styles.div8}>03</div>
                  </div>
                  <div className={styles.pagination4}>
                    <div className={styles.div9}>04</div>
                  </div>
                  <div className={styles.pagination5}>
                    <div className={styles.div10}>05</div>
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
          </div>
        </section>
      </main>
      <Footer1 propMargin="0" propMargin1="0" propMargin2="0" />
    </div>
  );
};

export default EmployerSearchPage;
