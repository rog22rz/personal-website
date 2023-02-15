import styles from "@/styles/ProjectComponentModal.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#00061d",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ProjectComponentModal(props) {
  const { isOpen, handleClose, projectDetails } = props;
  const { date, name, githubLink, descriptionListForm, techStack } =
    projectDetails;

  return (
    <div className={styles.container}>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.container}>
            <div className={styles.closeIcon} onClick={handleClose}>
              <CloseIcon />
            </div>
            <div className={styles.dateContainer}>
              <div className={styles.dateAndIcon}>
                <CalendarMonthIcon />
                <div className={styles.date}>{date}</div>
              </div>
              <div className={styles.githubLink}>
                {githubLink && (
                  <Link className={styles.githubIcon} href={githubLink} target="_blank">
                    <GitHubIcon fontSize="medium" />
                  </Link>
                )}
              </div>
            </div>
            <div className={styles.projectTitle}>{name}</div>
            <div className={styles.projectDescription}>
              <ul>
                {descriptionListForm.map((item) => {
                  return <li key={item.key}>{item.item}</li>;
                })}
              </ul>
            </div>
            <div className={styles.techStack}>
              {techStack &&
                techStack.map((tech) => <span key={tech}>{tech} | </span>)}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ProjectComponentModal;
