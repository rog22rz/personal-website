import { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import JobComponentModal from "./JobComponentModal";
import styles from "@/styles/JobComponent.module.css";

function JobComponent(props) {
  const { date, location, jobTitle, company, description, techStack } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => {!isModalOpen && setIsModalOpen(true)};
  const handleClose = () => setIsModalOpen(false);

  return (
    <div class={styles.container} onClick={handleOpen}>
      <JobComponentModal isOpen={isModalOpen} handleClose={handleClose} jobDetails={props}/>
      <div class={styles.dateAndLocation}>
        <CalendarMonthIcon />
        <div class={styles.date}>{date}</div>
        <div class={styles.location}>{location}</div>
      </div>
      <div class={styles.jobTitle}>{jobTitle}</div>
      <div class={styles.company}>{company}</div>
      <div class={styles.jobDescription}>{description}</div>
      <div class={styles.techStack}>
        {techStack && techStack.map((tech) => <span key={tech}>{tech} | </span>)}
      </div>
    </div>
  );
}

export default JobComponent;
