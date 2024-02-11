import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import CandidateSettings from "../components/CandidateSettings";
import styles from "./CandidateMyProfile.module.css";

const CandidateMyProfile: FunctionComponent = () => {
  return (
    <div className={styles.candidateMyProfile}>
      <Navigation1 />
      <section className={styles.candidateSettingsWrapper}>
        <CandidateSettings />
      </section>
    </div>
  );
};

export default CandidateMyProfile;
