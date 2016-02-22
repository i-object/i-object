angular.module('theButton.airQualityController',[])

.controller('airQualityController', function ($scope, getData, $timeout, Info){
    //ensures value of inputbox is the saved username from login
    $scope.username = Info.username;

    //tupleData factory object gets updated by the retrieveInfo method
    $scope.tupleData=getData.tupleData.airQuality;

    $scope.retrieveInfo= getData.retrieveInfo;

    //d3 rendering using c3(a d3) library
    $scope.chart=null;

    //d3 rendering using c3(a d3) library
    var showGraph = function() {
      $scope.tupleData=getData.tupleData.airQuality;
      //console.log($scope.tupleData)
      $scope.chart=c3.generate({
        bindto: '#chart',
        type: 'area-spline',
        data: {
            columns: [
            $scope.tupleData
            ]

        },
        colors: {
          //is this working? check up on this
            temp: '#ffff99'
        },
        axis: {
            x: {
                type: 'category',
                categories: ['Poor Air Quality', 'Low Air Quality', 'Moderate Air Quality', 'Fair Air Quality', 'Excellent Air Quality']
            }
        }
    });
  }

    $scope.reRenderDate = function(user) {
      $scope.retrieveInfo(user).then(function(info){
      showGraph();
      });
    };

    //d3.select("svg").remove();

})
