import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './SearchBar.css';

const SearchBar = () => {

  // state to keep track of form value
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = () => {
    console.log(value);
  }


  return (
    <div>
      <form>
        <label>
          Pokemon Name or National Pokedex Number:
          <input type='text' value={value} onChange={() => handleChange(event)}/>
        </label>
      </form>
        <button onClick={() => handleSubmit()}>Search</button>
    </div>
  )
}

export default SearchBar;