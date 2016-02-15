angular.module('theButton.statsController',[])

.controller('statsController', function ($scope, getData, $timeout){
    $scope.username;
    $scope.tupleData=getData.tupleData;

    $scope.retrieveInfo=getData.retrieveInfo;
})
