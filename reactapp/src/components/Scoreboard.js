import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";
import axios from "axios";
import styles from "../styles/Scoreboard.module.scss";

function Scoreboard() {
  const [scoreboardData, setScoreboardData] = useState(null);

  useEffect(() => {
    const promise = axios.get("http://127.0.0.1:8000/api/users/scoreboard");
    const data = promise.then((res) =>
      setScoreboardData(res.data.sort((a, b) => b.score - a.score))
    );
    return data;
  }, []);

  if (scoreboardData) {
    return (
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className={styles.container}
      >
        <div className={styles.scoreboard}>
          {scoreboardData.map((user, i) => (
            <div
              key={user.id}
              className={i >= 1 ? styles.each_user : styles.top_user}
            >
              <h4>{user.username}</h4>
              <h3>{user.score}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    );
  } else {
    return <h2>Loading data</h2>;
  }
}

export default Scoreboard;
