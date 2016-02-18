angular.module('theButton',['theButton.buttonController', 'theButton.buttonFactory','theButton.temperatureController', 'ui.router','theButton.dateController', 'theButton.statsFactory'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('button',{
    templateUrl:"./button/button.html",
    url:'/button',
    controller:'buttonController'
  })

  .state('button.child', {
    template:'<h1> THIS IS AN AWESOME TEST </h1>',
    url: '/child'
  })
  .state('date',{
    templateUrl:"./stats/date/date.html",
    url:"/date",
    controller:'dateController'
  })
  .state('temperature',{
    templateUrl:"./stats/temperature/temperature.html",
    url:"/temperature",
    controller:'temperatureController'
  });

  $urlRouterProvider.otherwise('/button'); //default if the above doesn't apply
});