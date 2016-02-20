angular.module('theButton.weatherController',[])

.controller('weatherController', function ($scope, getData, $timeout){
    $scope.username;
    $scope.tupleData=getData.tupleData.weatherType;

    $scope.retrieveInfo= getData.retrieveInfo;
    $scope.chart=null
    var showGraph = function() {
      $scope.tupleData=getData.tupleData.weatherType;
      $scope.chart=c3.generate({
        bindto: '#chart',
        type: 'area-spline',
        data: {
          columns: [
          $scope.tupleData
          ]

        },
        axis: {
          x: {
            type: 'category',
            categories: ['Clear', 'Cloudy', 'Precipitation']
          }
        }
      });
    }

    $scope.reRenderDate = function(user) {
      $scope.retrieveInfo(user).then(function(info){
      console.log(info);
      showGraph();
      });
    };

    

})