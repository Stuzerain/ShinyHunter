const mongoose = require('mongoose');
const db = require('./index.js');

const PokemonSchema = new mongoose.Schema({
  name: String,
  dex: Number,
  normalSprite: String,
  shinySprite: String,
  caught: {type: Boolean, default: false}
})

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;