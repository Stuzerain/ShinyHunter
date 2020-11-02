import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './PokeInfo.css';
import axios from 'axios';

const PokeInfo = ({pokeInfo, getCollection}) => {

  const [caught, setCaught] = useState(false);
  const [attempts, setAttempts] = useState(1);

  const toggleCaught = () => {
    if (!caught) {
      addCollection();
    }
    setCaught(!caught);
    getCollection();
  }

  const incrementAttempts = () => {
    setAttempts(event.target.value)
  }

  const addCollection = () => {
    axios.post(`/Pokemon/${pokeInfo.name}`, {
      attempts: attempts
    });
  }

  return (
    <div className={styles.block}>
      <div>{pokeInfo.dex}: {pokeInfo.name}</div>
        <img src={pokeInfo.normalSprite}></img>
        <img src={pokeInfo.shinySprite}></img>
        <label>
          Attempts:
          <input className={styles.number} type='number' value={attempts} min='1' onChange={() => incrementAttempts(event)}/>
        </label>
        <label>
          Caught:
          <input type='checkbox' name='caught' value={caught} onChange={() => toggleCaught()}/>
        </label>
    </div>
  )
}

export default PokeInfo;