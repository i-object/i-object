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

  //need to be stored in seperate file thats in .gitignore for production
  var apiKey = 'a596d9028162d68b23321b5fd78bbe1d';
  var breezeApiKey = '1ddd44fcabb8452284b39099e8aaf1df';

  var darkSky = function(lat,lon,apiKey) {
    //console.log('dark sky got called')
    var url = 'https://api.forecast.io/forecast/'+apiKey+'/'+lat+","+lon;
    var breezeUrl = 'https://api.breezometer.com/baqi/?lat='+lat+'&lon='+lon+'&key='+breezeApiKey;
      
    // get to dark sky api
    request.get(url, function(err,response,body){
      var skyBody = JSON.parse(body);
      var currentSky = skyBody.currently;

      //get to breezeOmeter api, 30d free trial 
      request.get({url:breezeUrl, rejectUnauthorized: false
      }, function(err,response,body) {
        if(err) {
          console.log('error for breezeOMeter is: ', err);
        } else{
          var breezeBody = JSON.parse(body);
          //console.log("hey man look at this breeze stuff",breezeBody.breezometer_aqi, breezeBody.breezometer_description);

          //this is going to depend on what the client side req body looks like
          var buttonData = new Occur({user: req.body.user,
                                    day: currentDay,
                                    hour: currentHour,
                                    minute: currentMinute,
                                    weather: currentSky.icon,
                                    temperature: currentSky.temperature,
                                    pressure: currentSky.pressure,
                                    latitude: latitude,
                                    longitude: longitude,
                                    airQuality: breezeBody.breezometer_aqi,
                                    airQualityDesc: breezeBody.breezometer_description
                                  });

          buttonData.save(function(err, newButtonData) {
            if(err) {
             console.log('we got an error in save', err);
              res.send(500, err);
            } else {
              //console.log('hey the save worked for: ', newButtonData);
              res.send(200,newButtonData);
            }
          });
        }
      });
    });
  };  

  //console.log('at least outer function got called')
  //invoked the function we just defined
  darkSky(latitude,longitude,apiKey);
};

//sends necessary user data back to client side as an array of objects
controller.retrieveStats = function(req,res) {
  Occur.find({user:req.body.user}).exec(function(err,found) {
    if(err) {
      console.log('we had an error retrieving stats');
      res.send(404, err);
    } else {
      //console.log("The data we retrieved looks like: ", found);
      res.send(200, found);
    }     
  });
};

module.exports = controller;