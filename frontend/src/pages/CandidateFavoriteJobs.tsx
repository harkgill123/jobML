import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import LocationMarker from "../components/LocationMarker";
import styles from "./CandidateFavoriteJobs.module.css";

const CandidateFavoriteJobs: FunctionComponent = () => {
  return (
    <div className={styles.candidateFavoriteJobs}>
      <Navigation1 />
      <section className={styles.sidebarParent}>
        <div className={styles.sidebar}>
          <div className={styles.links}>
            <div className={styles.candidateDashboard}>CANDIDATE DASHBOARD</div>
            <div className={styles.dashboardNavItemParent}>
              <div className={styles.dashboardNavItem}>
                <img
                  className={styles.stackIcon}
                  loading="eager"
                  alt=""
                  src="/stack11.svg"
                />
                <div className={styles.logOut}>Overview</div>
              </div>
              <div className={styles.dashboardNavItem1}>
                <img
                  className={styles.briefcaseIcon}
                  loading="eager"
                  alt=""
                  src="/briefcase1.svg"
                />
                <div className={styles.logOut1}>Applied Jobs</div>
              </div>
              <button className={styles.dashboardNavItem2}>
                <input className={styles.bookmarksimple} type="checkbox" />
                <div className={styles.logOut2}>Favorite Jobs</div>
              </button>
              <div className={styles.dashboardNavItem3}>
                <div className={styles.logOut3}>Job Alert</div>
                <div className={styles.wrapper}>
                  <div className={styles.div}>09</div>
                </div>
                <img
                  className={styles.bellringingIcon}
                  alt=""
                  src="/bellringing.svg"
                />
              </div>
              <div className={styles.dashboardNavItem4}>
                <div className={styles.logOut4}>Settings</div>
                <img className={styles.gearIcon} alt="" src="/gear.svg" />
              </div>
            </div>
          </div>
          <div className={styles.dashboardNavItem5}>
            <div className={styles.logOut5}>Log-out</div>
            <img className={styles.signoutIcon} alt="" src="/signout.svg" />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.favoriteJobs17Parent}>
            <div className={styles.favoriteJobs17Container}>
              <span className={styles.favoriteJobs}>{`Favorite Jobs `}</span>
              <span className={styles.span}>(17)</span>
            </div>
            <div className={styles.jobParent}>
              <div className={styles.job}>
                <div className={styles.info}>
                  <div className={styles.employersLogo}>
                    <img
                      className={styles.employersLogoIcon}
                      alt=""
                      src="/employers-logo2.svg"
                    />
                  </div>
                  <div className={styles.heading}>
                    <div className={styles.heading1}>
                      <div className={styles.seniorUxDesigner}>
                        Techical Support Specialist
                      </div>
                      <div className={styles.badge}>
                        <div className={styles.featured}>Full Time</div>
                      </div>
                    </div>
                    <div className={styles.info1}>
                      <div className={styles.loaction}>
                        <img
                          className={styles.fimapPinIcon}
                          loading="eager"
                          alt=""
                          src="/fimappin-4.svg"
                        />
                        <div className={styles.unitedKingdomOf}>Idaho, USA</div>
                      </div>
                      <div className={styles.price}>
                        <img
                          className={styles.currencyDollar1Icon}
                          alt=""
                          src="/currencydollar-1-3.svg"
                        />
                        <div className={styles.k35k}>$15K-$20K</div>
                      </div>
                      <div className={styles.price1}>
                        <img
                          className={styles.calendarBlank11}
                          alt=""
                          src="/calendarblank-1-1-3.svg"
                        />
                        <img
                          className={styles.xcircleIcon}
                          alt=""
                          src="/xcircle.svg"
                        />
                        <div className={styles.daysRemaining}>Job Expire</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.mainFrame}>
                  <div className={styles.iconButton}>
                    <img
                      className={styles.bookmarksimpleIcon}
                      alt=""
                      src="/bookmarksimple-12.svg"
                    />
                  </div>
                  <button className={styles.button}>
                    <div className={styles.primary}>Deadline expired</div>
                  </button>
                </div>
              </div>
              <div className={styles.locationMarker}>
                <div className={styles.locationMarkerChild} />
                <div className={styles.job1}>
                  <div className={styles.info2}>
                    <div className={styles.employersLogo1}>
                      <img
                        className={styles.employersLogoIcon1}
                        alt=""
                        src="/employers-logo-11.svg"
                      />
                    </div>
                    <div className={styles.heading2}>
                      <div className={styles.heading3}>
                        <div className={styles.seniorUxDesigner1}>
                          UI/UX Designer
                        </div>
                        <div className={styles.badge1}>
                          <div className={styles.featured1}>Full Time</div>
                        </div>
                      </div>
                      <div className={styles.info3}>
                        <div className={styles.loaction1}>
                          <img
                            className={styles.fimapPinIcon1}
                            alt=""
                            src="/fimappin-4.svg"
                          />
                          <div className={styles.unitedKingdomOf1}>
                            Minnesota, USA
                          </div>
                        </div>
                        <div className={styles.price2}>
                          <img
                            className={styles.currencyDollar1Icon1}
                            alt=""
                            src="/currencydollar-1-3.svg"
                          />
                          <div className={styles.k35k1}>$10K-$15K</div>
                        </div>
                        <div className={styles.price3}>
                          <img
                            className={styles.calendarBlank111}
                            alt=""
                            src="/calendarblank-1-1-3.svg"
                          />
                          <img
                            className={styles.xcircleIcon1}
                            alt=""
                            src="/xcircle.svg"
                          />
                          <div className={styles.daysRemaining1}>
                            4 Days Remaining
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.iconButtonParent}>
                    <div className={styles.iconButton1}>
                      <img
                        className={styles.bookmarksimpleIcon1}
                        alt=""
                        src="/bookmarksimple-12.svg"
                      />
                    </div>
                    <button className={styles.button1}>
                      <div className={styles.primary1}>Apply Now</div>
                      <img
                        className={styles.fiarrowRightIcon}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.locationMarker1}>
                <div className={styles.locationMarkerItem} />
                <div className={styles.job2}>
                  <div className={styles.info4}>
                    <div className={styles.employersLogo2}>
                      <img
                        className={styles.employersLogoIcon2}
                        alt=""
                        src="/employers-logo-21.svg"
                      />
                    </div>
                    <div className={styles.heading4}>
                      <div className={styles.heading5}>
                        <div className={styles.seniorUxDesigner2}>
                          Interaction Designer
                        </div>
                        <div className={styles.badge2}>
                          <div className={styles.featured2}>Remote</div>
                        </div>
                      </div>
                      <div className={styles.info5}>
                        <div className={styles.loaction2}>
                          <img
                            className={styles.fimapPinIcon2}
                            alt=""
                            src="/fimappin-4.svg"
                          />
                          <div className={styles.unitedKingdomOf2}>
                            Penn, USA
                          </div>
                        </div>
                        <div className={styles.price4}>
                          <img
                            className={styles.currencyDollar1Icon2}
                            alt=""
                            src="/currencydollar-1-3.svg"
                          />
                          <div className={styles.k35k2}>$35K-$40K</div>
                        </div>
                        <div className={styles.price5}>
                          <img
                            className={styles.calendarBlank112}
                            alt=""
                            src="/calendarblank-1-1-3.svg"
                          />
                          <img
                            className={styles.xcircleIcon2}
                            alt=""
                            src="/xcircle.svg"
                          />
                          <div className={styles.daysRemaining2}>
                            4 Days Remaining
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.iconButtonGroup}>
                    <div className={styles.iconButton2}>
                      <img
                        className={styles.bookmarksimpleIcon2}
                        alt=""
                        src="/bookmarksimple-12.svg"
                      />
                    </div>
                    <button className={styles.button2}>
                      <div className={styles.primary2}>Apply Now</div>
                      <img
                        className={styles.fiarrowRightIcon1}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.locationMarker2}>
                <div className={styles.locationMarkerInner} />
                <div className={styles.job3}>
                  <div className={styles.info6}>
                    <div className={styles.employersLogo3}>
                      <img
                        className={styles.employersLogoIcon3}
                        alt=""
                        src="/employers-logo-31.svg"
                      />
                    </div>
                    <div className={styles.heading6}>
                      <div className={styles.heading7}>
                        <div className={styles.seniorUxDesigner3}>
                          Junior Graphic Designer
                        </div>
                        <div className={styles.badge3}>
                          <div className={styles.featured3}>Full Time</div>
                        </div>
                      </div>
                      <div className={styles.info7}>
                        <div className={styles.loaction3}>
                          <img
                            className={styles.fimapPinIcon3}
                            alt=""
                            src="/fimappin-4.svg"
                          />
                          <div className={styles.unitedKingdomOf3}>
                            Mymensingh, Bangladesh
                          </div>
                        </div>
                        <div className={styles.price6}>
                          <img
                            className={styles.currencyDollar1Icon3}
                            alt=""
                            src="/currencydollar-1-3.svg"
                          />
                          <div className={styles.k35k3}>$40K-$50K</div>
                        </div>
                        <div className={styles.price7}>
                          <img
                            className={styles.calendarBlank113}
                            alt=""
                            src="/calendarblank-1-1-3.svg"
                          />
                          <img
                            className={styles.xcircleIcon3}
                            alt=""
                            src="/xcircle.svg"
                          />
                          <div className={styles.daysRemaining3}>
                            4 Days Remaining
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.iconButtonContainer}>
                    <div className={styles.iconButton3}>
                      <img
                        className={styles.bookmarksimpleIcon3}
                        alt=""
                        src="/bookmarksimple-12.svg"
                      />
                    </div>
                    <button className={styles.button3}>
                      <div className={styles.primary3}>Apply Now</div>
                      <img
                        className={styles.fiarrowRightIcon2}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <LocationMarker />
              <div className={styles.locationMarker3}>
                <div className={styles.lineDiv} />
                <div className={styles.job4}>
                  <div className={styles.info8}>
                    <div className={styles.employersLogo4}>
                      <img
                        className={styles.employersLogoIcon4}
                        alt=""
                        src="/employers-logo-51.svg"
                      />
                    </div>
                    <div className={styles.heading8}>
                      <div className={styles.heading9}>
                        <div className={styles.seniorUxDesigner4}>
                          Product Designer
                        </div>
                        <div className={styles.badge4}>
                          <div className={styles.featured4}>Full Time</div>
                        </div>
                      </div>
                      <div className={styles.info9}>
                        <div className={styles.loaction4}>
                          <img
                            className={styles.fimapPinIcon4}
                            alt=""
                            src="/fimappin-4.svg"
                          />
                          <div className={styles.unitedKingdomOf4}>
                            Sivas, Turkey
                          </div>
                        </div>
                        <div className={styles.price8}>
                          <img
                            className={styles.currencyDollar1Icon4}
                            alt=""
                            src="/currencydollar-1-3.svg"
                          />
                          <div className={styles.k35k4}>$50K-$70K</div>
                        </div>
                        <div className={styles.price9}>
                          <img
                            className={styles.calendarBlank114}
                            alt=""
                            src="/calendarblank-1-1-3.svg"
                          />
                          <img
                            className={styles.xcircleIcon4}
                            alt=""
                            src="/xcircle.svg"
                          />
                          <div className={styles.daysRemaining4}>
                            4 Days Remaining
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.iconButton4}>
                      <img
                        className={styles.bookmarksimpleIcon4}
                        alt=""
                        src="/bookmarksimple-12.svg"
                      />
                    </div>
                    <button className={styles.button4}>
                      <div className={styles.primary4}>Apply Now</div>
                      <img
                        className={styles.fiarrowRightIcon3}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.locationMarker4}>
                <div className={styles.locationMarkerChild1} />
                <div className={styles.job5}>
                  <div className={styles.info10}>
                    <div className={styles.employersLogo5}>
                      <img
                        className={styles.employersLogoIcon5}
                        alt=""
                        src="/employers-logo-61.svg"
                      />
                    </div>
                    <div className={styles.heading10}>
                      <div className={styles.heading11}>
                        <div className={styles.seniorUxDesigner5}>
                          Project Manager
                        </div>
                        <div className={styles.badge5}>
                          <div className={styles.featured5}>Full Time</div>
                        </div>
                      </div>
                      <div className={styles.info11}>
                        <div className={styles.loaction5}>
                          <img
                            className={styles.fimapPinIcon5}
                            alt=""
                            src="/fimappin-4.svg"
                          />
                          <div className={styles.unitedKingdomOf5}>
                            Ohio, USA
                          </div>
                        </div>
                        <div className={styles.price10}>
                          <img
                            className={styles.currencyDollar1Icon5}
                            alt=""
                            src="/currencydollar-1-3.svg"
                          />
                          <div className={styles.k35k5}>$50K-$80K</div>
                        </div>
                        <div className={styles.price11}>
                          <img
                            className={styles.calendarBlank115}
                            alt=""
                            src="/calendarblank-1-1-3.svg"
                          />
                          <img
                            className={styles.xcircleIcon5}
                            alt=""
                            src="/xcircle.svg"
                          />
                          <div className={styles.daysRemaining5}>
                            4 Days Remaining
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.iconButtonParent1}>
                    <div className={styles.iconButton5}>
                      <img
                        className={styles.bookmarksimpleIcon5}
                        alt=""
                        src="/bookmarksimple-12.svg"
                      />
                    </div>
                    <button className={styles.button5}>
                      <div className={styles.primary5}>Apply Now</div>
                      <img
                        className={styles.fiarrowRightIcon4}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <LocationMarker />
              <LocationMarker />
              <div className={styles.locationMarker5}>
                <div className={styles.locationMarkerChild2} />
                <div className={styles.job6}>
                  <div className={styles.info12}>
                    <div className={styles.employersLogo6}>
                      <img
                        className={styles.employersLogoIcon6}
                        alt=""
                        src="/employers-logo-91.svg"
                      />
                    </div>
                    <div className={styles.heading12}>
                      <div className={styles.heading13}>
                        <div className={styles.seniorUxDesigner6}>
                          Marketing Manager
                        </div>
                        <div className={styles.badge6}>
                          <div className={styles.featured6}>Temporary</div>
                        </div>
                      </div>
                      <div className={styles.info13}>
                        <div className={styles.loaction6}>
                          <img
                            className={styles.fimapPinIcon6}
                            alt=""
                            src="/fimappin-4.svg"
                          />
                          <div className={styles.unitedKingdomOf6}>
                            Konya, Turkey
                          </div>
                        </div>
                        <div className={styles.price12}>
                          <img
                            className={styles.currencyDollar1Icon6}
                            alt=""
                            src="/currencydollar-1-3.svg"
                          />
                          <div className={styles.k35k6}>$20K-$25K</div>
                        </div>
                        <div className={styles.price13}>
                          <img
                            className={styles.calendarBlank116}
                            alt=""
                            src="/calendarblank-1-1-3.svg"
                          />
                          <img
                            className={styles.xcircleIcon6}
                            alt=""
                            src="/xcircle.svg"
                          />
                          <div className={styles.daysRemaining6}>
                            4 Days Remaining
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.iconButtonParent2}>
                    <div className={styles.iconButton6}>
                      <img
                        className={styles.bookmarksimpleIcon6}
                        alt=""
                        src="/bookmarksimple-12.svg"
                      />
                    </div>
                    <button className={styles.button6}>
                      <div className={styles.primary6}>Apply Now</div>
                      <img
                        className={styles.fiarrowRightIcon5}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.locationMarker6}>
                <div className={styles.locationMarkerChild3} />
                <div className={styles.job7}>
                  <div className={styles.info14}>
                    <div className={styles.employersLogo7}>
                      <img
                        className={styles.employersLogoIcon7}
                        alt=""
                        src="/employers-logo-101.svg"
                      />
                    </div>
                    <div className={styles.heading14}>
                      <div className={styles.heading15}>
                        <div className={styles.seniorUxDesigner7}>
                          Visual Designer
                        </div>
                        <div className={styles.badge7}>
                          <div className={styles.featured7}>Part Time</div>
                        </div>
                      </div>
                      <div className={styles.info15}>
                        <div className={styles.loaction7}>
                          <img
                            className={styles.fimapPinIcon7}
                            alt=""
                            src="/fimappin-4.svg"
                          />
                          <div className={styles.unitedKingdomOf7}>
                            Washington, USA
                          </div>
                        </div>
                        <div className={styles.price14}>
                          <img
                            className={styles.currencyDollar1Icon7}
                            alt=""
                            src="/currencydollar-1-3.svg"
                          />
                          <div className={styles.k35k7}>$10K-$15K</div>
                        </div>
                        <div className={styles.price15}>
                          <img
                            className={styles.calendarBlank117}
                            alt=""
                            src="/calendarblank-1-1-3.svg"
                          />
                          <img
                            className={styles.xcircleIcon7}
                            alt=""
                            src="/xcircle.svg"
                          />
                          <div className={styles.daysRemaining7}>
                            4 Days Remaining
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.iconButtonParent3}>
                    <div className={styles.iconButton7}>
                      <img
                        className={styles.bookmarksimpleIcon7}
                        alt=""
                        src="/bookmarksimple-12.svg"
                      />
                    </div>
                    <button className={styles.button7}>
                      <div className={styles.primary7}>Apply Now</div>
                      <img
                        className={styles.fiarrowRightIcon6}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.locationMarker7}>
                <div className={styles.locationMarkerChild4} />
                <div className={styles.job8}>
                  <div className={styles.info16}>
                    <div className={styles.employersLogo8}>
                      <img
                        className={styles.employersLogoIcon8}
                        alt=""
                        src="/employers-logo-21.svg"
                      />
                    </div>
                    <div className={styles.heading16}>
                      <div className={styles.heading17}>
                        <div className={styles.seniorUxDesigner8}>
                          Interaction Designer
                        </div>
                        <div className={styles.badge8}>
                          <div className={styles.featured8}>Remote</div>
                        </div>
                      </div>
                      <div className={styles.info17}>
                        <div className={styles.loaction8}>
                          <img
                            className={styles.fimapPinIcon8}
                            alt=""
                            src="/fimappin-4.svg"
                          />
                          <div className={styles.unitedKingdomOf8}>
                            Penn, USA
                          </div>
                        </div>
                        <div className={styles.price16}>
                          <img
                            className={styles.currencyDollar1Icon8}
                            alt=""
                            src="/currencydollar-1-3.svg"
                          />
                          <div className={styles.k35k8}>$35K-$40K</div>
                        </div>
                        <div className={styles.price17}>
                          <img
                            className={styles.calendarBlank118}
                            alt=""
                            src="/calendarblank-1-1-3.svg"
                          />
                          <img
                            className={styles.xcircleIcon8}
                            alt=""
                            src="/xcircle.svg"
                          />
                          <div className={styles.daysRemaining8}>
                            4 Days Remaining
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.iconButtonParent4}>
                    <div className={styles.iconButton8}>
                      <img
                        className={styles.bookmarksimpleIcon8}
                        alt=""
                        src="/bookmarksimple-12.svg"
                      />
                    </div>
                    <button className={styles.button8}>
                      <div className={styles.primary8}>Apply Now</div>
                      <img
                        className={styles.fiarrowRightIcon7}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.locationMarker8}>
                <div className={styles.locationMarkerChild5} />
                <div className={styles.job9}>
                  <div className={styles.info18}>
                    <div className={styles.employersLogo9}>
                      <img
                        className={styles.employersLogoIcon9}
                        alt=""
                        src="/employers-logo-12.svg"
                      />
                    </div>
                    <div className={styles.heading18}>
                      <div className={styles.heading19}>
                        <div className={styles.seniorUxDesigner9}>
                          Senior UX Designer
                        </div>
                        <div className={styles.badge9}>
                          <div className={styles.featured9}>Contract Base</div>
                        </div>
                      </div>
                      <div className={styles.info19}>
                        <div className={styles.loaction9}>
                          <img
                            className={styles.fimapPinIcon9}
                            alt=""
                            src="/fimappin-4.svg"
                          />
                          <div className={styles.unitedKingdomOf9}>
                            Sylhet, Bangladesh
                          </div>
                        </div>
                        <div className={styles.price18}>
                          <img
                            className={styles.currencyDollar1Icon9}
                            alt=""
                            src="/currencydollar-1-3.svg"
                          />
                          <div className={styles.k35k9}>$30K-$35K</div>
                        </div>
                        <div className={styles.price19}>
                          <img
                            className={styles.calendarBlank119}
                            alt=""
                            src="/calendarblank-1-1-3.svg"
                          />
                          <img
                            className={styles.xcircleIcon9}
                            alt=""
                            src="/xcircle.svg"
                          />
                          <div className={styles.daysRemaining9}>
                            4 Days Remaining
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.iconButtonParent5}>
                    <div className={styles.iconButton9}>
                      <img
                        className={styles.bookmarksimpleIcon9}
                        alt=""
                        src="/bookmarksimple-12.svg"
                      />
                    </div>
                    <button className={styles.button9}>
                      <div className={styles.primary9}>Apply Now</div>
                      <img
                        className={styles.fiarrowRightIcon8}
                        alt=""
                        src="/fiarrowright3.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.paginationWrapper}>
        <div className={styles.pagination}>
          <div className={styles.iconButton10}>
            <img
              className={styles.fiarrowRightIcon9}
              alt=""
              src="/fiarrowright-12.svg"
            />
          </div>
          <div className={styles.pages}>
            <div className={styles.pagination1}>
              <div className={styles.paginationControl}>01</div>
            </div>
            <div className={styles.pagination2}>
              <div className={styles.div1}>02</div>
            </div>
            <div className={styles.pagination3}>
              <div className={styles.div2}>03</div>
            </div>
            <div className={styles.pagination4}>
              <div className={styles.div3}>04</div>
            </div>
            <div className={styles.pagination5}>
              <div className={styles.div4}>05</div>
            </div>
          </div>
          <button className={styles.iconButton11}>
            <img
              className={styles.fiarrowRightIcon10}
              alt=""
              src="/fiarrowright3.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateFavoriteJobs;
