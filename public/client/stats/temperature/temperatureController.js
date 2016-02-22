angular.module('theButton.temperatureController',[])

.controller('temperatureController', function ($scope, getData, $timeout, Info){
    //ensures value of inputbox is the saved username from login
    $scope.username = Info.username;

    //tupleData factory object gets updated by the retrieveInfo method
    $scope.tupleData=getData.tupleData.temperature;

    $scope.retrieveInfo= getData.retrieveInfo;
    
    //resets chart on load
    $scope.chart=null;

    //d3 rendering using c3(a d3) library
    var showGraph=function(){
    $scope.tupleData=getData.tupleData.temperature;
    //console.log($scope.tupleData)
    $scope.chart=c3.generate({
          //var dataArray=
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
                categories: ['-40', '-30', '-20', '-10', '0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110']
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

  // d3.select("svg").remove();

})
