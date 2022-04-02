import React from 'react';
import styles from '../styles/Landing.module.scss';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

function Layout(props) {
  const { pathname } = useLocation();

  return (
    <div
      className={
        pathname === '/quiz' ||
        pathname === '/signup' ||
        pathname === '/questions' ||
        pathname === '/scoreboard'
          ? styles.container_full
          : styles.container
      }
    >
      <div className={styles.relative_container}>
        <Navbar />
        <div> {props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
