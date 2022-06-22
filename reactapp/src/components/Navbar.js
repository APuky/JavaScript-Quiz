import React, { useState, Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import LogoJS from './svgs/LogoJS'
import BurgerMenu from './BurgerMenu'
import { authActions } from '../shared/store/authSlice'

import styles from '../styles/Landing.module.scss'

function Navbar() {
  const { pathname } = useLocation()
  const { isLoggedIn, isLoggingIn } = useSelector((s) => s.auth)
  const dispatch = useDispatch()

  const [menuActive, setMenuActive] = useState(false)

  const menuHandler = () => {
    setMenuActive(!menuActive)
  }

  return pathname === '/questions' ? (
    <div></div>
  ) : (
    <div className={styles.navigation}>
      <div className={styles.nav_items}>
        <Link to="/" className={styles.logo}>
          <LogoJS /> Quiz
        </Link>
        <ul>
          <Link to="/account">Account</Link>
          <Link to="/scoreboard">Scoreboard</Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <Fragment>
          <Link
            to="/logout"
            className={`${styles.login} ${styles.authentication}`}
          >
            Log<span>Out</span>
          </Link>
        </Fragment>
      ) : (
        <div className={styles.authentication}>
          <Fragment>
            <Link
              onClick={() => {
                if (isLoggingIn) dispatch(authActions.isSigning())
                else dispatch(authActions.isLogging())
              }}
              to={isLoggingIn ? '/signup' : '/login'}
              className={styles.login}
            >
              {isLoggingIn ? (
                <>
                  Sign<span>Up</span>
                </>
              ) : (
                <>
                  Log<span>In</span>
                </>
              )}
            </Link>
          </Fragment>
        </div>
      )}
      <div className={styles.menu} onClick={() => menuHandler()}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      {menuActive && (
        <BurgerMenu menuActive={menuActive} menuHandler={menuHandler} />
      )}
    </div>
  )
}

export default Navbar
