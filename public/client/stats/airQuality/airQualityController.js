angular.module('theButton.airQualityController',[])

.controller('airQualityController', function ($scope, getData, $timeout, Info){
    console.log(Info.username);
    $scope.username = Info.username;

    $scope.tupleData=getData.tupleData.airQuality;

    $scope.retrieveInfo= getData.retrieveInfo;
    $scope.chart=null
    var showGraph = function() {
      $scope.tupleData=getData.tupleData.airQuality;
      console.log($scope.tupleData)
      $scope.chart=c3.generate({
        bindto: '#chart',
        type: 'area-spline',
        data: {
            columns: [
            $scope.tupleData
            ]

        },
        colors: {
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
      console.log(info);
      showGraph();
      });
    };

    //d3.select("svg").remove();

})
