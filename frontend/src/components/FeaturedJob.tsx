import { FunctionComponent } from "react";
import styles from "./FeaturedJob.module.css";

export type FeaturedJobType = {
  jobsYouMightLike?: string;
  googleInc?: string;
  googleInc1?: string;
  googleInc2?: string;
  googleInc3?: string;
  googleInc4?: string;
  googleInc5?: string;
  googleInc6?: string;
  googleInc7?: string;
  googleInc8?: string;
  googleInc9?: string;
  googleInc10?: string;
  googleInc11?: string;
};

const FeaturedJob: FunctionComponent<FeaturedJobType> = ({
  jobsYouMightLike,
  googleInc,
  googleInc1,
  googleInc2,
  googleInc3,
  googleInc4,
  googleInc5,
  googleInc6,
  googleInc7,
  googleInc8,
  googleInc9,
  googleInc10,
  googleInc11,
}) => {
  return (
    <section className={styles.featuredJob}>
      <div className={styles.heading}>
        <h1 className={styles.jobsYouMight}>{jobsYouMightLike}</h1>
        <button className={styles.button}>
          <div className={styles.primary}>View All</div>
          <img
            className={styles.fiarrowRightIcon}
            alt=""
            src="/fiarrowright3.svg"
          />
        </button>
      </div>
      <div className={styles.musicAudio}>
        <div className={styles.job}>
          <div className={styles.heading1}>
            <div className={styles.techicalSupportSpecialist}>
              Techical Support Specialist
            </div>
            <div className={styles.loactionGroup}>
              <div className={styles.type}>
                <div className={styles.partTime}>Part-time</div>
              </div>
              <div className={styles.salary20000}>
                Salary: $20,000 - $25,000
              </div>
            </div>
          </div>
          <div className={styles.company}>
            <div className={styles.info}>
              <div className={styles.googleInc}>{googleInc}</div>
              <div className={styles.loaction}>
                <img
                  className={styles.mappinIcon}
                  loading="eager"
                  alt=""
                  src="/mappin.svg"
                />
                <div className={styles.torontoOntario}>Toronto, Ontario</div>
              </div>
            </div>
            <img
              className={styles.bookmarksimpleIcon}
              loading="eager"
              alt=""
              src="/bookmarksimple.svg"
            />
          </div>
        </div>
        <div className={styles.job1}>
          <div className={styles.heading2}>
            <div className={styles.seniorUxDesigner}>Senior UX Designer</div>
            <div className={styles.typeParent}>
              <div className={styles.type1}>
                <div className={styles.fullTime}>Full-Time</div>
              </div>
              <div className={styles.salary200001}>
                Salary: $20,000 - $25,000
              </div>
            </div>
          </div>
          <div className={styles.company1}>
            <div className={styles.info1}>
              <div className={styles.googleInc1}>{googleInc1}</div>
              <div className={styles.loaction1}>
                <img className={styles.mappinIcon1} alt="" src="/mappin.svg" />
                <div className={styles.torontoOntario1}>Toronto, Ontario</div>
              </div>
            </div>
            <img
              className={styles.bookmarksimpleIcon1}
              alt=""
              src="/bookmarksimple.svg"
            />
          </div>
        </div>
        <div className={styles.job2}>
          <div className={styles.heading3}>
            <div className={styles.marketingOfficer}>Marketing Officer</div>
            <div className={styles.typeGroup}>
              <div className={styles.type2}>
                <div className={styles.internship}>Internship</div>
              </div>
              <div className={styles.salary200002}>
                Salary: $20,000 - $25,000
              </div>
            </div>
          </div>
          <div className={styles.company2}>
            <div className={styles.info2}>
              <div className={styles.googleInc2}>{googleInc2}</div>
              <div className={styles.loaction2}>
                <img className={styles.mappinIcon2} alt="" src="/mappin.svg" />
                <div className={styles.torontoOntario2}>Toronto, Ontario</div>
              </div>
            </div>
            <img
              className={styles.bookmarksimpleIcon2}
              alt=""
              src="/bookmarksimple.svg"
            />
          </div>
        </div>
        <div className={styles.job3}>
          <div className={styles.heading4}>
            <div className={styles.juniorGraphicDesigner}>
              Junior Graphic Designer
            </div>
            <div className={styles.typeContainer}>
              <div className={styles.type3}>
                <div className={styles.internship1}>Internship</div>
              </div>
              <div className={styles.salary200003}>
                Salary: $20,000 - $25,000
              </div>
            </div>
          </div>
          <div className={styles.company3}>
            <div className={styles.info3}>
              <div className={styles.googleInc3}>{googleInc3}</div>
              <div className={styles.loaction3}>
                <img className={styles.mappinIcon3} alt="" src="/mappin.svg" />
                <div className={styles.torontoOntario3}>Toronto, Ontario</div>
              </div>
            </div>
            <img
              className={styles.bookmarksimpleIcon3}
              alt=""
              src="/bookmarksimple.svg"
            />
          </div>
        </div>
        <div className={styles.job4}>
          <div className={styles.heading5}>
            <div className={styles.interactionDesigner}>
              Interaction Designer
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.type4}>
                <div className={styles.partTime1}>Part-time</div>
              </div>
              <div className={styles.salary200004}>
                Salary: $20,000 - $25,000
              </div>
            </div>
          </div>
          <div className={styles.company4}>
            <div className={styles.info4}>
              <div className={styles.googleInc4}>{googleInc4}</div>
              <div className={styles.loaction4}>
                <img className={styles.mappinIcon4} alt="" src="/mappin.svg" />
                <div className={styles.torontoOntario4}>Toronto, Ontario</div>
              </div>
            </div>
            <img
              className={styles.bookmarksimpleIcon4}
              alt=""
              src="/bookmarksimple.svg"
            />
          </div>
        </div>
        <div className={styles.job5}>
          <div className={styles.heading6}>
            <div className={styles.projectManager}>Project Manager</div>
            <div className={styles.typeParent1}>
              <div className={styles.type5}>
                <div className={styles.fullTime1}>Full-Time</div>
              </div>
              <div className={styles.salary200005}>
                Salary: $20,000 - $25,000
              </div>
            </div>
          </div>
          <div className={styles.company5}>
            <div className={styles.info5}>
              <div className={styles.googleInc5}>{googleInc5}</div>
              <div className={styles.loaction5}>
                <img className={styles.mappinIcon5} alt="" src="/mappin.svg" />
                <div className={styles.torontoOntario5}>Toronto, Ontario</div>
              </div>
            </div>
            <img
              className={styles.bookmarksimpleIcon5}
              alt=""
              src="/bookmarksimple.svg"
            />
          </div>
        </div>
        <div className={styles.job6}>
          <div className={styles.heading7}>
            <div className={styles.softwareEngineer}>Software Engineer</div>
            <div className={styles.typeParent2}>
              <div className={styles.type6}>
                <div className={styles.fullTime2}>Full-Time</div>
              </div>
              <div className={styles.salary200006}>
                Salary: $20,000 - $25,000
              </div>
            </div>
          </div>
          <div className={styles.company6}>
            <div className={styles.info6}>
              <div className={styles.googleInc6}>{googleInc6}</div>
              <div className={styles.loaction6}>
                <img className={styles.mappinIcon6} alt="" src="/mappin.svg" />
                <div className={styles.torontoOntario6}>Toronto, Ontario</div>
              </div>
            </div>
            <img
              className={styles.bookmarksimpleIcon6}
              alt=""
              src="/bookmarksimple.svg"
            />
          </div>
        </div>
        <div className={styles.job7}>
          <div className={styles.heading8}>
            <div className={styles.visualDesigner}>Visual Designer</div>
            <div className={styles.typeParent3}>
              <div className={styles.type7}>
                <div className={styles.fullTime3}>Full-Time</div>
              </div>
              <div className={styles.salary200007}>
                Salary: $20,000 - $25,000
              </div>
            </div>
          </div>
          <div className={styles.company7}>
            <div className={styles.info7}>
              <div className={styles.googleInc7}>{googleInc7}</div>
              <div className={styles.loaction7}>
                <img className={styles.mappinIcon7} alt="" src="/mappin.svg" />
                <div className={styles.torontoOntario7}>Toronto, Ontario</div>
              </div>
            </div>
            <img
              className={styles.bookmarksimpleIcon7}
              alt=""
              src="/bookmarksimple.svg"
            />
          </div>
        </div>
        <div className={styles.job8}>
          <div className={styles.heading9}>
            <div className={styles.projectManager1}>Project Manager</div>
            <div className={styles.typeParent4}>
              <div className={styles.type8}>
                <div className={styles.fullTime4}>Full-Time</div>
              </div>
              <div className={styles.salary200008}>
                Salary: $20,000 - $25,000
              </div>
            </div>
          </div>
          <div className={styles.company8}>
            <div className={styles.info8}>
              <div className={styles.googleInc8}>{googleInc8}</div>
              <div className={styles.loaction8}>
                <img className={styles.mappinIcon8} alt="" src="/mappin.svg" />
                <div className={styles.torontoOntario8}>Toronto, Ontario</div>
              </div>
            </div>
            <img
              className={styles.bookmarksimpleIcon8}
              alt=""
              src="/bookmarksimple.svg"
            />
          </div>
        </div>
        <div className={styles.job9}>
          <div className={styles.heading10}>
            <div className={styles.frontEndDeveloper}>Front End Developer</div>
            <div className={styles.typeParent5}>
              <div className={styles.type9}>
                <div className={styles.partTime2}>Part-time</div>
              </div>
              <div className={styles.salary200009}>
                Salary: $20,000 - $25,000
              </div>
            </div>
          </div>
          <div className={styles.company9}>
            <div className={styles.info9}>
              <div className={styles.googleInc9}>{googleInc9}</div>
              <div className={styles.loaction9}>
                <img className={styles.mappinIcon9} alt="" src="/mappin.svg" />
                <div className={styles.torontoOntario9}>Toronto, Ontario</div>
              </div>
            </div>
            <img
              className={styles.bookmarksimpleIcon9}
              alt=""
              src="/bookmarksimple.svg"
            />
          </div>
        </div>
        <div className={styles.job10}>
          <div className={styles.heading11}>
            <div className={styles.seniorUxDesigner1}>Senior UX Designer</div>
            <div className={styles.typeParent6}>
              <div className={styles.type10}>
                <div className={styles.fullTime5}>Full-Time</div>
              </div>
              <div className={styles.salary2000010}>
                Salary: $20,000 - $25,000
              </div>
            </div>
          </div>
          <div className={styles.company10}>
            <div className={styles.info10}>
              <div className={styles.googleInc10}>{googleInc10}</div>
              <div className={styles.loaction10}>
                <img className={styles.mappinIcon10} alt="" src="/mappin.svg" />
                <div className={styles.torontoOntario10}>Toronto, Ontario</div>
              </div>
            </div>
            <img
              className={styles.bookmarksimpleIcon10}
              alt=""
              src="/bookmarksimple.svg"
            />
          </div>
        </div>
        <div className={styles.job11}>
          <div className={styles.heading12}>
            <div className={styles.marketingManager}>Marketing Manager</div>
            <div className={styles.typeParent7}>
              <div className={styles.type11}>
                <div className={styles.internship2}>Internship</div>
              </div>
              <div className={styles.salary2000011}>
                Salary: $20,000 - $25,000
              </div>
            </div>
          </div>
          <div className={styles.company11}>
            <div className={styles.info11}>
              <div className={styles.googleInc11}>{googleInc11}</div>
              <div className={styles.loaction11}>
                <img className={styles.mappinIcon11} alt="" src="/mappin.svg" />
                <div className={styles.torontoOntario11}>Toronto, Ontario</div>
              </div>
            </div>
            <img
              className={styles.bookmarksimpleIcon11}
              alt=""
              src="/bookmarksimple.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJob;
