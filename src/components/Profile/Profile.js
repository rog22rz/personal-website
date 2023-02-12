import Avatar from "@mui/material/Avatar";
import styles from "@/styles/Profile.module.css";

function Profile() {
  return (
    <div class={styles.container}>
      <Avatar
        alt="Roger Zhang"
        src={"/ProfilePic.jpg"}
        sx={{ width: 400, height: 400 }}
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
