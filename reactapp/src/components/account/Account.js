import React from "react";
import styles from "../../styles/Account.module.scss";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import { Link } from "react-router-dom";

function Account() {
  if (localStorage["score"] >= 0) {
    return (
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className={styles.container}
      >
        <h1>
          Thank you for participating{" "}
          <span> {localStorage.getItem("username")}</span>
        </h1>
        <div className={styles.data}>
          <h4>
            You got <span>{localStorage.getItem("score")}</span> answers correct
            out of 10
          </h4>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className={styles.container}
      >
        You have not taken the test yet. <br /> Would you like to start now?
        <button className={styles.button}>
          <Link to={localStorage.getItem("username") ? "/quiz" : "/signup"}>
            Details
          </Link>{" "}
        </button>
      </motion.div>
    );
  }
}

export default Account;
