angular.module('myApp.homeServices',[])

.factory('Info', function($http) {
  var postingInfo = function(action) {
    return $http({
      method: 'POST',
      url: ,
      data: action
    });
  };

  return {
    postingInfo: postingInfo
  }
});
