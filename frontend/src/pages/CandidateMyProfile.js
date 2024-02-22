import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import CandidateSettings from "../components/CandidateSettings";
import styles from "./CandidateMyProfile.module.css";

const CandidateMyProfile = () => {
  const [fullName, setFullName] = useState("default");
  return (
    <div className={styles.candidateMyProfile}>
      <Navigation1 fullName={fullName} />
      <section className={styles.candidateSettingsWrapper}>
        <CandidateSettings />
      </section>
    </div>
  );
};

export default CandidateMyProfile;
