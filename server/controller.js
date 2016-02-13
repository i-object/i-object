var Occur = require('../db/model.js');
var request = require('request');

var controller = {};

controller.sendButtonData = function(req,res) {
  var currentDate = Date.now()
  console.log("req body is: ",req.body);
  // var latitude = req.body.latitude;
  // var longitude = req.body.longitude;
  // var apiKey = 'a596d9028162d68b23321b5fd78bbe1d';

    // var darkSky = function(lat,lon,apiKey) {
    //   var url = 'https://api.forecast.io/forecast/'+apiKey+'/'+lat+","+lon;
      
    //   request.get(url, function(err,response,body){
    //     var skyBody = JSON.parse(body);
    //     var currentSky = skyBody.currently;

        //this is going to depend on what the client side req body looks like
        var buttonData = new Occur({user: req.body.user,
                                    date: currentDate 
                                    // weather: currentSky.summary,
                                    // temperature: currentSky.temperature,
                                    // pressure: currentSky.pressure
                                  });

        buttonData.save(function(err, newButtonData) {
          if(err) {
            console.log('we got an error in save');
            res.send(500, err);
          } else {
            console.log('hey the save worked for: ', newButtonData);
            res.send(200,newButtonData);
          }
        });
      // });
    };  

  // darkSky(latitude,longitude,apiKey);  
// };

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