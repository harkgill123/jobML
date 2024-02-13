import { FunctionComponent } from "react";
import Navigation4 from "../components/Navigation4";
import Location1 from "../components/Location1";
import FrameComponent from "../components/FrameComponent";
import BookmarkSimple from "../components/BookmarkSimple";
import Footer1 from "../components/Footer1";
import styles from "./CandidateSearchPage.module.css";

const CandidateSearchPage: FunctionComponent = () => {
  return (
    <div className={styles.candidateSearchPage}>
      <Navigation4 />
      <div className={styles.headerGroup}>
        <div className={styles.breadcrumb}>
          <div className={styles.label}>Find Job</div>
          <div className={styles.process}>
            <div className={styles.label1}>Home</div>
            <div className={styles.badge}>/</div>
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
      <Location1 />
      <FrameComponent />
      <main className={styles.bookmarkSimpleWrapper}>
        <BookmarkSimple />
      </main>
      <Footer1 propMargin="0" propMargin1="0" propMargin2="0" />
    </div>
  );
};

export default CandidateSearchPage;
