var Occur = require('../db/model.js');
var request = require('request');

var controller = {};

controller.sendButtonData = function(req,res) {
  var currentDate = new Date();

  var currentHour =currentDate.getHours();
  var currentMinute = currentDate.getMinutes();

  var currentDay=currentDate.getDay() +  "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();

  var latitude = req.body.latitude;
  var longitude = req.body.longitude;
  var apiKey = 'a596d9028162d68b23321b5fd78bbe1d';

    var darkSky = function(lat,lon,apiKey) {
      console.log('this shit got called')
      var url = 'https://api.forecast.io/forecast/'+apiKey+'/'+lat+","+lon;
      
      request.get(url, function(err,response,body){
        var skyBody = JSON.parse(body);
        var currentSky = skyBody.currently;

        //this is going to depend on what the client side req body looks like
        var buttonData = new Occur({user: req.body.user,
                                    day: currentDay,
                                    hour: currentHour,
                                    minute: currentMinute,
                                    weather: currentSky.summary,
                                    temperature: currentSky.temperature,
                                    pressure: currentSky.pressure,
                                    latitude: latitude,
                                    longitude: longitude

                                  });

        buttonData.save(function(err, newButtonData) {
          if(err) {
            console.log('we got an error in save', err);
            res.send(500, err);
          } else {
            console.log('hey the save worked for: ', newButtonData);
            res.send(200,newButtonData);
          }
        });

      });
  };  

console.log('at least this shit got called')
  darkSky(latitude,longitude,apiKey);
};

controller.retrieveStats = function(req,res) {
  Occur.find({user:req.body.user}).exec(function(err,found) {
    if(err) {
      console.log('we had an error retrieving stats');
      res.send(404, err);
    } else {
      console.log("The data we retrieved looks like: ", found);
      res.send(200, found);
    }     
  });
};



module.exports = controller;