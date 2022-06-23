import React from 'react'
import { motion } from 'framer-motion'
import { pageAnimation } from './Animation'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import TestSvg from './svgs/TestSvg'
import LearnSvg from './svgs/LearnSvg'
import EntertainSvg from './svgs/EntertainSvg'
import RankSvg from './svgs/RankSvg'
import LoadingSpinner from '../shared/UIElements/LoadingSpinner/LoadingSpinner'
import { useHttp } from '../shared/hooks/http-hook'
import { userDataActions } from '../shared/store/userDataSlice'

import styles from '../styles/Quiz.module.scss'

function Quiz() {
  const { quizTaken, token, uid } = useSelector((s) => s.userData)
  const { sendRequest, isLoading, error } = useHttp()
  const dispatch = useDispatch()
  const history = useHistory()

  const quizTakenHandler = async () => {
    if (quizTaken) return alert('Quiz already taken')
    else {
      history.push('/questions')
      const data = {
        uid,
        flag: 'QUIZ_TAKEN',
      }
      try {
        await sendRequest('users/update_quiz_status', 'PATCH', data, {
          Authorization: `Bearer ${token}`,
        })
        dispatch(userDataActions.updateData(data))
      } catch (e) {}
    }
  }

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className={styles.container}
      >
        <h1>
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
          <div onClick={() => quizTakenHandler()}>Start</div>{' '}
        </button>
        {error && <div className={styles.incorrect}>{error}</div>}
      </motion.div>
    </>
  )
}

export default Quiz
