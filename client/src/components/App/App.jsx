import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Container from '../Container/Container.jsx';

const App = () => {

  /* STATE GUIDE
   * pokemonArray: all Pokemon currently in the viewer -- does not persist unless added to collection by marking them 'caught'
   *
   *
   */
  const [tab, setTab] = useState('viewer');
  const [pokemonArray, setPokemonArray] = useState([]);
  const [collection, setCollection] = useState([]);


  useEffect(() => {
    getCollection();
  },
  [] // this ensures that getCollection() is only called the first time the page loads and not any time a state changes
   );

  const getCollection = () => {
    axios.get('/collection')
      .then(results => {
        setCollection(results.data);
      })
  }

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





  /***    JSX for rendering page     ***/
  if (tab === 'viewer') {
    return (
      <div className={styles.app}>
        <Header tab={tab} setTab={setTab}/>
        <SearchBar getPokemon={getPokemon}/>
        <Container pokemonArray={pokemonArray} tab={tab} getCollection={getCollection}/>
      </div>
    )
  }

  if (tab === 'collection') {
    return (
      <div className={styles.app}>
        <Header tab={tab} setTab={setTab}/>
        <Container pokemonArray={collection} tab={tab} getCollection={getCollection}/>
      </div>
    )
  }
}

export default App;