import { FunctionComponent } from "react";
import Navigation7 from "./Navigation7";
import styles from "./Navigation9.module.css";

const Navigation9: FunctionComponent = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.navigation1}>
        <div className={styles.navigation2}>
          <Navigation7
            jobTitleKeywordPlaceholde="Skills, keyword"
            frameDivWidth="112px"
          />
        </div>
      </div>
    </header>
  );
};

export default Navigation9;
