import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import Stats from "../components/Stats";
import styles from "./CandidateStats.module.css";

const CandidateStats: FunctionComponent = () => {
  return (
    <div className={styles.candidateDashboard}>
      <Navigation1 />
      <Stats />
    </div>
  );
};

export default CandidateStats;
