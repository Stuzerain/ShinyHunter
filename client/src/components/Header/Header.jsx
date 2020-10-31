import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './Header.css';

const Header = ({tab, setTab}) => {


  return (
    <div className={styles.header}>
      <div className={styles.title}>ShinyHunter</div>

      <span className={styles.modeSelect}>
        <button
          id='viewer'
          className={`${styles.viewer} ${tab === 'viewer' ? styles.activeTab : ''}`}
          onClick={() => {
            setTab('viewer');
        }}>
          VIEWER
        </button>

        <button
          id='collection'
        className={`${styles.collection} ${tab === 'collection' ? styles.activeTab : ''}`}
        onClick={() => {
          setTab('collection');
        }}>
          COLLECTION
        </button>
      </span>
    </div>
  )
}

export default Header;