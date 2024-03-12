import { FunctionComponent } from "react";
import { useLocation , useNavigate} from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import Footer from "../components/Footer";
import styles from "./CandidateSearchPage.module.css";

const CandidateSearchPage: FunctionComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const jobs = location.state?.jobs || [];
  const searchQuery = location.state?.searchQuery;

  const viewJob = (jobId: number, job: any) => {
    // This will navigate to a new route and add the job ID to the URL path.
    // It will also pass the job data to the route so it can be displayed on the next page.
    navigate(`/job/${jobId}`, { state: { job } });
  };

  return (
    <div className={styles.candidateSearchPage}>
      <Navigation1 />
      <div className={styles.jobListingsContainer}>
      <h1 className={styles.searchResultsTitle}>Search results for "{searchQuery}"</h1>
        {jobs.map((job: any) => (
          <div key={job.id} className={styles.jobCard}>
            <div>
              <h2 className={styles.jobTitle}>{job.title}</h2>
              <div className={styles.jobDetails}>
                <span className={styles.companyName}>{job.company_name}</span>
                <span className={styles.location}>{job.location}</span>
              </div>
            </div>
            <button
              className={styles.viewJobButton}
              onClick={() => viewJob(job.id, job)}
            >
              View Job
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CandidateSearchPage;


