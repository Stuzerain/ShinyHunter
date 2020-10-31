import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

const App = () => {


  return (
    <div className={styles.app}>
      <Header />
      <SearchBar />
      <div >this is working out as a test</div>
    </div>
  )
}

export default App;