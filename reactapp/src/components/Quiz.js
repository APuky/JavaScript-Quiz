import React from "react";
import styles from "../styles/Quiz.module.scss";
import { Link } from "react-router-dom";

function Quiz() {
  return (
    <div className={styles.container}>
      <p> Welcome to the JavaScript quiz</p>
      <ul>
        {" "}
        In this quiz you will be able to:
        <li>test your fundamental skills of JavaScript with 10 questions</li>
        <li>test your understanding of ECMAScript6</li>
        <li>see how you rank on global scoreboard</li>
        <li>learn more about JavaScript</li>
      </ul>
      <p>For each question there will be 2 minutes available</p>
      <p>There is only 1 try so be ready to take few minutes to complete it</p>
      <button>
        <Link to="/questions">Start</Link>{" "}
      </button>
    </div>
  );
}

export default Quiz;
