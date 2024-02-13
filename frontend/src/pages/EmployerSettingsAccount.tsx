import { FunctionComponent } from "react";
import Navigation10 from "../components/Navigation10";
import EmployersSettingsLine from "../components/EmployersSettingsLine";
import styles from "./EmployerSettingsAccount.module.css";

const EmployerSettingsAccount: FunctionComponent = () => {
  return (
    <div className={styles.employerSettingsAccount}>
      <Navigation10 />
      <EmployersSettingsLine />
    </div>
  );
};

export default EmployerSettingsAccount;
