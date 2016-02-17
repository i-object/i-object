angular.module('theButton',['theButton.buttonController', 'theButton.buttonFactory', 'ui.router','theButton.statsController', 'theButton.statsFactory'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', { //for the login page
    templateUrl: "./Authentication/loginPage.html",
    data: {
      requireLogin: false //to show being logged in is not required for this page
    }
  })
  .state('button',{
    templateUrl: "./button/button.html",
    url:'/button',
    controller:'buttonController',
    data: {
      requireLogin: true //to show that being logged in is required to access
    }
  })
  .state('stats',{
    templateUrl:"./stats/stats.html",
    url:"/stats",
    controller:'statsController',
    data: {
      requireLogin: true //to show that being logged in is required to access
    }
  });

  $urlRouterProvider.otherwise('/button'); //default if the above doesn't apply
});