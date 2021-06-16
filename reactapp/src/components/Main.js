import React from "react";
import styles from "../styles/Landing.module.scss";

function Main() {
  return (
    <>
      <div className={styles.title}>
        How well do you know <br /> <span>J</span>ava<span>S</span>cript?
        <h4>Test your knowledge with the challenge</h4>
      </div>
      <button style={{ marginLeft: "7rem", fontSize: "1.9rem" }}>
        Test Now
      </button>
    </>
  );
}

export default Main;
