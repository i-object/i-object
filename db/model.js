var db = require('./config.js');

var mongoose = require('mongoose');

var occurSchema = new mongoose.Schema( {
  date: Date,
  user: String,
  weather: String,
  temperature: Number,
  pressure: Number
} );

var Occur = mongoose.model('Occur', occurSchema);

module.exports = Occur;