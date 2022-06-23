import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import LoadingSpinner from '../shared/UIElements/LoadingSpinner/LoadingSpinner'
import { pageAnimation } from './Animation'
import { useHttp } from '../shared/hooks/http-hook'

import styles from '../styles/Scoreboard.module.scss'

function Scoreboard() {
  const [scoreboardData, setScoreboardData] = useState([])
  const { sendRequest, isLoading } = useHttp()

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await sendRequest('users')
      setScoreboardData(response.users.sort((a, b) => b.score - a.score))
    }
    fetchUserData()
  }, [sendRequest])

  return (
    <>
      {isLoading && (
        <div style={{ textAlign: 'center' }}>
          <LoadingSpinner osOverlay />
        </div>
      )}
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className={styles.container}
      >
        <div className={styles.scoreboard}>
          {scoreboardData.length === 0 && !isLoading && (
            <h1>No tests are taken yet</h1>
          )}
          {scoreboardData.length !== 0 &&
            scoreboardData.map((user, i) => (
              <div
                key={user._id}
                className={i >= 1 ? styles.each_user : styles.top_user}
              >
                <h4>{user.username}</h4>
                <h3>{user.score}</h3>
              </div>
            ))}
        </div>
      </motion.div>
    </>
  )
}

export default Scoreboard
