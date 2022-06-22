import React from 'react'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'

import Illustration from './illustrations/IllustrationMain'
import { pageAnimation, slideToRight } from './Animation'
import { authActions } from '../shared/store/authSlice'

import styles from '../styles/Landing.module.scss'

function Main() {
  const { isLoggedIn } = useSelector((s) => s.auth)
  let history = useHistory()
  const dispatch = useDispatch()

  const toTestHandler = () => {
    if (isLoggedIn) history.push('/quiz')
    else {
      dispatch(authActions.isLogging())
      history.push('/login')
    }
  }

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className={styles.landing_page}
    >
      <div className={styles.intro}>
        {' '}
        <div className={styles.title}>
          {localStorage.getItem('username') === null ? null : (
            <h4 onClick={() => test()}>
              Welcome <span>{localStorage.getItem('username')} </span>
            </h4>
          )}
          How well do you know <br /> <span>J</span>ava<span>S</span>cript?
        </div>
        <motion.button
          variants={slideToRight}
          initial="hidden"
          animate="show"
          className={styles.btn}
          onClick={toTestHandler}
        >
          Test Now
        </motion.button>
      </div>
      <Illustration />
    </motion.div>
  )
}

export default Main
