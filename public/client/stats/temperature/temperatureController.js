angular.module('theButton.temperatureController',[])

.controller('temperatureController', function ($scope, getData, $timeout){
    $scope.username;
    $scope.tupleData=getData.tupleData.temperature;

    $scope.retrieveInfo= getData.retrieveInfo;

    var render = function() {
     d3.select("svg").remove();

     var w = 940;
     var h = 300;
     var pad = 20;
     var left_pad = 100;

     var svg = d3.select('div.d3Main').append('svg');
       svg.attr("width", w)
         .attr("height", h);

     var x = d3.scale.linear().domain([-40, 110]).range([left_pad, w-pad]);
     var y =d3.scale.linear().domain([0,20]).range([pad, h-pad]);

     var xAxis = d3.svg.axis().scale(x).orient('bottom')
             .ticks(16);
     var yAxis = d3.svg.axis().scale(y).orient('left')
                 .ticks(20)
                 .tickFormat(function(d, i){
                     return['20', '19', '18', '17', '16', '15', '14','13', '12', '11', '10', '9', '8', '7', '6','5','4','3','2','1','0'][d];
                 });

     svg.append('g')
         .attr("class", "axis")
         .attr("transform", "translate(0, "+(h-pad)+")")
         .call(xAxis);

     svg.append('g')
         .attr("class", "axis")
         .attr("transform", "translate("+(left_pad-pad)+", 0)")
         .call(yAxis);

     svg.selectAll('circle')
         .data($scope.tupleData)
         .enter()
         .append('circle')
         .attr("class", "circle")
         .attr("cx", function(d){
            return x(+d[0]);
         })
         .attr("cy", function(d){
           return h-y(d[1])
         })
        .attr('r', 3)
   };

  $scope.reRenderDate = function() {
      $timeout(render, 1000)
  };

  $scope.reRenderDate();

})
