import { FunctionComponent } from "react";
import Navigation6 from "../components/Navigation6";
import CandidateSettings1 from "../components/CandidateSettings1";
import styles from "./CandidateSettingAccount.module.css";

const CandidateSettingAccount: FunctionComponent = () => {
  return (
    <div className={styles.candidateSettingAccount}>
      <Navigation6 />
      <section className={styles.candidateSettingsWrapper}>
        <CandidateSettings1 />
      </section>
    </div>
  );
};

export default CandidateSettingAccount;
