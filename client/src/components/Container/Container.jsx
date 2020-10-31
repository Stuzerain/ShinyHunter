import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Container.css';
import PokeInfo from '../PokeInfo/PokeInfo.jsx';

const Container = ({pokemonArray}) => {

  let boxes = pokemonArray.map((pokeInfo, index) =>
  <PokeInfo pokeInfo={pokeInfo} key={index} />
  )

  return (
    <div>
      {boxes}
    </div>
  )
}

export default Container;