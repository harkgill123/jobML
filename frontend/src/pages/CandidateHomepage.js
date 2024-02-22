import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import SiteLogo from "../components/SiteLogo";
import FeaturedJob from "../components/FeaturedJob";
import Category from "../components/Category";
import Footer from "../components/Footer";
import styles from "./CandidateHomepage.module.css";

const CandidateHomepage = () => {

  const [fullName, setFullName] = useState("default");
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    const fetchFullName = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
         //Redirect to sign-in page if token is missing
        navigate("/");
        return;
      }

      try {
        const decoded = jwtDecode(token);
        const response = await fetch(`http://backend-url/users/${decoded.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        //setFullName(data.fullName);
      } catch (error) {
        console.error("There was a problem fetching user data:", error);
        //navigate("/");
      }
    };

    fetchFullName();
    
  })


  return (
    <div className={styles.candidateHomepage}>
      <Navigation1 fullName={fullName} />
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
