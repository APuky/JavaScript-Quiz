import React from "react";
import styles from "../styles/Quiz.module.scss";
import { Link } from "react-router-dom";
import TestSvg from "./svgs/TestSvg";
import LearnSvg from "./svgs/LearnSvg";
import EntertainSvg from "./svgs/EntertainSvg";
import RankSvg from "./svgs/RankSvg";
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";

function Quiz() {
  if (localStorage.getItem("score")) {
    return (
      <div className={styles.test_taken}>
        <h2>
          Test already taken. Thank you for the participation{" "}
          <span> {localStorage.getItem("username")}</span>
        </h2>
      </div>
    );
  } else {
    return (
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className={styles.container}
      >
        <h1>
          {" "}
          Welcome To The <span>J</span>ava<span>S</span>cript Quiz
        </h1>
        <div className={styles.about}>
          <div className={styles.about_box}>
            <TestSvg />
            <li>
              test your fundamental skills of JavaScript with 10 questions
            </li>
          </div>
          <div className={styles.about_box}>
            <LearnSvg />
            <li>learn more about JavaScript</li>
          </div>
          <div className={styles.about_box}>
            <EntertainSvg />
            <li>Challenge yourself in an Entertaining way</li>
          </div>
          <div className={styles.about_box}>
            <RankSvg />
            <li>see how you rank on the global scoreboard</li>
          </div>
        </div>
        <p>You will have 2 minutes to answer a question</p>
        <p>You only get 1 attempt per quiz so don't rush it!</p>
        <button className={styles.button}>
          <Link to="/questions">Start</Link>{" "}
        </button>
      </motion.div>
    );
  }
}

export default Quiz;
