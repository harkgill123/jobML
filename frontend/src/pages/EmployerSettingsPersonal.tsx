import { FunctionComponent } from "react";
import Navigation9 from "../components/Navigation9";
import EmployersSettings from "../components/EmployersSettings";
import styles from "./EmployerSettingsPersonal.module.css";

const EmployerSettingsPersonal: FunctionComponent = () => {
  return (
    <div className={styles.employerSettingsPersonal}>
      <Navigation9 />
      <section className={styles.employersSettingsWrapper}>
        <EmployersSettings />
      </section>
    </div>
  );
};

export default EmployerSettingsPersonal;
