import React, { useState, useEffect } from 'react';
import styles from '../styles/Quiz.module.scss';
import TestSvg from './svgs/TestSvg';
import LearnSvg from './svgs/LearnSvg';
import EntertainSvg from './svgs/EntertainSvg';
import RankSvg from './svgs/RankSvg';
import { motion } from 'framer-motion';
import { pageAnimation } from './Animation';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Quiz() {
  const [userData, setUserData] = useState(null);
  let history = useHistory();

  useEffect(() => {
    const promise = axios.get('http://127.0.0.1:8000/api/users/auth/user/', {
      headers: { Authorization: `Token ${localStorage.getItem('token')}` },
    });
    const dataPromise = promise.then((res) => setUserData(res.data));
    return dataPromise;
  }, []);

  const quizTakenHandler = () => {
    const data = {
      quizTaken: 1,
    };
    if (userData.quizTaken === 1) {
      return alert('Quiz already taken');
    } else {
      history.push('/questions');
      const patchUser = axios.patch(
        'http://127.0.0.1:8000/api/users/auth/user/',
        data,
        {
          headers: { Authorization: `Token ${localStorage.getItem('token')}` },
        }
      );
      return patchUser;
    }
  };

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className={styles.container}
    >
      <h1>
        {' '}
        Welcome To The <span>J</span>ava<span>S</span>cript Quiz
      </h1>
      <div className={styles.about}>
        <div className={styles.about_box}>
          <TestSvg />

          <li>test your fundamental skills of JavaScript with 10 questions</li>
        </div>
        <div className={styles.about_box}>
          <LearnSvg />

          <li>learn more about JavaScript</li>
        </div>
        <div className={styles.about_box}>
          <EntertainSvg />

          <li>Challenge yourself in an Entertaining way</li>
        </div>
        <div className={styles.about_box}>
          <RankSvg />

          <li>see how you rank on the global scoreboard</li>
        </div>
      </div>
      <p>You will have 2 minutes to answer a question</p>
      <p>You only get 1 attempt per quiz so don't rush it!</p>
      <button className={styles.button}>
        <div onClick={() => quizTakenHandler()}>Start</div>{' '}
      </button>
    </motion.div>
  );
}

export default Quiz;
