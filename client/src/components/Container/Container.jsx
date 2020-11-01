import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Container.css';
import PokeInfo from '../PokeInfo/PokeInfo.jsx';
import Collection from '../Collection/Collection.jsx';

const Container = ({pokemonArray, tab, getCollection}) => {

  let boxes;

  if (tab === 'viewer') {
    boxes = pokemonArray.map((pokeInfo, index) =>
    <PokeInfo pokeInfo={pokeInfo} key={index} getCollection={getCollection}/>
    )
  }
  if (tab === 'collection') {
    boxes = pokemonArray.map((pokeInfo, index) =>
    <Collection pokeInfo={pokeInfo} key={index} getCollection={getCollection}/>
    )
  }

  return (
    <div>
      {boxes}
    </div>
  )
}

export default Container;