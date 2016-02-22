angular.module('theButton.statsFactory',[])

.factory('getData', function($http){
  var tupleData = {};


//Makes Post request and stages data for d3 viz to div in html
// dataObject has predetermined intervals that we use to sort/count the raw data for each occurence
//we then push that key/value pair into an array of arrays to visualize it in controller
//the structure of these intervals is mainly due to c3(a d3 library) limitations
//each catagories for loop has it's own edge case handling, further testing of this is probably necessary  
  var retrieveInfo=function(user){
    return $http({
        method: 'POST',
        url: '/api/stats',
        data: {user: user}
    })
    .then(function(userData){
    //console.log("In client responding to stats");


        var dataObject = {}
        dataObject.date = {'0':0, '1':0, '2':0, '3':0, '4':0, '5' :0, '6':0, '7':0, '8':0, '9':0, '10':0, '11':0, '12':0, '13':0, '14':0, '15':0, '16':0, '17':0, '18':0, '19': 0, '20':0, '21':0, '22':0, '23':0 };
        dataObject.temperature = {'-40' :0, '-30':0, '-20':0, '-10':0, '0':0, '10':0, '20':0, '30':0, '40':0, '50':0, '60':0, '70':0, '80':0, '90':0, '100':0, '110':0};
        dataObject.weatherType ={'0':0, '1':0, '2':0};
        dataObject.airQuality={'0':0, '1':0, '2':0, '3':0, '4':0};

        //x axis name (0th index) and intervals
        tupleData.date=['hour'];
       tupleData.temperature = ['temp'];
       tupleData.weatherType=['weather'];
       tupleData.airQuality=['airQuality']
       tupleData.location=[]

       //for loop for location
       for(var i=0; i<userData.data.length; i++){
        var currentLat=userData.data[i]['latitude'];
        var currentLong=userData.data[i]['longitude'];
        var addToArray={lat: currentLat, lng: currentLong};
        tupleData.location.push(addToArray);
       }
        
        var airQualityDescObject={0: 'Poor Air Quality', 1: 'Low Air Quality', 2: 'Moderate Air Quality', 3: 'Fair Air Quality', 4: 'Excellent Air Quality'}

       //for loop for airQuality view
       for(var i=0; i<userData.data.length; i++){
        var currentAirQuality=userData.data[i]['airQualityDesc']
        for(var key in airQualityDescObject){
          if(airQualityDescObject[key]=== currentAirQuality){
            var currentKey=key;
            dataObject.airQuality[currentKey]++;
          }
        }
       }

       //for loop for airquality tuple
       for(var i=0; i<5; i++){
        var addToArray=dataObject.airQuality[i];
        tupleData.airQuality.push(addToArray);
       }

        //for loop for date view
        for(var i=0; i<userData.data.length; i++){
            var currentTime=userData.data[i]['hour'];
            if(userData.data[i]['minute'] > 30) {
              currentTime+=1;
            }
            if(currentTime===24) {
              currentTime = 0;
            }
            //^ todo: handle edge case issues for dates, year changes.
            dataObject.date[currentTime]++;
        }
        console.log("dateObject.date", dataObject.date)

        //for loop for date view tupleArray
          for(var i=0; i<24; i++){
            var addToArray=dataObject.date[i]
            tupleData.date.push(addToArray);
            //console.log(addArray);
          }
          console.log("tupleData.date", tupleData.date)


       
        //for loop for temperature view
        for(var i=0; i<userData.data.length; i++){
           var currentTemp=userData.data[i]['temperature'];
           currentTemp=(Math.round(currentTemp / 10) * 10);
           dataObject.temperature[currentTemp]++;
       }

       //for loop for temperature view tupleArray
       for(var i=-40; i<120; i+=10){
           var addToArray=dataObject.temperature[i]
           tupleData.temperature.push(addToArray);
       }
       //for loop for weather view
      var weatherObject={0:["clear-day", "clear-night", "wind" ], 1:["fog", "cloudy", "partly-cloudy-day", "partly-cloudy-night", "Mostly Cloudy", "Partly Cloudy"], 2:["rain", "snow", "sleet", "hail", "thunderstorm", "tornado"]}
      for(var j=0; j<userData.data.length; j++){
        var currentWeather=userData.data[j]['weather'];
        for(var key in weatherObject){
          for (var i=0; i<weatherObject[key].length; i++){
            if(weatherObject[key][i]===currentWeather){
              var currentKey=key;
              dataObject.weatherType[currentKey]++;
              
            }
          }
        } 
      }
      //for loop for weather view tupleArray
      for(var i=0; i<3; i++){
        var addToArray=dataObject.weatherType[i]
        tupleData.weatherType.push(addToArray);
      }
  })

};

return {retrieveInfo: retrieveInfo, tupleData: tupleData}
});