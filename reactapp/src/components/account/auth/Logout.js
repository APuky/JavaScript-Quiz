import React, { useState, useEffect, Fragment } from "react";
import styles from "../../../styles/Authentication.module.scss";
import Illustration from "../../illustrations/IllustrationLogOut";

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      window.location.replace("http://localhost:3000/login");
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/api/users/auth/logout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.clear();
        window.location.replace("http://localhost:3000/login");
      });
  };

  return (
    <>
      <div className={styles.container}>
        {loading === false && (
          <Fragment>
            <div className={styles.logout}>
              <h1>Are you sure you want to log out?</h1>
              <input
                type="button"
                value="Confirm"
                className={styles.button}
                onClick={handleLogout}
              />
            </div>
          </Fragment>
        )}
        <div className={styles.illustration}>
          <Illustration />
        </div>
      </div>
      <div className={styles.blue_box}></div>
    </>
  );
};

export default Logout;
