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
    <div class={styles.container} onClick={handleOpen}>
      <ProjectComponentModal isOpen={isModalOpen} handleClose={handleClose} projectDetails={props}/>
      <div className={styles.topRow}>
        <div class={styles.dateContainer}>
          <CalendarMonthIcon />
          <div class={styles.date}>{date}</div>
        </div>
        <div className={styles.githubLink}>
          {githubLink && <Link href={githubLink} target="_blank">
              <GitHubIcon fontSize="medium" />
          </Link>}
        </div>
      </div>
      <div class={styles.name}>{name}</div>
      <div class={styles.description}>{description}</div>
      <div class={styles.techStack}>
        {techStack && techStack.map((tech) => <span key={tech}>{tech} | </span>)}
      </div>
    </div>
  );
}

export default ProjectComponent;
