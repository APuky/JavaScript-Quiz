import React from "react";
import styles from "../styles/Landing.module.scss";

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.left}>Red BG</div>
        <div className={styles.right_triangle}></div>
      </div>
    </div>
  );
}

export default Main;
