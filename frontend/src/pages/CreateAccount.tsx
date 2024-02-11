import { FunctionComponent } from "react";
import MainFrame1 from "../components/MainFrame1";
import CreateFrame from "../components/CreateFrame";
import styles from "./CreateAccount.module.css";

const CreateAccount: FunctionComponent = () => {
  return (
    <div className={styles.candidateCreateAccount}>
      <MainFrame1 />
      <CreateFrame />
    </div>
  );
};

export default CreateAccount;
