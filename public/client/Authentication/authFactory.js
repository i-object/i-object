angular.module('thebutton.authFactory', [])

.factory('authFactory', function($http) {
  var sendAuth = function(user) {
    return $http({
      method: 'POST',
      url: "", //need to figure out server url to send to
      data: user
    }).then(function(response) {
      console.log(response);
    });
  };
  
  return { 
    sendAuth: sendAuth
  };

});

/* this will take the object of the user from AuthCont.js and send it as a
post to the server where the server will check if the information is correct
*/
