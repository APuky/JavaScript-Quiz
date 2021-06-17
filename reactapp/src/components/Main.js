import React, { useState, useEffect } from "react";
import styles from "../styles/Landing.module.scss";
import { useHistory } from "react-router-dom";

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
    <>
      <div className={styles.title}>
        <h4>Welcome "Implement logic"</h4>
        How well do you know <br /> <span>J</span>ava<span>S</span>cript?
        <h4>Test your knowledge with the challenge</h4>
      </div>
      <button
        style={{ marginLeft: "7rem", fontSize: "1.9rem" }}
        onClick={() => toTestHandler()}
      >
        Test Now
      </button>
    </>
  );
}

export default Main;
