import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'

import Illustration from '../../illustrations/IllustrationLogin'
import UserSvg from '../../svgs/UserSvg'
import PasswordSvg from '../../svgs/PasswordSvg'
import LoadingSpinner from '../../../shared/UIElements/LoadingSpinner/LoadingSpinner'
import { pageAnimation } from '../../Animation'
import { authActions } from '../../../shared/store/authSlice'
import { useHttp } from '../../../shared/hooks/http-hook'
import { userDataActions } from '../../../shared/store/userDataSlice'

import styles from '../../../styles/Authentication.module.scss'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const { sendRequest, isLoading, error } = useHttp()

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = { username, password }
    let response
    try {
      response = await sendRequest('users/login', 'POST', data)
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
        <div className={styles.content}>
          <div className={styles.login}>
            <h1>Welcome back. Log in, please.</h1>
            <form onSubmit={onSubmit}>
              <div className={styles.input}>
                <label htmlFor="username"></label> <br />
                <UserSvg />
                <input
                  name="username"
                  type="username"
                  value={username}
                  placeholder="  Username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />{' '}
              </div>
              <br />
              <div className={styles.input}>
                <label htmlFor="password"></label> <br />
                <PasswordSvg />
                <input
                  name="password"
                  type="password"
                  value={password}
                  placeholder="  Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />{' '}
              </div>
              {error && <div className={styles.incorrect}>{error}</div>}
              <br />
              <input
                type="submit"
                value="Log In"
                className={styles.button_login}
              />
            </form>
            <div className={styles.sign_up}>
              Don't have an account? <br /> <br />
              <Link
                onClick={() => dispatch(authActions.isSigning())}
                to="/signup"
                className={styles.sign_up__button}
              >
                Sign<span>Up</span>{' '}
              </Link>
            </div>
          </div>
          <div className={styles.illustration}>
            <Illustration />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Login
