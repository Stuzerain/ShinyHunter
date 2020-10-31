import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './PokeInfo.css';

const PokeInfo = ({pokeInfo}) => {

  const [caught, setCaught] = useState(false);

  const toggleCaught = () => {
    setCaught(!caught);
  }

  return (
    <div className={styles.block}>
      <div>{pokeInfo.dex}: {pokeInfo.name}</div>
        <img src={pokeInfo.regular}></img>
        <img src={pokeInfo.shiny}></img>

        <label>
          Caught
          <input type='checkbox' name='caught' value={caught} onChange={() => toggleCaught()}/>
        </label>
    </div>
  )
}

export default PokeInfo;