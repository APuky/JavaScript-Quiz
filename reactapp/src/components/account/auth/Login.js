import React, { useState, useEffect } from "react";
import styles from "../../../styles/Authentication.module.scss";
import { Link } from "react-router-dom";
import Illustration from "../../illustrations/IllustrationLogin";
import UserSvg from "../../svgs/UserSvg";
import PasswordSvg from "../../svgs/PasswordSvg";
import { motion } from "framer-motion";
import { pageAnimation } from "../../Animation";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      window.location.replace("http://localhost:3000/");
    } else {
      setLoading(false);
    }
  }, [userData]);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    fetch("http://127.0.0.1:8000/api/users/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem("token", data.key);
          localStorage.setItem("username", username);
          const promise = axios.get(
            "http://127.0.0.1:8000/api/users/auth/user/",
            {
              headers: { Authorization: `Token ${data.key}` },
            }
          );
          const dataPromise = promise.then((res) => setUserData(res.data));
          return dataPromise;
        } else {
          setUsername("");
          setPassword("");
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      {loading === false && (
        <div className={styles.content}>
          <div className={styles.login}>
            <h1>Welcome back. Log in, please.</h1>
            <form onSubmit={onSubmit}>
              <div className={styles.input}>
                <label htmlFor="username"></label> <br />
                <UserSvg />
                <input
                  name="username"
                  type="username"
                  value={username}
                  placeholder="  Username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />{" "}
              </div>
              <br />
              <div className={styles.input}>
                <label htmlFor="password"></label> <br />
                <PasswordSvg />
                <input
                  name="password"
                  type="password"
                  value={password}
                  placeholder="  Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
              </div>
              {errors === true && (
                <div className={styles.incorrect}>
                  Cannot log in with provided credentials
                </div>
              )}
              <br />
              <input
                type="submit"
                value="Log In"
                className={styles.button_login}
              />
            </form>
            <div className={styles.sign_up}>
              Don't have an account? <br /> <br />
              <Link to="/signup" className={styles.sign_up__button}>
                Sign<span>Up</span>{" "}
              </Link>
            </div>
          </div>
          <div className={styles.illustration}>
            <Illustration />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Login;
