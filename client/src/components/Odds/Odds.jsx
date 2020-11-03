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
        <h2>Battling Odds:</h2>
        Your basic odds of encountering a shiny Pokemon are <b>1/{standardBattle}</b>. If you have the <em>Shiny Charm</em>, your chances drop to <b>1/{charmBattle}</b>!
      </div>

      <div className={styles.breeding}>
      <h2>Breeding Odds:</h2>
        If you breed using the Masuda method, your chances of hatching a shiny Pokemon are <b>1/{masuda}</b>. If you have the <em>Shiny Charm</em>, your chances drop to <b>1/{charmMasuda}</b>!
      </div>

      <div className={styles.lament}>
      <h2>Note on Odds:</h2>
        If you go out seeking shiny Pokemon, prepare for a bad time... The odds of encountering a shiny Pokemon at any time are independent of other encounters. This means that Even after 500 encounters without a shiny Pokemon, you are <em>NOT ANY MORE LIKELY</em> to encounter one than when you started.
      </div>
    </div>
  )
}

export default Odds;