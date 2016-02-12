var myApp = angular.module('myApp',['myApp.homeController', 'myApp.homeServices', 'ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',{
    templateUrl:"./home/home.html",
    url:'/home',
    controller:'homeController'
  })
  .state('stats',{
    templateUrl:"./stats/stats.html",
    url:"/stats",
    controller:'statsController'
  });
};