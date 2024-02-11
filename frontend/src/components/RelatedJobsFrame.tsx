import { FunctionComponent } from "react";
import Job from "./Job";
import styles from "./RelatedJobsFrame.module.css";

const RelatedJobsFrame: FunctionComponent = () => {
  return (
    <section className={styles.relatedJobsFrame}>
      <div className={styles.reletedJobs}>
        <h1 className={styles.relatedJobs}>Related Jobs</h1>
        <div className={styles.jobInteractionDesignerFrame}>
          <Job
            interactionDesigner="Techical Support Specialist"
            partTime="Part-time"
          />
          <Job interactionDesigner="Senior UX Designer" partTime="Full-Time" />
          <Job interactionDesigner="Marketing Officer" partTime="Internship" />
          <Job
            interactionDesigner="Junior Graphic Designer"
            partTime="Internship"
          />
          <Job
            interactionDesigner="Interaction Designer"
            partTime="Part-time"
          />
          <Job interactionDesigner="Project Manager" partTime="Full-Time" />
        </div>
      </div>
    </section>
  );
};

export default RelatedJobsFrame;
