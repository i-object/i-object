angular.module('theButton.buttonFactory',[])

.factory('Info', function($http) {
  //this gets updated from login page
  var username;

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
          //item represents the object saved in db
          console.log('were in then of button factory', item)
          return item;
          });



      };

  return {
    postingInfo: postingInfo,
    username: username
  };

});
