import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './Collection.css';
import axios from 'axios';

const Collection = ({pokeInfo, getCollection}) => {

  const removeFromCollection = () => {
    axios.delete(`/collection/${pokeInfo.name}`)
      .then(() => {
        return getCollection()
      });
  }

  return (
    <div className={styles.block}>
      <div>{pokeInfo.dex}: {pokeInfo.name}</div>
      <img src={pokeInfo.normalSprite}></img>
      <img src={pokeInfo.shinySprite}></img>
      <div>
        It took you {pokeInfo.attempts} attempts to obtain this Pokemon!
      </div>
      <button onClick={() => removeFromCollection()}>DELETE</button>
    </div>
  )
}

export default Collection;