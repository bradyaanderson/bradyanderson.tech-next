import styles from "../styles/home.module.scss";

function Error() {
  return (
    <div className={styles.homeContainer}>
      <h1>500 - Server-side error occurred</h1>
    </div>
  );
}

export default Error;
