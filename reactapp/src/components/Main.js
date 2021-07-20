import React, { useState, useEffect } from "react";
import styles from "../styles/Landing.module.scss";
import { useHistory } from "react-router-dom";
import Illustration from "./illustrations/IllustrationMain";
import { motion } from "framer-motion";
import { pageAnimation, slideToRight } from "./Animation";
import axios from "axios";

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
  // FUNCTION FOR GETTING THE DATA OF THE CURRENTLY LOGGED IN USER

  // const test = () => {
  //   const token = localStorage.getItem("token");

  //   const promise = axios.get("http://127.0.0.1:8000/api/users/auth/user/", {
  //     headers: { Authorization: `Token ${token}` },
  //   });
  //   const dataPromise = promise.then((res) => console.log(res.data));

  //   return dataPromise;
  // };

  // FUNCTION FOR UPDATING THE SCORE OF THE CURRENTLY LOGGED IN USER
  //This should work!
  // const test = () => {
  //   const token = localStorage.getItem("token");
  //   //console.log(token);
  //   // const promise = axios.get("http://127.0.0.1:8000/api/users/auth/user/");

  //   const data = {
  //     score: 2,
  //     time: 22
  //   };
  //   const promise = axios.patch(
  //     "http://127.0.0.1:8000/api/users/auth/user/",
  //     data,
  //     {
  //       headers: { Authorization: `Token ${token}` },
  //     }
  //   );
  //   const dataPromise = promise.then((res) => console.log(res.data));

  //   return dataPromise;
  // };

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className={styles.landing_page}
    >
      <div className={styles.intro}>
        {" "}
        <div className={styles.title} onClick={() => test()}>
          {localStorage.getItem("username") === null ? null : (
            <h4>
              Welcome <span>{localStorage.getItem("username")} </span>
            </h4>
          )}
          How well do you know <br /> <span>J</span>ava<span>S</span>cript?
        </div>
        <motion.button
          variants={slideToRight}
          initial="hidden"
          animate="show"
          className={styles.btn}
          onClick={() => toTestHandler()}
        >
          Test Now
        </motion.button>
      </div>

      <Illustration />
    </motion.div>
  );
}

export default Main;
