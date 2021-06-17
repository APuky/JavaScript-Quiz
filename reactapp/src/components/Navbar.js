import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Landing.module.scss";

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
          Poktic
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
            /
            <Link to="/signup" className={styles.login}>
              Sign<span>Up</span>{" "}
            </Link>
          </Fragment>
        </div>
      )}
      <div className={styles.line}></div>
    </div>
  );
}

export default Navbar;
