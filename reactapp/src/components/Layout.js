import React from "react";
import styles from "../styles/Landing.module.scss";

function Layout(props) {
  return (
    <div className={styles.container}>
      <div className={styles.relative_container}>{props.children}</div>
    </div>
  );
}

export default Layout;
