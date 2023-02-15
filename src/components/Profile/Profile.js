import Avatar from "@mui/material/Avatar";
import styles from "@/styles/Profile.module.css";

function Profile() {
  return (
    <div class={styles.container}>
      <Avatar
        alt="Roger Zhang Smiling"
        src={"/ProfilePic.jpg"}
        sx={{ width: 300, height: 300 }}
      />
      <div class={styles.name}>
        <h1>Roger Zhang</h1>
        <h2>
          <span>SDE @ Publicis Sapient</span>
        </h2>
      </div>
    </div>
  );
}

export default Profile;
