import { FunctionComponent } from "react";
import Navigation11 from "../components/Navigation11";
import MainFrame from "../components/MainFrame";
import styles from "./SignIn.module.css";

const SignIn: FunctionComponent = () => {
  return (
    <div className={styles.signIn}>
      <Navigation11 />
      <MainFrame />
    </div>
  );
};

export default SignIn;
