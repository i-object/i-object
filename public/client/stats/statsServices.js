angular.module('theButton.statsFactory',[])

.factory('getData', function($http){
  var tupleData = {};
   tupleData.date=[];
   tupleData.temperature = [];

//Makes Post request and appends d3 viz to div in html  
  var retrieveInfo=function(user){
    return $http({
        method: 'POST',
        url: '/api/stats',
        data: {user: user}
    })
    .then(function(userData){
        console.log("In client responding to stats");

        var dataObject = {}
        dataObject.date = {'0':0, '1':0, '2':0, '3':0, '4':0, '5' :0, '6':0, '7':0, '8':0, '9':0, '10':0, '11':0, '12':0, '13':0, '14':0, '15':0, '16':0, '17':0, '18':0, '19': 0, '20':0, '21':0, '22':0, '23':0 };
        dataObject.temperature = {'-40' :0, '-30':0, '-20':0, '-10':0, '0':0, '10':0, '20':0, '30':0, '40':0, '50':0, '60':0, '70':0, '80':0, '90':0, '100':0, '110':0};
        dataObject.weatherType ={'0':0, '1':0, '2':0};
           tupleData.date=['hour'];
   tupleData.temperature = ['temp'];
   tupleData.weatherType=['weather'];
        

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
           //console.log(addArray);
       }
       //for loop for weather view
       console.log(userData.data)
      var weatherObject={0:["clear-day", "clear-night", "wind" ], 1:["fog", "cloudy", "partly-cloudy-day", "partly-cloudy-night", "Mostly Cloudy", "Partly Cloudy"], 2:["rain", "snow", "sleet", "hail", "thunderstorm", "tornado"]}
      for(var j=0; j<userData.data.length; j++){
        var currentWeather=userData.data[j]['weather'];
        console.log('currentWeather', currentWeather);
        for(var key in weatherObject){
          for (var i=0; i<weatherObject[key].length; i++){
            if(weatherObject[key][i]===currentWeather){
              var currentKey=key;
              dataObject.weatherType[currentKey]++;
              
            }
          }
        } 
      }
      console.log('tupleData', tupleData)

      for(var i=0; i<3; i++){
        var addToArray=dataObject.weatherType[i]
        tupleData.weatherType.push(addToArray);
      }
      console.log('tupleArray', tupleData)
  })
      console.log("tupleData.date", tupleData['date'])

};

return {retrieveInfo: retrieveInfo, tupleData: tupleData}
});