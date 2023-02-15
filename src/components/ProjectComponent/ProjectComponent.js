import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "@/styles/ProjectComponent.module.css";
import ProjectComponentModal from "./ProjectComponentModal";

function ProjectComponent(props) {
  const { date, name, description, githubLink, techStack } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => {!isModalOpen && setIsModalOpen(true)};
  const handleClose = () => setIsModalOpen(false);

  return (
    <div className={styles.container} onClick={handleOpen}>
      <ProjectComponentModal isOpen={isModalOpen} handleClose={handleClose} projectDetails={props}/>
      <div className={styles.topRow}>
        <div className={styles.dateContainer}>
          <CalendarMonthIcon />
          <div className={styles.date}>{date}</div>
        </div>
        <div className={styles.githubLink}>
          {githubLink && <Link href={githubLink} target="_blank" aria-label="To learn more, visit project github page">
              <GitHubIcon fontSize="medium" />
          </Link>}
        </div>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.techStack}>
        {techStack && techStack.map((tech) => <span key={tech}>{tech} | </span>)}
      </div>
    </div>
  );
}

export default ProjectComponent;
