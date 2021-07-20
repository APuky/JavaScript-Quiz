import React from "react";
import styles from "../../styles/Account.module.scss";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

function Account() {
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
          You scored <span>{localStorage.getItem("score")}</span> correct
          answers
        </h4>
      </div>
    </motion.div>
  );
}

export default Account;
