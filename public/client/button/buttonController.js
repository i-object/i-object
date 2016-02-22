angular.module('theButton.buttonController',[])

.controller('buttonController', function($scope, Info){

  //username saved from login, and is value of html input box
  $scope.username = Info.username;

  //.current object is what is used in the nested view by ng-repeat
  $scope.current={};
  $scope.current.airQuality;
  $scope.current.airQualityDesc;
  $scope.current.weather;
  $scope.current.temperature;

  //factory method which makes post req to serve w/user info
  $scope.postingInfo = Info.postingInfo;

  //invoked by button, gathers geo data, updates the .current obj
  $scope.currentData=function(user){
    if(navigator.geolocation){
        var latitude;
        var longitude;
        navigator.geolocation.getCurrentPosition(function(position){
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            $scope.postingInfo(user, longitude, latitude).then(function(info){
                $scope.current.airQuality="Air Quality: "+info.data.airQuality;
                $scope.current.airQualityDesc ="Air Quality status: "+ info.data.airQualityDesc;
                $scope.current.weather="Weather: "+info.data.weather;
                $scope.current.temperature="Temperature: "+ info.data.temperature;
            });
        });
    } else {
        console.log('everything is awful');
        //informs user that geolocation is broken, essentially breaking app
        alert('geolocation is not working');
    }
  };
});