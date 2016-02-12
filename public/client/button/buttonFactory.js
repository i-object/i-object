angular.module('theButton.buttonFactory',[])

.factory('Info', function($http) {
  var postingInfo = function(user) {
    return $http({
      method: 'POST',
      url: '/api/button',
      data: user
    });
  };

  return {
    postingInfo: postingInfo
  };

});
