import { FunctionComponent } from "react";
import Navigation7 from "./Navigation7";
import styles from "./Navigation6.module.css";

const Navigation6: FunctionComponent = () => {
  return (
    <header className={styles.navigation}>
      <Navigation7 jobTitleKeywordPlaceholde="Job title, keyword, company" />
    </header>
  );
};

export default Navigation6;
