angular.module('theButton.buttonController',[])

.controller('buttonController', function($scope, Info){

  $scope.username;

  $scope.postingInfo = Info.postingInfo;

});