angular.module('theButton',['theButton.buttonController', 'theButton.buttonFactory','theButton.temperatureController', 'ui.router','theButton.statsController', 'theButton.statsFactory'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('button',{
    templateUrl:"./button/button.html",
    url:'/button',
    controller:'buttonController'
  })
  .state('stats',{
    templateUrl:"./stats/stats.html",
    url:"/stats",
    controller:'statsController'
  })
  .state('temperature',{
    templateUrl:"./stats/temperature/temperature.html",
    url:"/temperature",
    controller:'temperatureController'
  });

  $urlRouterProvider.otherwise('/button'); //default if the above doesn't apply
});