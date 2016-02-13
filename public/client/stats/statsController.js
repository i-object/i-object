angular.module('theButton.statsController',[])

.controller('statsController', function ($scope, getData, $timeout){
    $scope.username;
    $scope.tupleData=getData.tupleData;


    $scope.retrieveInfo=getData.retrieveInfo;
    


    // $scope.retrieveInfo($scope.username).then(function(){
    //   $scope.reRender();
    // });


    // var reRender = function() {

    // var w = 940;
    // var h = 300;
    // var pad = 20;
    // var left_pad = 100;

    // var svg = d3.select('div.shiit').append('svg');
    //     svg.attr("width", w)
    //       .attr("height", h);

     

    //   var x = d3.scale.linear().domain([0, 23]).range([left_pad, w-pad]);
    //   var y =d3.scale.linear().domain([0,6]).range([pad, h-pad]);

    //   var xAxis = d3.svg.axis().scale(x).orient('bottom')
    //           .ticks(24);
    //   var yAxis = d3.svg.axis().scale(y).orient('left')
    //               .ticks(7)
    //               .tickFormat(function(d, i){
    //                   return['6', '5', '4', '3', '2', '1', '0'][d];
    //               });

    //   svg.append('g')
    //       .attr("class", "axis")
    //       .attr("transform", "translate(0, "+(h-pad)+")")
    //       .call(xAxis);

    //   svg.append('g')
    //       .attr("class", "axis")
    //       .attr("transform", "translate("+(left_pad-pad)+", 0)")
    //       .call(yAxis);



    //      svg.selectAll('circle')
    //               .data($scope.tupleData)
    //               .enter()
    //               .append('circle')
    //               .attr("class", "circle")
    //               .attr("cx", function(d){
    //                   return x(+d[0]);
    //               })
    //               .attr("cy", function(d){
    //                   return h-y(d[1])
    //               })
    //               .attr('r', 3)

    // };









})

// .directive('d3directive', function('statsController') {
//   return {
//     restrict: 'E',
//     scope: {
//       val: '=',
//     },
//     link: function (scope, element, attrs) {
//       var svg = d3.select(element[0]).append("svg");
//         svg.attr("width", w)
//           .attr("height", h);

     

//       var x = d3.scale.linear().domain([0, 23]).range([left_pad, w-pad]);
//       var y =d3.scale.linear().domain([0,6]).range([pad, h-pad]);

//       var xAxis = d3.svg.axis().scale(x).orient('bottom')
//               .ticks(24);
//       var yAxis = d3.svg.axis().scale(y).orient('left')
//                   .ticks(7)
//                   .tickFormat(function(d, i){
//                       return['6', '5', '4', '3', '2', '1', '0'][d];
//                   });

//       svg.append('g')
//           .attr("class", "axis")
//           .attr("transform", "translate(0, "+(h-pad)+")")
//           .call(xAxis);

//       svg.append('g')
//           .attr("class", "axis")
//           .attr("transform", "translate("+(left_pad-pad)+", 0)")
//           .call(yAxis);



//          svg.selectAll('circle')
//                   .data(tupleData)
//                   .enter()
//                   .append('circle')
//                   .attr("class", "circle")
//                   .attr("cx", function(d){
//                       return x(+d[0]);
//                   })
//                   .attr("cy", function(d){
//                       return h-y(d[1])
//                   })
//                   .attr('r', 3)

//     }
//   }
// })