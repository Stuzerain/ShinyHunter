const mongoose = require('mongoose');
const db = require('./index.js');

const FriendsSchema = new mongoose.Schema({
  name: String,
  hunting: String,
  huntingNum: Number,
  huntingSprite: String,
  avatar: String,
  favRegion: String
})

const Friends = mongoose.model('Friends', FriendsSchema);

module.exports = Friends;