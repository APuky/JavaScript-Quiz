import React, { useState, useEffect, useRef } from "react";
import { questions } from "./QuestionsData";
import styles from "../styles/Questions.module.scss";
import SelectButton from "./SelectButton";

function Questions() {
  const notInitialRender = useRef(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState("");
  const [submitStyle, setSubmitStyle] = useState(styles.btn);
  const [correctAnswerNumber, setCorrectAnswerNumber] = useState("");
  const [selectedAnswerBoolean, setSelectedAnswerBoolean] = useState("");

  useEffect(() => {
    questions[0].answersAll.find((ans, index) => {
      return ans.isCorrect === true ? setCorrectAnswerNumber(index + 1) : null;
    });
  }, []);

  const answerHandler = (answer) => {
    answer === true
      ? setSelectedAnswerBoolean(true)
      : setSelectedAnswerBoolean(false);
  };

  useEffect(() => {
    if (notInitialRender.current) {
      isAnswerCorrect === true
        ? setSubmitStyle(styles.correct)
        : setSubmitStyle(styles.false);
    } else {
      notInitialRender.current = true;
    }
  }, [isAnswerCorrect]);

  const submitHandler = () => {
    selectedAnswerBoolean === true
      ? setIsAnswerCorrect(true)
      : setIsAnswerCorrect(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Question <span>1</span>
      </h1>
      <div className={styles.description}>{questions[0].description}</div>
      <div className={styles.variables}>
        {questions[0].variables.map((variable) => (
          <div key={Math.random()}>
            <p>{variable}</p>
          </div>
        ))}
      </div>
      <div className={styles.answers}>
        {questions[0].answersAll.map((ans) => (
          <div key={ans.id}>
            <div className={styles.answer}>
              <p> {ans.answer}</p>
              <SelectButton ans={ans} answerHandler={answerHandler} />
            </div>
          </div>
        ))}
      </div>
      {isAnswerCorrect === false ? (
        <p className={styles.response}>
          Correct answer is {correctAnswerNumber}
        </p>
      ) : isAnswerCorrect === true ? (
        "Correct!"
      ) : (
        <button className={submitStyle} onClick={() => submitHandler()}>
          Submit
        </button>
      )}
    </div>
  );
}

export default Questions;
