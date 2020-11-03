import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './PokeInfo.css';
import axios from 'axios';
import shinyCalc from '../../shinyCalc.js';

const PokeInfo = ({pokeInfo, getCollection}) => {

  const [caught, setCaught] = useState(false);
  const [attempts, setAttempts] = useState(1);
  const [breeding, setBreeding] = useState(false);
  const [oddsDisplay, setDisplay] = useState(false);

  const toggleCaught = () => {
    if (!caught) {
      addCollection();
    }
    setCaught(!caught);
    getCollection();
  }

  const toggleBreeding = () => {
    setBreeding(!breeding);
  }

  const incrementAttempts = () => {
    setAttempts(event.target.value)
  }

  const addCollection = () => {
    axios.post(`/Pokemon/${pokeInfo.name}`, {
      attempts: attempts,
      breeding: breeding
    });
  }

  const sanityCheck = () => {
    if (breeding) {
      return shinyCalc(512, attempts)
    }
      return shinyCalc(1365, attempts);
  }


  return (
    <div className={styles.block}>
      <div className={styles.text}>
        <h2>{pokeInfo.dex}: {pokeInfo.name}</h2>
        <div className={styles.options}>
          <label className={styles.breeding}>
            Breeding?
            <input type='checkbox' name='breeding' value={breeding} onChange={() => toggleBreeding()}/>
          </label>

          <label className={styles.number}>
            Attempts:
            <input className={styles.numberEntry} type='number' value={attempts} min='1' onChange={() => incrementAttempts(event)  }/>
          </label>

          <label className={styles.caught}>
            Caught:
            <input type='checkbox' name='caught' value={caught} onChange={() => toggleCaught()}/>
          </label>
        </div>
          <div>Expected Shiny Chance: {sanityCheck() * 100}%</div>
      </div>

      <div className={styles.sprites}>
        <img src={pokeInfo.normalSprite}></img>
        <img src={pokeInfo.shinySprite}></img>
      </div>
    </div>
  )
}

export default PokeInfo;