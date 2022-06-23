import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'

import Illustration from '../../illustrations/IllustrationLogOut'
import LoadingSpinner from '../../../shared/UIElements/LoadingSpinner/LoadingSpinner'
import { pageAnimation } from '../../Animation'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../../../shared/hooks/http-hook'
import { authActions } from '../../../shared/store/authSlice'
import { userDataActions } from '../../../shared/store/userDataSlice'

import styles from '../../../styles/Authentication.module.scss'

const Logout = () => {
  const { sendRequest, isLoading, error } = useHttp()
  const { token } = useSelector((s) => s.userData)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await sendRequest('users/logout', 'GET', null, {
        Authorization: `Bearer ${token}`,
      })
      history.push('/')
      dispatch(authActions.logout())
      dispatch(userDataActions.clearData())
    } catch (e) {}
  }

  return (
    <>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className={styles.container}
      >
        {isLoading && <LoadingSpinner asOverlay />}
        {!isLoading && (
          <Fragment>
            <div className={styles.logout}>
              <h1>Are you sure you want to log out?</h1>
              <input
                type="button"
                value="Confirm"
                className={styles.button}
                onClick={handleLogout}
              />
            </div>
          </Fragment>
        )}
        {error && <div className={styles.incorrect}>{error}</div>}
        <div className={styles.illustration}>
          <Illustration />
        </div>
      </motion.div>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className={styles.blue_box}
      ></motion.div>
    </>
  )
}

export default Logout
