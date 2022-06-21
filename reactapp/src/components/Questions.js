import React, { useState, useEffect } from 'react'
import { questions } from './QuestionsData'
import styles from '../styles/Questions.module.scss'
import SelectButton from './SelectButton'
import { motion } from 'framer-motion'
import { pageAnimation } from './Animation'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Questions() {
  let history = useHistory()
  const [isAnswerCorrect, setIsAnswerCorrect] = useState('')
  const [correctAnswerNumber, setCorrectAnswerNumber] = useState('')
  const [selectedAnswerBoolean, setSelectedAnswerBoolean] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isAnswerSelected, setIsAnswerSelected] = useState(styles.btn_opacity)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [minutes, setMinutes] = useState(2)

  useEffect(() => {
    questions[currentQuestion].answersAll.find((ans, index) => {
      return ans.isCorrect === true ? setCorrectAnswerNumber(index + 1) : null
    })
  }, [currentQuestion])

  useEffect(() => {
    if (selectedAnswerBoolean === '') {
      return
    } else setIsAnswerSelected(styles.btn)
  }, [selectedAnswerBoolean])

  useEffect(() => {
    if (minutes === 0 && timeLeft === 0) {
      setSelectedAnswerBoolean(false)
      setIsAnswerCorrect(false)
      submitHandler()
    }

    if (timeLeft === 0 && minutes) {
      setMinutes(minutes - 1)
      setTimeLeft(59)
    } else if (!timeLeft) return

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft])

  const answerHandler = (answer) => {
    answer === true
      ? setSelectedAnswerBoolean(true)
      : setSelectedAnswerBoolean(false)
  }

  const submitHandler = () => {
    if (selectedAnswerBoolean === '') {
      return
    } else if (selectedAnswerBoolean === true) {
      setCorrectAnswers(correctAnswers + 1)
      setIsAnswerCorrect(true)
    } else {
      setIsAnswerCorrect(false)
    }
  }

  const nextQuestionHandler = () => {
    const token = localStorage.getItem('token')

    if (currentQuestion >= questions.length - 1) {
      localStorage.setItem('score', correctAnswers)
      const data = {
        score: correctAnswers,
        quizTaken: 1,
      }
      const promise = axios.patch(
        'http://127.0.0.1:8000/api/users/auth/user/',
        data,
        {
          headers: { Authorization: `Token ${token}` },
        },
      )
      history.push('/account')
      return promise
    } else {
      setCurrentQuestion(currentQuestion + 1)
      setIsAnswerCorrect('')
      setCorrectAnswerNumber('')
      setSelectedAnswerBoolean('')
    }

    setTimeLeft(59)
    setMinutes(1)
  }

  // eslint-disable-next-line eqeqeq
  if (localStorage['quizTaken'] == 1) {
    return <h2>Test already taken</h2>
  } else {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          Question <span>{currentQuestion + 1}</span>
          <p>
            {correctAnswers}/{currentQuestion + 1}
          </p>
        </h1>
        <div className={styles.description}>
          {questions[currentQuestion].description}
        </div>
        <div className={styles.variables}>
          {questions[currentQuestion].variables.map((vars) => (
            <div key={vars.id}>
              <p>{vars.variable}</p>
            </div>
          ))}
        </div>
        <motion.div
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          className={styles.answers}
        >
          {questions[currentQuestion].answersAll.map((ans) => (
            <div key={ans.id}>
              <div className={styles.answer}>
                <p>{ans.answer}</p>
                <SelectButton ans={ans} answerHandler={answerHandler} />
              </div>
            </div>
          ))}
        </motion.div>
        {isAnswerCorrect === false && (
          <div className={styles.response}>
            <p> Correct answer is {correctAnswerNumber}</p>
            <span>{questions[currentQuestion].explanation}</span>
          </div>
        )}
        {isAnswerCorrect === true && <h3>Correct!</h3>}
        {isAnswerCorrect === '' ? (
          <div className={styles.submitting}>
            <button
              className={isAnswerSelected}
              onClick={() => submitHandler()}
            >
              Submit
            </button>
            <div className={styles.timer}>
              0{minutes}:{timeLeft >= 10 ? timeLeft : `0${timeLeft}`}
            </div>
          </div>
        ) : (
          <button className={styles.btn} onClick={() => nextQuestionHandler()}>
            Next
          </button>
        )}
      </div>
    )
  }
}

export default Questions
