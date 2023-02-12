import Avatar from "@mui/material/Avatar";
import styles from "@/styles/Profile.module.css";

function Profile() {
  return (
    <div class={styles.container}>
      <Avatar
        alt="Roger Zhang"
        src={"/ProfilePic.jpg"}
        sx={{ width: 200, height: 200 }}
      />
      <h1 class={styles.name}>Roger Zhang</h1>
      <h2 class={styles.title}>
        <span class={styles.titleWord1}>SDE</span>{" "}
        <span class={styles.titleWord2}>@</span>{" "}
        <span class={styles.titleWord3}>Publicis Sapient</span>
      </h2>
    </div>
  );
}

export default Profile;
