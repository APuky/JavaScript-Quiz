import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Landing.module.scss";

function Navbar() {
  return (
    <div className={styles.navigation}>
      <div className={styles.nav_items}>
        <div className={styles.logo}>Poktic</div>
        <ul>
          <li>Home</li>
          <li>Scoreboard</li>
        </ul>
      </div>
      <Link to="/login" className={styles.login}>
        Log<span>In</span>
      </Link>
    </div>
  );
}

export default Navbar;
