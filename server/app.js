// dependencies
const express = require('express');
const axios = require('axios');
const app = express();

// middleware
app.use(express.json());

// routes
app.use('/', express.static('./client/public'))

app.get('/Pokemon/:param', (req, res) => {
  let response = {};
  let search = req.params.param.toLowerCase();


  axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(results => {
      var pokemon = results.data;
      response.name = pokemon.name;
      response.dex = pokemon.id
      response.art = pokemon.sprites.other['official-artwork'].front_default;
      response.regular = pokemon.sprites.front_default;
      response.shiny = pokemon.sprites.front_shiny;
      return res.json(response);
    })
    .catch(err => {
      console.error(err);
      return res.json('There was an error');
    })
})
//TODO


module.exports = app;