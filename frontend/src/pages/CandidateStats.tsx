import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import Stats from "../components/Stats";
import MapComponent from "../components/MapComponent"; // Import the MapComponent
import styles from "./CandidateStats.module.css";

const CandidateStats: FunctionComponent = () => {
  return (
    <>
      <Navigation1 />
      <h1 className={styles.searchResultsTitle}>Statistics</h1>
      <div className={styles.candidateDashboard}>
        <Stats />
        <MapComponent /> {styles.mapContainer}
      </div>
    </>
  );
};

export default CandidateStats;
