import { FunctionComponent } from "react";
import styles from "./FeaturedJob.module.css";

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
};

export type FeaturedJobProps = {
  jobsYouMightLike: string;
  featuredJobs: Job[];
};

const FeaturedJob: FunctionComponent<FeaturedJobProps> = ({
  jobsYouMightLike,
  featuredJobs,
}) => {
  return (
    <section className={styles.featuredJob}>
      <div className={styles.heading}>
        <h1 className={styles.jobsYouMight}>{jobsYouMightLike}</h1>
        <button className={styles.button}>
          <div className={styles.primary}>View All</div>
          <img
            className={styles.fiarrowRightIcon}
            alt=""
            src="/fiarrowright3.svg"
          />
        </button>
      </div>
      <div className={styles.jobsContainer}>
        {featuredJobs.map((job) => (
          <div key={job.id} className={styles.job}>
            <div className={styles.heading1}>
              <div className={styles.jobTitle}>{job.title}</div>
              <div className={styles.locationTypeSalary}>
                <div className={styles.type}>{job.type}</div>
                <div className={styles.salary}>{job.salary}</div>
              </div>
            </div>
            <div className={styles.company}>
              <div className={styles.info}>
                <div className={styles.companyName}>{job.company}</div>
                <div className={styles.location}>
                  <img
                    className={styles.mappinIcon}
                    loading="eager"
                    alt=""
                    src="/mappin.svg"
                  />
                  <div className={styles.locationName}>{job.location}</div>
                </div>
              </div>
              <img
                className={styles.bookmarkIcon}
                loading="eager"
                alt=""
                src="/bookmarksimple.svg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJob;
