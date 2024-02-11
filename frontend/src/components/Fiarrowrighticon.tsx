import { FunctionComponent } from "react";
import Candidate1 from "./Candidate1";
import Candidate from "./Candidate";
import styles from "./Fiarrowrighticon.module.css";

const Fiarrowrighticon: FunctionComponent = () => {
  return (
    <div className={styles.fiarrowrighticon}>
      <div className={styles.iconbutton}>
        <div className={styles.heading}>
          <h3 className={styles.savedCadidates}>Saved Cadidates</h3>
          <div className={styles.headingChild} />
        </div>
      </div>
      <Candidate1
        guyHawkins="Guy Hawkins"
        uXDesigner="Techical Support Specialist"
        mapPin="pending_47:9541"
        losAngales="  "
        stack="pending_47:9546"
      />
      <div className={styles.primaryButton}>
        <Candidate
          jacobJones="Jacob Jones"
          uXDesigner="Product Designer"
          mapPin="pending_47:9359"
          stack="pending_47:9364"
        />
        <Candidate
          jacobJones="Jacob Jones"
          uXDesigner="Product Designer"
          mapPin="pending_47:9450"
          stack="pending_47:9455"
        />
        <Candidate
          jacobJones="Robert Fox"
          uXDesigner="Marketing Manager"
          mapPin="pending_47:9632"
          stack="pending_47:9637"
        />
        <Candidate1
          guyHawkins="Kathryn Murphy"
          uXDesigner="Junior Graphic Designer"
          mapPin="pending_47:9723"
          losAngales="Khulna, Bangladesh"
          stack="pending_47:9728"
          propAlignSelf="unset"
          propFlexWrap="unset"
          propWidth="984px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <Candidate1
          guyHawkins="Darlene Robertson"
          uXDesigner="Visual Designer"
          mapPin="pending_47:9814"
          losAngales="Khulna, Bangladesh"
          stack="pending_47:9819"
          propAlignSelf="unset"
          propFlexWrap="unset"
          propWidth="984px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <Candidate1
          guyHawkins="Kristin Watson"
          uXDesigner="Senior UX Designer"
          mapPin="pending_47:9905"
          losAngales="Khulna, Bangladesh"
          stack="pending_47:9910"
          propAlignSelf="unset"
          propFlexWrap="unset"
          propWidth="984px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <Candidate1
          guyHawkins="Jenny Wilson"
          uXDesigner="Interaction Designer"
          mapPin="pending_47:9996"
          losAngales="Khulna, Bangladesh"
          stack="pending_47:10001"
          propAlignSelf="unset"
          propFlexWrap="unset"
          propWidth="984px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <Candidate1
          guyHawkins="Marvin McKinney"
          uXDesigner="Networking Engineer"
          mapPin="pending_47:10087"
          losAngales="Khulna, Bangladesh"
          stack="pending_47:10092"
          propAlignSelf="unset"
          propFlexWrap="unset"
          propWidth="984px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <Candidate1
          guyHawkins="Theresa Webb"
          uXDesigner="Software Engineer"
          mapPin="pending_47:10178"
          losAngales="Khulna, Bangladesh"
          stack="pending_47:10183"
          propAlignSelf="unset"
          propFlexWrap="unset"
          propWidth="984px"
          propFlex="unset"
          propMinWidth="unset"
        />
      </div>
    </div>
  );
};

export default Fiarrowrighticon;
