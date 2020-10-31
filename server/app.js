// dependencies
const express = require('express');
const axios = require('axios');
const app = express();
const pokeList = require('./pokeList.js');

// middleware
app.use(express.json());

// routes
app.use('/', express.static('./client/public'))

app.get('/Pokemon/:param', (req, res) => {
  let response = {};
  let search = req.params.param.toLowerCase();

  // check if the requested pokemon is on the banned list, if it's not, query PokeAPI and return response
  if (pokeList[search]) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(results => {
          var pokemon = results.data;
          response.name = pokemon.name;
          response.dex = pokemon.id
          response.regular = pokemon.sprites.front_default;
          response.shiny = pokemon.sprites.front_shiny;
          return res.json(response);
        })
        .catch(err => {
          console.error(err);
          return res.json('There was an error in the lookup, but it went through. The error is probably with PokeAPI.');
        })
  }
  else if (pokeList[search] === false) {
    return res.json('This Pokemon is not currently available in Sword/Shield.')
  }
  else {
    return res.json('This is not a vaild Pokemon. Please check your spelling.')
  }


})
//TODO


module.exports = app;