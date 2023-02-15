import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import JobComponentModal from "./JobComponentModal";
import styles from "@/styles/JobComponent.module.css";

function JobComponent(props) {
  const { date, location, jobTitle, company, description, techStack } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => {!isModalOpen && setIsModalOpen(true)};
  const handleClose = () => setIsModalOpen(false);

  return (
    <div className={styles.container} onClick={handleOpen}>
      <JobComponentModal isOpen={isModalOpen} handleClose={handleClose} jobDetails={props}/>
      <div className={styles.dateAndLocation}>
        <CalendarMonthIcon />
        <div className={styles.date}>{date}</div>
        <div className={styles.location}>{location}</div>
      </div>
      <div className={styles.jobTitle}>{jobTitle}</div>
      <div className={styles.company}>{company}</div>
      <div className={styles.jobDescription}>{description}</div>
      <div className={styles.techStack}>
        {techStack && techStack.map((tech) => <span key={tech}>{tech} | </span>)}
      </div>
    </div>
  );
}

export default JobComponent;
