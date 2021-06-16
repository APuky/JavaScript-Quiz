import React from "react";
import styles from "../styles/Landing.module.scss";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div className={styles.container}>
      <div className={styles.relative_container}>
        <Navbar />
        <div> {props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
