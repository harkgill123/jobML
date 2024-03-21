import { FunctionComponent } from "react";
import Navigation3 from "./Navigation3";
import styles from "./MainFrame1.module.css";

const MainFrame1: FunctionComponent = () => {
  return (
    <section className={styles.mainFrame}>
      <Navigation3 />
    </section>
  );
};

export default MainFrame1;
