import { FunctionComponent } from "react";
import Job3 from "./Job3";
import Job2 from "./Job2";
import Job1 from "./Job1";
import styles from "./BookmarkSimple.module.css";

const BookmarkSimple: FunctionComponent = () => {
  return (
    <section className={styles.bookmarkSimple}>
      <div className={styles.primary}>
        <Job3
          employersLogo="/employers-logo.svg"
          suniorUXDesigner="Marketing Manager"
          featured="Remote"
          california="New Mexico, USA"
          bookmarkSimple="/bookmarksimple2.svg"
          showEmployersLogoIcon
        />
        <Job3
          employersLogo="/employers-logo1.svg"
          suniorUXDesigner="Project Manager"
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
      </div>
      <div className={styles.jobParent}>
        <Job3
          employersLogo="/employers-logo-1.svg"
          suniorUXDesigner="Interaction Designer"
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
        <Job2
          employersLogo="/employers-logo-2.svg"
          seniorUXDesigner="Networking Engineer"
          featured="Full Time"
          unitedKingdomOfGreatBrita="Washington, USA"
          bookmarkSimple="/bookmarksimple2.svg"
        />
        <Job3
          employersLogo="/employers-logo-3.svg"
          suniorUXDesigner="Product Designer"
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
      </div>
      <div className={styles.footerLinkGroup}>
        <div className={styles.employersCandFooter}>
          <Job1 seniorUXDesigner="Junior Graphic Designer" />
          <Job2
            employersLogo="/employers-logo-5.svg"
            seniorUXDesigner="Software Engineer"
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
            propFlex1="unset"
            propMinWidth="unset"
            propFlex2="unset"
            propMinWidth1="unset"
          />
          <Job2
            employersLogo="/employers-logo-6.svg"
            seniorUXDesigner="Front End Developer"
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
            propFlex1="unset"
            propMinWidth="unset"
            propFlex2="unset"
            propMinWidth1="unset"
          />
          <Job2
            employersLogo="/employers-logo-7.svg"
            seniorUXDesigner="Techical Support Specialist"
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
            propFlex1="unset"
            propMinWidth="unset"
            propFlex2="unset"
            propMinWidth1="unset"
          />
          <Job2
            employersLogo="/employers-logo-8.svg"
            seniorUXDesigner="Visual Designer"
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
            propFlex1="unset"
            propMinWidth="unset"
            propFlex2="unset"
            propMinWidth1="unset"
          />
          <Job2
            employersLogo="/employers-logo-9.svg"
            seniorUXDesigner="Marketing Officer"
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
            propFlex1="unset"
            propMinWidth="unset"
            propFlex2="unset"
            propMinWidth1="unset"
          />
          <Job3
            employersLogo="/employers-logo-10.svg"
            suniorUXDesigner="Senior UX Designer"
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
          className={styles.arrowCircleUpUndefined}
          alt=""
          src="/arrow-circle-up--undefined--glyph-undefined.svg"
        />
      </div>
      <div className={styles.paginationWrapper}>
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
              <div className={styles.firstLastButtons}>01</div>
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
    </section>
  );
};

export default BookmarkSimple;
