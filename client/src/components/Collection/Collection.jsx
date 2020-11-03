import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './Collection.css';
import axios from 'axios';
import shinyCalc from '../../shinyCalc.js';

const Collection = ({pokeInfo, getCollection}) => {

  let odds = pokeInfo.breeding ? 512 : 1365;

  let luck = shinyCalc(odds, pokeInfo.attempts) * 100;
  let percentile = (percent) => {
    if (percent % 10 === 0 || percent % 10 >= 4) {
      return `${percent}th`
    }
    if (percent % 10 === 1) {
      return `${percent}st`
    }
    if (percent % 10 === 2) {
      return `${percent}nd`
    }
    if (percent % 10 === 3) {
      return `${percent}rd`
    }
  }

  let superlative = luck >= 50 ? 'unlucky' : 'lucky';

  const removeFromCollection = () => {
    axios.delete(`/collection/${pokeInfo.name}`)
      .then(() => {
        return getCollection()
      });
  }

  return (
    <div className={styles.block}>
      <div className={styles.info}>{pokeInfo.dex}: {pokeInfo.name}</div>
      <img src={pokeInfo.normalSprite}></img>
      <img src={pokeInfo.shinySprite}></img>
      <div>
        It took you {pokeInfo.attempts} attempts to obtain this Pokemon via {pokeInfo.breeding ? 'breeding' : 'catching'}! <br />
        That puts you in the {percentile(luck)} percentile of trainers! How {superlative}!
      </div>
      <button className={styles.share}>SHARE</button>
      <button className={styles.delete} onClick={() => removeFromCollection()}>DELETE</button>
    </div>
  )
}

export default Collection;