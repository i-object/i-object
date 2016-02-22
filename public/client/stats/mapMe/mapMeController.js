angular.module('theButton.mapMeController',[])

.controller('mapMeController', function ($scope, getData, $timeout, Info, Map, getData){
    //ensures value of inputbox is the saved username from login
    //$scope.username = Info.username;
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    //tupleData factory object gets updated by the retrieveInfo method    
    // TODO $scope.tupleData=getData.tupleData.ADDHERE

    $scope.retrieveInfo= getData.retrieveInfo;
      console.log('controller is being setup');
    // var myLatLng = {
    //   lat: 37.787648,
    //   lng: -122.400311,
    // };

    var locationData=getData.tupleData.location;

    $scope.reRenderData = function(user){
      $scope.retrieveInfo(user).then(function(info){
        locationData=getData.tupleData.location;
        Map.initialize(locationData[0], document.getElementById('map'));
        $scope.map = {};
        $scope.map = Map.gmap;
        for(var i=0; i<locationData.length; i++){
          var marker = new google.maps.Marker({
            position: locationData[i],
            map: $scope.map,
            label: 'M',
           title: 'Maker Square'
          });
        }
      });
    };

  $scope.centerMap = function(geo) {
    Map.gmap.setCenter(new google.maps.LatLng(geo.coordinates[0], geo.coordinates[1]))
  };
})

  