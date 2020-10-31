import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Container from '../Container/Container.jsx';

const App = () => {

  const [pokemonArray, setPokemonArray] = useState([]);
  const [tab, setTab] = useState('viewer');

  const getPokemon = (value) => {
    axios.get(`/Pokemon/${value}`)
      .then(results => {
        if (typeof results.data !== 'string') {
          setPokemonArray(pokemonArray => [...pokemonArray, results.data])
        }
        else {
          alert(results.data);
        }
        return;
      })
  }

  if (tab === 'viewer') {
    return (
      <div className={styles.app}>
        <Header tab={tab} setTab={setTab}/>
        <SearchBar getPokemon={getPokemon}/>
        <Container pokemonArray={pokemonArray}/>
      </div>
    )
  }

  if (tab === 'collection') {
    return (
      <div className={styles.app}>
        <Header tab={tab} setTab={setTab}/>
        <div>collection mode</div>
      </div>
    )
  }
}

export default App;