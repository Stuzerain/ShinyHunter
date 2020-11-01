import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './PokeInfo.css';
import axios from 'axios';

const PokeInfo = ({pokeInfo, getCollection}) => {

  const [caught, setCaught] = useState(false);

  const toggleCaught = () => {
    if (!caught) {
      addCollection();
    }
    setCaught(!caught);
    getCollection();
  }

  const addCollection = () => {
    axios.post(`/Pokemon/${pokeInfo.name}`)
  }

  return (
    <div className={styles.block}>
      <div>{pokeInfo.dex}: {pokeInfo.name}</div>
        <img src={pokeInfo.normalSprite}></img>
        <img src={pokeInfo.shinySprite}></img>

        <label>
          Caught
          <input type='checkbox' name='caught' value={caught} onChange={() => toggleCaught()}/>
        </label>
    </div>
  )
}

export default PokeInfo;