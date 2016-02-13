angular.module('theButton.buttonFactory',[])

.factory('Info', function($http) {
  

  var postingInfo = function(user) {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("latitude is: ", position.coords.latitude);
        var latitude = position.coords.latitude
        console.log("longitude is: ", position.coords.longitude);
        var longitude = position.coords.longitude;
        console.log('were posting');
        return $http({
          method: 'POST',
          url: '/api/button',
          data: {
            user: user,
            longitude: longitude,
            latitude: latitude
          }
        }).then(function(response) {
          console.log(response)
        })



      });
    } else {
      console.log('we cant get geo-data');
    }
  };

  return {
    postingInfo: postingInfo
  };

});
