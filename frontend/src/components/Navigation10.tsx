import { FunctionComponent } from "react";
import Navigation3 from "./Navigation3";
import styles from "./Navigation10.module.css";

const Navigation10: FunctionComponent = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.navigation1}>
        <div className={styles.navigation2}>
          <div className={styles.navigation3}>
            <Navigation3
              jobTitleKeywordPlaceholde="Skills, keyword"
              frameWithMyProfileTextWidth="112px"
              frameWithLogoutTextPadding="0px var(--padding-12xs) 0px 0px"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation10;
