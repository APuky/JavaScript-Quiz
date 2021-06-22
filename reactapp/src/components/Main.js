import React, { useState, useEffect } from "react";
import styles from "../styles/Landing.module.scss";
import { useHistory } from "react-router-dom";
import Illustration from "./illustrations/IllustrationMain";

function Main() {
  const [isAuth, setIsAuth] = useState(false);
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setIsAuth(true);
    }
  }, []);

  const toTestHandler = () => {
    if (isAuth) {
      history.push("/quiz");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className={styles.landing_page}>
      <div className={styles.intro}>
        {" "}
        <div className={styles.title}>
          <h4>Welcome "Implement logic"</h4>
          How well do you know <br /> <span>J</span>ava<span>S</span>cript?
        </div>
        <button className={styles.btn} onClick={() => toTestHandler()}>
          Test Now
        </button>
      </div>

      <Illustration />
    </div>
  );
}

export default Main;
