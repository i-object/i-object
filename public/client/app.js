angular.module('theButton',['theButton.buttonController', 'theButton.buttonFactory','theButton.temperatureController', 'ui.router','theButton.dateController', 'theButton.statsFactory', 'theButton.weatherController'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('button',{
    templateUrl:"./button/button.html",
    url:'/button',
    controller:'buttonController'
  })

  .state('button.child', {
    templateUrl:'./button/buttonChild.html',
    url: '/child'
  })
  .state('date', {
    templateUrl:"./stats/date/date.html",
    url:"/date",
    controller:'dateController'
  })
  .state('temperature',{
    templateUrl:"./stats/temperature/temperature.html",
    url:"/temperature",
    controller:'temperatureController'
  })
  .state('weatherType', {
    templateUrl: './stats/weather/weather.html',
    url:'/weather',
    controller:'weatherController'
  });

  $urlRouterProvider.otherwise('/button'); //default if the above doesn't apply
});