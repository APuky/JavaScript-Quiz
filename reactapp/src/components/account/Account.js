import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'

import { pageAnimation } from '../Animation'
import { authActions } from '../../shared/store/authSlice'

import styles from '../../styles/Account.module.scss'

function Account() {
  const { quizTaken, score, username } = useSelector((s) => s.userData)
  const { isLoggedIn } = useSelector((s) => s.auth)
  const dispatch = useDispatch()

  if (quizTaken) {
    return (
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className={styles.container}
      >
        <h1>
          Thank you for participating <span>{username}</span>
        </h1>
        <div className={styles.data}>
          <h4>
            You got <span>{score}</span> answers correct out of 10
          </h4>
        </div>
      </motion.div>
    )
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
          <Link
            onClick={() => dispatch(authActions.isLogging())}
            to={isLoggedIn ? '/quiz' : '/login'}
          >
            Details
          </Link>
        </button>
      </motion.div>
    )
  }
}

export default Account
