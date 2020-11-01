import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Odds.css';

const Odds = ({pokemonArray}) => {

  let inProgress = pokemonArray.length;
  let standardBattle = 4096;
  let charmBattle = 1365;
  let masuda = 683;
  let charmMasuda = 512;

  return (
    <div className={styles.oddsTable}>
      <div className={styles.battling}>
        Your basic odds of encountering a shiny Pokemon are 1/{standardBattle}. If you have the Shiny Charm, your chances drop to 1/{charmBattle}!
      </div>

      <div className={styles.breeding}>
        If you breed using the Masuda method, your chances of hatching a shiny Pokemon are 1/{masuda}. If you have the Shiny Charm, your chances drop to 1/{charmMasuda}!
      </div>

      <div className={styles.lament}>
        If you go out seeking shiny Pokemon, prepare for a bad time...
      </div>
    </div>
  )
}

export default Odds;