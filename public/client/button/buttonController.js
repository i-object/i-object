angular.module('theButton.buttonController',[])

.controller('buttonController', function($scope, Info){
  console.log(Info.username);
  $scope.username = Info.username;
  $scope.current={};
  $scope.current.airQuality;
  $scope.current.airQualityDesc;
  $scope.current.weather;
  $scope.current.temperature;

  $scope.postingInfo = Info.postingInfo;

  $scope.currentData=function(user){
    if(navigator.geolocation){
        var latitude;
        var longitude;
        navigator.geolocation.getCurrentPosition(function(position){
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            $scope.postingInfo(user, longitude, latitude).then(function(info){
                console.log("the current data response looks like", info);
                $scope.current.airQuality="Air Quality: "+info.data.airQuality;
                $scope.current.airQualityDesc ="Air Quality status: "+ info.data.airQualityDesc;
                $scope.current.weather="Weather: "+info.data.weather;
                $scope.current.temperature="Temperature: "+ info.data.temperature;
            });
        });
    } else {
        console.log('everything is awful');
    }
  };
});