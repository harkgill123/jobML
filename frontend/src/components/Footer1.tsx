import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer1.module.css";

export type Footer1Type = {
  /** Style props */
  propMargin?: CSSProperties["margin"];
  propMargin1?: CSSProperties["margin"];
  propMargin2?: CSSProperties["margin"];
};

const Footer1: FunctionComponent<Footer1Type> = ({
  propMargin,
  propMargin1,
  propMargin2,
}) => {
  const quickLinkStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const candidateStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  const employersStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  return (
    <footer className={styles.footer}>
      <div className={styles.frameSiteLogoCallNow}>
        <div className={styles.frameSiteLogoCallNow1}>
          <div className={styles.sitelogo}>
            <div className={styles.frameSiteLogoCallNow2} />
            <div className={styles.frameSiteLogoCallNow3} />
            <div className={styles.frameSiteLogoCallNow4} />
            <div className={styles.sitelogo1} />
          </div>
          <h3 className={styles.jobsync}>JobSync</h3>
        </div>
        <div className={styles.footerFrame}>
          <div className={styles.callNow}>Call now:</div>
          <div className={styles.relatedJobsList}> 1(800) 123-4567</div>
        </div>
      </div>
      <div className={styles.candidateLinksFooter}>
        <div className={styles.com}>
          <div className={styles.quickLink} style={quickLinkStyle}>
            Quick Link
          </div>
          <div className={styles.link}>
            <div className={styles.footerLink}>
              <img
                className={styles.fiarrowRightIcon}
                alt=""
                src="/fiarrowright2.svg"
              />
              <div className={styles.footerLink1}>About</div>
            </div>
            <div className={styles.footerLink2}>
              <div className={styles.contact}>Contact</div>
            </div>
          </div>
        </div>
        <div className={styles.candidate}>
          <div className={styles.candidate1} style={candidateStyle}>
            Candidate
          </div>
          <div className={styles.link1}>
            <div className={styles.footerLink3}>
              <img
                className={styles.fiarrowRightIcon1}
                alt=""
                src="/fiarrowright2.svg"
              />
              <div className={styles.footerLink4}>Browse Jobs</div>
            </div>
            <div className={styles.footerLink5}>
              <img
                className={styles.fiarrowRightIcon2}
                alt=""
                src="/fiarrowright2.svg"
              />
              <div className={styles.footerLink6}>Browse Employers</div>
            </div>
            <div className={styles.footerLink7}>
              <img
                className={styles.fiarrowRightIcon3}
                alt=""
                src="/fiarrowright2.svg"
              />
              <div className={styles.footerLink8}>Candidate Dashboard</div>
            </div>
            <div className={styles.footerLink9}>
              <img
                className={styles.fiarrowRightIcon4}
                alt=""
                src="/fiarrowright2.svg"
              />
              <div className={styles.footerLink10}>Saved Jobs</div>
            </div>
          </div>
        </div>
        <div className={styles.employers}>
          <div className={styles.employers1} style={employersStyle}>
            Employers
          </div>
          <div className={styles.link2}>
            <div className={styles.footerLink11}>
              <img
                className={styles.fiarrowRightIcon5}
                alt=""
                src="/fiarrowright2.svg"
              />
              <div className={styles.footerLink12}>Post a Job</div>
            </div>
            <div className={styles.footerLink13}>
              <img
                className={styles.fiarrowRightIcon6}
                alt=""
                src="/fiarrowright2.svg"
              />
              <div className={styles.footerLink14}>Browse Candidates</div>
            </div>
            <div className={styles.footerLink15}>
              <img
                className={styles.fiarrowRightIcon7}
                alt=""
                src="/fiarrowright2.svg"
              />
              <div className={styles.employersDashboard}>
                Employers Dashboard
              </div>
            </div>
            <div className={styles.footerLink16}>
              <img
                className={styles.fiarrowRightIcon8}
                alt=""
                src="/fiarrowright2.svg"
              />
              <div className={styles.footerLink17}>Applications</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
