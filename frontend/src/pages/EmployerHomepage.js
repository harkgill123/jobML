import { FunctionComponent } from "react";
import SiteLogo2 from "../components/SiteLogo2";
import FeaturedJob from "../components/FeaturedJob";
import Footer from "../components/Footer";
import styles from "./EmployerHomepage.module.css";
import Navigation2 from "../components/Navigation2";

const EmployerHomepage = () => {
  return (
    <div className={styles.employerHomepage}>
      <Navigation2 />
      <SiteLogo2
        findAJobThatSuitsYourInte="Find a candidate that suits your needs."
      />
      
      <Footer propMargin="unset" propMargin1="unset" propMargin2="unset" />
    </div>
  );
};

export default EmployerHomepage;
