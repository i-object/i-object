var  express = require('express');
var express = require('express-partials');
var bodyParser = require('bodyParser');
var http = requite('http');

var app = express();

app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));

app.use(express.static(__dirname+'/../client'));

app.set('port', (process.env.PORT || 8000) );

module.exports = app;


