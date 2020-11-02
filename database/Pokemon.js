const mongoose = require('mongoose');
const db = require('./index.js');

const PokemonSchema = new mongoose.Schema({
  name: {type: String, unique: true, dropDups: true},
  dex: Number,
  normalSprite: String,
  shinySprite: String,
  caught: {type: Boolean, default: false},
  attempts: Number
})

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;