import { FunctionComponent } from "react";
import Navigation8 from "../components/Navigation8";
import Sidebar from "../components/Sidebar";
import Fiarrowrighticon from "../components/Fiarrowrighticon";
import styles from "./EmployerSavedCandidates.module.css";

const EmployerSavedCandidates: FunctionComponent = () => {
  return (
    <div className={styles.employerSavedCandidates}>
      <Navigation8 />
      <div className={styles.employerSavedCandidatesChild} />
      <div className={styles.employerSavedCandidatesItem} />
      <div className={styles.employerSavedCandidatesInner} />
      <div className={styles.lineDiv} />
      <div className={styles.employerSavedCandidatesChild1} />
      <div className={styles.employerSavedCandidatesChild2} />
      <section className={styles.sidebarframe}>
        <Sidebar />
        <div className={styles.primarycolorbutton}>
          <Fiarrowrighticon />
        </div>
      </section>
    </div>
  );
};

export default EmployerSavedCandidates;
