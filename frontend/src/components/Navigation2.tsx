import { FunctionComponent } from "react";
import Navigation3 from "./Navigation3";
import styles from "./Navigation2.module.css";

const Navigation2: FunctionComponent = () => {
  return (
    <header className={styles.navigation}>
      <Navigation3 jobTitleKeywordPlaceholde="Job title, keyword, company" />
    </header>
  );
};

export default Navigation2;
