angular.module('theButton.statsFactory',[])

.factory('getData', function($http){
var tupleData=[]
var retrieveInfo=function(user){
    return $http({
        method: 'POST',
        url: '/api/stats',
        data: {user: user}
    }).then(function(userData){
      console.log("hey we arein the client responing to stats");
      console.log(userData);
        var dateObject={};


        for(var i=0; i<userData.data.length; i++){
            console.log('we in the for loop');
            var currentTime=userData.data[i]['date'].slice(11, 13);
            console.log("currentTime", currentTime)
            // if(currentTime.getMinutes() >= 30) {
            //    currentTime.setHours(currentTime.getHours() + 1);
            // }
            // currentTime.setMinutes(0);
            if(dateObject[currentTime]===undefined){
                dateObject[currentTime]=1;
            }else{
                dateObject[currentTime]++;
            }
        }

        for(var key in dateObject){
            var addArray=[key, dateObject[key]]
            tupleData.push(addArray);
            console.log(addArray);
        }

    var reRender = function() {
      angular.element('div.shiit').value('');
      // d3.select('div.shiit').empty();

    var w = 940;
    var h = 300;
    var pad = 20;
    var left_pad = 100;
    // var div=d3.select('div.shiit').append('div.candy')
    //     div.attr("width", w)
    //     .attr('height', h);
    var svg = d3.select('div.shiit').append('svg');
        svg.attr("width", w)
          .attr("height", h);

     

      var x = d3.scale.linear().domain([0, 23]).range([left_pad, w-pad]);
      var y =d3.scale.linear().domain([0,6]).range([pad, h-pad]);

      var xAxis = d3.svg.axis().scale(x).orient('bottom')
              .ticks(24);
      var yAxis = d3.svg.axis().scale(y).orient('left')
                  .ticks(7)
                  .tickFormat(function(d, i){
                      return['6', '5', '4', '3', '2', '1', '0'][d];
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
                  .data(tupleData)
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
    reRender();

    })
}



    return {retrieveInfo: retrieveInfo, tupleData: tupleData}
})