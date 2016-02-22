var db = require('./config.js');

var mongoose = require('mongoose');

//some properties here aren't used in production at the moment such as pressure
var occurSchema = new mongoose.Schema( {
  day: String,
  hour: Number,
  minute: Number,
  user: String,
  weather: String,
  temperature: Number,
  pressure: Number,
  latitude: Number,
  longitude: Number,
  airQuality: Number,
  airQualityDesc: String
} );

var Occur = mongoose.model('Occur', occurSchema);

module.exports = Occur;