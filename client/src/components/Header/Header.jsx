import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './Header.css';

const Header = () => {


  return (
    <div className={styles.header}>
      <div className={styles.title}>ShinyHunter</div>
    </div>
  )
}

export default Header;