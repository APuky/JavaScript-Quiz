import React from "react";
import styles from "../styles/Quiz.module.scss";
import { Link } from "react-router-dom";
import TestSvg from "./svgs/TestSvg";
import LearnSvg from "./svgs/LearnSvg";
import EntertainSvg from "./svgs/EntertainSvg";
import RankSvg from "./svgs/RankSvg";

function Quiz() {
  return (
    <div className={styles.container}>
      <h1>
        {" "}
        Welcome To The <span>J</span>ava<span>S</span>cript Quiz
      </h1>
      <div className={styles.about}>
        <div className={styles.about_box}>
          <TestSvg />
          <li>test your fundamental skills of JavaScript with 10 questions</li>
        </div>
        <div className={styles.about_box}>
          <LearnSvg />
          <li>learn more about JavaScript</li>
        </div>
        <div className={styles.about_box}>
          <EntertainSvg />
          <li>Challenge yourself in Entertaining way</li>
        </div>
        <div className={styles.about_box}>
          <RankSvg />
          <li>see how you rank on global scoreboard</li>
        </div>
      </div>
      <p>For each question there will be 2 minutes available</p>
      <p>
        There is only 1 attempt so be ready to take few minutes to complete it
      </p>
      <button className={styles.button}>
        <Link to="/questions">Start</Link>{" "}
      </button>
    </div>
  );
}

export default Quiz;
