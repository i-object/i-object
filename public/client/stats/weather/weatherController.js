angular.module('theButton.weatherController',[])

.controller('weatherController', function ($scope, getData, $timeout, Info){
    //ensures value of inputbox is the saved username from login
    $scope.username = Info.username;

    //tupleData factory object gets updated by the retrieveInfo method    
    $scope.tupleData=getData.tupleData.weatherType;

    $scope.retrieveInfo= getData.retrieveInfo;

    //resets chart on load
    $scope.chart=null

    //d3 rendering using c3(a d3) library    
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