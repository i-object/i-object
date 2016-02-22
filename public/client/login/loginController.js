angular.module('theButton.loginController',[])

.controller('loginController', function($scope, $location, Info){

  $scope.username = Info.username;

  $scope.getUser = function(user) {
    Info.username = user;
    $scope.username = Info.username;
    console.log($scope.username);
    $location.path('/button/child');
  };

});