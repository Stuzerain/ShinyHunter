import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './Container.css';

const Container = ({pokemonArray}) => {

  let boxes = pokemonArray.map((pokemon, index) =>
  <div>yeet babes</div>
  )

  return (
    <div>
      {boxes}
    </div>
  )
}

export default Container;