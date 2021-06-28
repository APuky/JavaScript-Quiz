import React from "react";
import styles from "../styles/Questions.module.scss";

function SelectButton({ ans, answerHandler }) {
  return (
    <button
      className={styles.select}
      onClick={() => {
        answerHandler(ans.isCorrect);
      }}
    >
      <section className={styles.line}></section>
    </button>
  );
}

export default SelectButton;
