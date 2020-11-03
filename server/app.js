// dependencies
const express = require('express');
const axios = require('axios');
const app = express();
const pokeList = require('./pokeList.js');
const db = require('../database/index.js');
const PokemonDB = require('../database/Pokemon.js');
const Friends = require('../database/Friends.js');
// const queryPokeAPI = require('./queryPokeAPI.js'); // for cleaning up and promisifying API calls if there is time later

// middleware
app.use(express.json());

// routes
app.use('/', express.static('./client/public'))

app.get('/Pokemon/:param', async (req, res) => {
  let response = {};
  let search = req.params.param.toLowerCase();

  // check if the requested pokemon is on the banned list, if it's not, query PokeAPI and return response
  if (pokeList[search]) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(results => {
          var pokemon = results.data;
          response.name = pokemon.name;
          response.dex = pokemon.id
          response.normalSprite = pokemon.sprites.front_default;
          response.shinySprite = pokemon.sprites.front_shiny;
          return res.json(response);
        })
        .catch(err => {
          console.error(err);
          return res.json('There was an error in the lookup, but it went through. The error is probably with PokeAPI.');
        })
  }
  else if (pokeList[search] === false) {
    return res.json('This Pokemon is not currently available in Sword/Shield.');
  }
  else {
    return res.json('This is not a vaild Pokemon. Please check your spelling.');
  }
});

app.get('/collection', async (req, res) => {
  PokemonDB.find()
    .then(results => {
      res.json(results);
    });
});

app.get('/friends', async (req, res) => {
  Friends.find()
    .then(results => {
      res.json(results);
    });
});

app.post('/Pokemon/:param', async (req, res) => {
  let search = req.params.param.toLowerCase();

  // check if the requested pokemon is on the banned list, if it's not, query PokeAPI and return response
  if (pokeList[search]) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(results => {
          let pokemon = {};
          var data = results.data;
          pokemon.name = data.name;
          pokemon.dex = data.id
          pokemon.normalSprite = data.sprites.front_default;
          pokemon.shinySprite = data.sprites.front_shiny;
          pokemon.attempts = req.body.attempts;
          pokemon.breeding = req.body.breeding;
          return PokemonDB.create(pokemon)
        })
        .then(result => {
          return res.json(result)
        })
        .catch(err => {
          console.error(err);
          return res.json('There was an error in the lookup, but it went through. The error is probably with PokeAPI.');
        });
  }
  else if (pokeList[search] === false) {
    return res.json('This Pokemon is not currently available in Sword/Shield.');
  }
  else {
    return res.json('This is not a vaild Pokemon. Please check your spelling.');
  }
});

app.post('/friends', (req, res) => {
  let friend = {};
  friend.name = req.body.name;
  friend.hunting = req.body.hunting;
  friend.huntingNum = req.body.huntingNum;
  friend.favRegion = req.body.favRegion;

  axios.get(`https://pokeapi.co/api/v2/pokemon/${friend.hunting}`)
    .then(results => {
      friend.huntingSprite = results.data.sprites.front_shiny;
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.favorite}`)
    })
    .then(results => {
      friend.avatar = results.data.sprites.front_shiny;
      return Friends.create(friend)
    })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.error(err);
      return res.json('There was an error adding to the friends list');
    });
});

app.delete('/collection/:name', async (req, res) => {
  PokemonDB.findOneAndDelete({name: req.params.name})
    .then(results => {
      res.json(results);
    });
});


module.exports = app;