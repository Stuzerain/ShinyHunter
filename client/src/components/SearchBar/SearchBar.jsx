import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './SearchBar.css';

const SearchBar = ({getPokemon}) => {

  // state to keep track of form value
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getPokemon(value)
    setValue('');
  }


  return (
    <div>
      <form>
        <label>
          Pokemon Name:
          <input type='text' value={value} onChange={() => handleChange(event)}/>
        </label>
        <button onClick={() => handleSubmit(event)}>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;