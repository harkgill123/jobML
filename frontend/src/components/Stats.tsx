import { FunctionComponent } from "react";
import styles from "./Stats.module.css";

const Stats: FunctionComponent = () => {
  return (
    <section className={styles.newJobPostingsFunFacts}>
      <div className={styles.totalFeedbackFunFacts}>
        <div className={styles.statisticsParent}>
          <div className={styles.statistics}>Statistics</div>
          <div className={styles.newJobPostings}>
            <div className={styles.funFacts}>
              <div className={styles.div}>589</div>
              <div className={styles.appliedJobs}>Applied jobs</div>
            </div>
            <div className={styles.funFacts1}>
              <div className={styles.div1}>238</div>
              <div className={styles.likedJobs}>Liked jobs</div>
            </div>
            <div className={styles.funFacts2}>
              <div className={styles.div2}>574</div>
              <div className={styles.openHiringPositions}>
                Open hiring positions
              </div>
            </div>
          </div>
        </div>
        <div className={styles.funFactsParent}>
          <div className={styles.funFacts3}>
            <div className={styles.newJobPostings1}>589</div>
            <div className={styles.companiesHiring}>Companies hiring</div>
          </div>
          <div className={styles.funFacts4}>
            <div className={styles.div3}>238</div>
            <div className={styles.newJobPostings2}>New job postings</div>
          </div>
          <div className={styles.funFacts5}>
            <div className={styles.div4}>574</div>
            <div className={styles.totalFeedback}>Total feedback</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
