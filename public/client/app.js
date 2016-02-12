angular.module('theButton',['theButton.buttonController', 'theButton.buttonFactory', 'ui.router'])

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
  });

  $urlRouterProvider.otherwise('/button'); //default if the above doesn't apply
});