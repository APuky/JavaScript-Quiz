import React, { useState, useEffect } from "react";
import styles from "../../../styles/Authentication.module.scss";
import Illustration from "../../illustrations/IllustrationSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      window.location.replace("http://localhost:3000/");
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password1: password1,
      password2: password2,
      username: username,
    };

    fetch("http://127.0.0.1:8000/api/users/auth/register/", {
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
          window.location.replace("http://localhost:3000/");
        } else {
          setEmail("");
          setPassword1("");
          setPassword2("");
          setUsername("");
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
      <div className={styles.signup}>
        <form onSubmit={onSubmit}>
          <h1>
            Sign<span>Up</span>
          </h1>
          <div className={styles.input}>
            <label htmlFor="email"></label> <br />
            <input
              name="email"
              type="email"
              value={email}
              placeholder="  Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="username"></label>
            <input
              name="username"
              type="text"
              placeholder="  Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="password1"></label>
            <input
              name="password1"
              type="password"
              value={password1}
              placeholder="  Password"
              onChange={(e) => setPassword1(e.target.value)}
              required
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="password2"></label>
            <input
              name="password2"
              type="password"
              placeholder="  Confirm Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </div>
          {errors === true && <h2>Passwords is too weak or does not match</h2>}

          <input
            type="submit"
            value="Confirm"
            className={styles.button_login}
          />
        </form>
        <div className={styles.illustration}>
          <Illustration />
        </div>
      </div>
    </div>
  );
};

export default Signup;
