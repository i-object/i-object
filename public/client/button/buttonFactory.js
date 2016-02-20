angular.module('theButton.buttonFactory',[])

.factory('Info', function($http) {
  

  var postingInfo = function(user, longitude, latitude) {
 
        return $http({
          method: 'POST',
          url: '/api/button',
          data: {
            user: user,
            longitude: longitude,
            latitude: latitude
          }
        }).then(function(item) {
          console.log('were in then of button factory', item)
          return item;
          });



      };

  return {
    postingInfo: postingInfo
  };

});
