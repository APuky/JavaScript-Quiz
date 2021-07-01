import React from "react";
import styles from "../../styles/Account.module.scss";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

function Account() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <h1>"Username logic"</h1>
      <div className={styles.data}>
        <h4>email: "need data"</h4>
        <h4>Score: "need data"</h4>
        If test was not taken then offer an option to go to quiz
      </div>
    </motion.div>
  );
}

export default Account;
