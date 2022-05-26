import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Landing.module.scss';
import LogoJS from './svgs/LogoJS';
import BurgerMenu from './BurgerMenu';
import { useLocation } from 'react-router-dom';
import useUser from '../hooks/useUser';

function Navbar() {
  const { pathname } = useLocation();
  // const [isAuth, setIsAuth] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const { isLoading, user } = useUser();

  // console.log({ error, isLoading, user });

  // useEffect(() => {
  //   if (user) {
  //     setIsAuth(true);
  //   } else {
  //     setIsAuth(false);
  //   }
  // }, []);

  const menuHandler = () => {
    setMenuActive(!menuActive);
  };

  if (isLoading) return null;

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
      {user !== null ? (
        <Fragment>
          <div>
            <span>{`Hi, ${user?.name}`}</span>{' '}
            <Link
              to="/logout"
              className={`${styles.login} ${styles.authentication}`}
            >
              Log<span>Out</span>
            </Link>
          </div>
        </Fragment>
      ) : (
        <div className={styles.authentication}>
          <Fragment>
            <Link to="/login" className={styles.login}>
              Log<span>In</span>{' '}
            </Link>
          </Fragment>
        </div>
      )}{' '}
      <div className={styles.menu} onClick={() => menuHandler()}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      {menuActive && (
        <BurgerMenu menuActive={menuActive} menuHandler={menuHandler} />
      )}
    </div>
  );
}

export default Navbar;
