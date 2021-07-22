import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Landing.module.scss";
import LogoJS from "./svgs/LogoJS";
import BurgerMenu from "./BurgerMenu";
import { useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("username") !== null) {
      setIsAuth(true);
    } else localStorage.clear();
  }, []);

  const menuHandler = () => {
    setMenuActive(!menuActive);
  };

  return pathname === "/questions" ? (
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
      {isAuth === true ? (
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
            <Link to="/login" className={styles.login}>
              Log<span>In</span>{" "}
            </Link>
          </Fragment>
        </div>
      )}{" "}
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
