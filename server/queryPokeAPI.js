const axios = require('axios');

const query = (parameter) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${parameter}`)
        .then(results => {
          let pokemon = {};
          var data = results.data;
          pokemon.name = data.name;
          pokemon.dex = data.id
          pokemon.regular = data.sprites.front_default;
          pokemon.shiny = data.sprites.front_shiny;
          return pokemon;
        })
        .catch(err => {
          return null;
        })
}

module.exports = query;
