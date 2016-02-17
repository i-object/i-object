angular.module('theButton.authentication', [])

.controller('loginControl', function($scope, authFactory) {
  var user = {};

  user.username = $scope.username;
  user.password = $scope.password;

  authFactory.sendAuth(user);
});