import { useState } from "react";
import styles from "@/styles/JobComponentModal.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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

function JobComponentModal(props) {
  const { isOpen, handleClose, jobDetails } = props;
  const { date, location, jobTitle, company, descriptionListForm, techStack } =
    jobDetails;

  return (
    <div class={styles.container}>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div class={styles.container}>
            <div class={styles.closeIcon} onClick={handleClose}>
              <CloseIcon />
            </div>
            <div class={styles.dateAndLocation}>
              <CalendarMonthIcon />
              <div class={styles.date}>{date}</div>
              <div class={styles.location}>{location}</div>
            </div>
            <div class={styles.jobTitle}>{jobTitle}</div>
            <div class={styles.company}>{company}</div>
            <div class={styles.jobDescription}>
              <ul>
                {descriptionListForm.map((item) => {
                  return <li key={item.key}>{item.item}</li>;
                })}
              </ul>
            </div>
            <div class={styles.techStack}>
              {techStack &&
                techStack.map((tech) => <span key={tech}>{tech} | </span>)}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default JobComponentModal;
