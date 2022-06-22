import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Illustration from '../../illustrations/IllustrationSignup'
import LoadingSpinner from '../../../shared/UIElements/LoadingSpinner/LoadingSpinner'
import { pageAnimation } from '../../Animation'
import { useHttp } from '../../../shared/hooks/http-hook'
import { authActions } from '../../../shared/store/authSlice'
import { userDataActions } from '../../../shared/store/userDataSlice'

import styles from '../../../styles/Authentication.module.scss'

const Signup = () => {
  const { sendRequest, isLoading, error } = useHttp()
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [username, setUsername] = useState('')
  const [passCheck, setPassCheck] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()
    if (password1 !== password2) return setPassCheck('Passwords do not match')

    const user = { email, password: password1, username }
    let response
    try {
      response = await sendRequest('users/signup', 'POST', user)
      history.push('/')
    } catch (e) {}

    if (response) {
      dispatch(
        userDataActions.setData({
          uid: response.user._id,
          username: response.user.username,
          email: response.user.email,
          token: response.token,
          quizTaken: response.user.quizTaken,
          score: response.user.score,
        }),
      )
      dispatch(authActions.login())
    }
  }

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}
      <motion.div variants={pageAnimation} initial="hidden" animate="show">
        <div className={styles.signup}>
          <form onSubmit={onSubmit}>
            <h1>
              Sign<span>Up</span>
            </h1>
            <div className={styles.input}>
              <label htmlFor="email"></label> <br />
              <input
                name="email"
                type="email"
                value={email}
                placeholder="  Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="username"></label>
              <input
                name="username"
                type="text"
                placeholder="  Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="password1"></label>
              <input
                name="password1"
                type="password"
                value={password1}
                placeholder="  Password"
                onChange={(e) => setPassword1(e.target.value)}
                required
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="password2"></label>
              <input
                name="password2"
                type="password"
                placeholder="  Confirm Password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
            </div>
            {passCheck && <h2>{passCheck}</h2>}
            {error && <div className={styles.incorrect}>{error}</div>}

            <input
              type="submit"
              value="Confirm"
              className={styles.button_login}
            />
          </form>
          <div className={styles.illustration}>
            <Illustration />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Signup
