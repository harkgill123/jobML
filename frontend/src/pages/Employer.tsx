import { FunctionComponent } from "react";
import SiteLogo from "../components/SiteLogo";
import FeaturedJob from "../components/FeaturedJob";
import Footer from "../components/Footer";
import styles from "./EmployerHomepage.module.css";
import Navigation2 from "../components/Navigation2";

const EmployerHomepage: FunctionComponent = () => {
  return (
    <div className={styles.employerHomepage}>
      <Navigation2 />
      <SiteLogo
        findAJobThatSuitsYourInte="Find a candidate that suits your needs."
        jobTittleKeywordPlacehold="Skills"
        propMinWidth="63px"
        propWidth="39px"
      />

      <Footer propMargin="unset" propMargin1="unset" propMargin2="unset" />
    </div>
  );
};

export default EmployerHomepage;
