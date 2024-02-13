import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import SiteLogo from "../components/SiteLogo";
import FeaturedJob from "../components/FeaturedJob";
import Category from "../components/Category";
import Footer from "../components/Footer";
import styles from "./CandidateHomepage.module.css";

const CandidateHomepage: FunctionComponent = () => {
  return (
    <div className={styles.candidateHomepage}>
      <Navigation1 />
      <SiteLogo
        findAJobThatSuitsYourInte={`Find a job that suits your interest & skills.`}
        jobTittleKeywordPlacehold="Job tittle, Keyword..."
      />
      <FeaturedJob
        jobsYouMightLike="Jobs you might like"
        googleInc="Google Inc."
        googleInc1="Google Inc."
        googleInc2="Google Inc."
        googleInc3="Google Inc."
        googleInc4="Google Inc."
        googleInc5="Google Inc."
        googleInc6="Google Inc."
        googleInc7="Google Inc."
        googleInc8="Google Inc."
        googleInc9="Google Inc."
        googleInc10="Google Inc."
        googleInc11="Google Inc."
      />
      <Category />
      <Footer />
    </div>
  );
};

export default CandidateHomepage;
