import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Landing.module.scss";
import LogoJS from "./svgs/LogoJS";
function Navbar() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
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
      )}
    </div>
  );
}

export default Navbar;
