import Avatar from "@mui/material/Avatar";
import styles from "@/styles/Profile.module.css";

function Profile() {
  return (
    <div className={styles.container}>
      <Avatar
        alt="Roger Zhang Smiling"
        src={"/ProfilePic.jpg"}
        sx={{ width: 300, height: 300 }}
      />
      <div className={styles.name}>
        <h1>Roger Zhang</h1>
        <h2>
          <span>SDE @ Wayfair</span>
        </h2>
      </div>
    </div>
  );
}

export default Profile;
