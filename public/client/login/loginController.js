angular.module('theButton.loginController',[])

.controller('loginController', function($scope, $location, Info){

  $scope.username = Info.username;

  //invoked on button in html
  $scope.getUser = function(user) {
    Info.username = user;
    $scope.username = Info.username;

    //reroutes to homepage after login is recorded
    $location.path('/button/child');
  };

});