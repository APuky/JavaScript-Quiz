import React, { useState, useEffect } from "react";
import styles from "../styles/Landing.module.scss";
import { Link } from "react-router-dom";
import HomeSvg from "./svgs/HomeSvg";

function BurgerMenu({ menuActive, menuHandler }) {
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    menuActive ? setIsOpen(styles.active) : null;
  }, [menuActive]);

  return (
    <div className={`${styles.menu_container} ${isOpen}`}>
      <ul>
        <Link to="/" onClick={() => menuHandler()}>
          <HomeSvg />
        </Link>
        <Link to="/account" onClick={() => menuHandler()}>
          Account
        </Link>
        <Link to="/scoreboard" onClick={() => menuHandler()}>
          Scoreboard
        </Link>
      </ul>
    </div>
  );
}

export default BurgerMenu;
