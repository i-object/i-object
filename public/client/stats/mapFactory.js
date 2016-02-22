angular.module('theButton.mapperModel', [])

.factory('Map', function(getData) {
  var map = {};
  map.gmap = {};
  //map.tweet = [];
  map.marker = [];
  //map.tweetChanged= false;
  map.initialize = function(location, domObj) {
    map.gmap = new google.maps.Map(domObj, {
      zoom: 15,
      center: location
    });
  };

  // map.setMarker = function(tweet) {
  //   var myLatlng = {
  //     lat: tweet.geo.coordinates[0],
  //     lng: tweet.geo.coordinates[1]
  //   };
    // var image = {
    //   url: tweet.user.profile_image_url_https,
    //   size: new google.maps.Size(30, 30),
    //   origin: new google.maps.Point(0, 0),
    //   anchor: new google.maps.Point(0, 0)
    // };

    // var marker = new google.maps.Marker({
    //   position: myLatlng,
    //   map: map.gmap,
    //   icon: tweet.user.profile_image_url_https,
    //   title: tweet.user.screen_name
    // });

    // var contentString = '<div>' + tweet.user.screen_name + '</div>' +
    //   '<div>' + tweet.text + '</div>' +
    //   '<div>' + tweet.created_at + '</div>';
    
    // var infowindow = new google.maps.InfoWindow({
    //   content: contentString
    // });

  //   marker.addListener('click', function(e) {
  //     infowindow.open(map.gmap, marker);
  //   });
  //   map.marker.push(marker);

  // }

  // map.removeMarker= function(){
  //   for(var i =0;i <map.marker.length;i++)
  //   {
  //     map.marker[i].setMap(null);
  //   }
  // }

  return map;
});
