// dependencies
const express = require('express');
const app = express();

// middleware
app.use(express.json());

// routes
app.use('/', express.static('./client/public'))
//TODO


module.exports = app;