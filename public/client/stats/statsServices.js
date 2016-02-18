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
        dataObject.date = {};
           tupleData.date=[];
   tupleData.temperature = [];
        

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
            if(dataObject.date[currentTime]===undefined){
                dataObject.date[currentTime]=1;
            }else{
                dataObject.date[currentTime]++;
            }
        }

        //for loop for date view tupleArray
          for(var key in dataObject.date){
            var addArray=[key, dataObject.date[key]]
            tupleData.date.push(addArray);
            console.log(addArray);
          }


        dataObject.temperature = {};
        //for loop for temperature view
        for(var i=0; i<userData.data.length; i++){
           var currentTemp=userData.data[i]['temperature'];
           currentTemp=(Math.round(currentTemp / 10) * 10);
           if(dataObject.temperature[currentTemp]===undefined){
               dataObject.temperature[currentTemp]=1;
           }else{
               dataObject.temperature[currentTemp]++;
           }
       }

       //for loop for temperature view tupleArray
       for(var key in dataObject.temperature){
           var addArray=[key, dataObject.temperature[key]]
           tupleData.temperature.push(addArray);
           console.log(addArray);
       }

    
  })
};

return {retrieveInfo: retrieveInfo, tupleData: tupleData}
});