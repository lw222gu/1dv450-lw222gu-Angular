'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .controller('appCtrl', ['$rootScope', '$location', function($rootScope, $location){
      var vm = this;
      console.log('jwt: ', sessionStorage['jwt']);
      vm.authenticated = function(){
        return $rootScope.authenticated;
      }
      vm.login = function(){
        $location.path('/login');
      }
      vm.logout = function(){
        sessionStorage['authenticated'] = false;
        sessionStorage['jwt'] = null;
        console.log('jwt: ', sessionStorage['jwt']);

        sessionStorage['userId'] = null;
        $rootScope.authenticated = false;
        // $rootScope.jwt = null;
        // $rootScope.userId = null;
        $location.path('/index.html');
      }
  }])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/logout', {
        templateUrl: '',
        controller: 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .otherwise({
        redirectTo: '/'
      });
    // $locationProvider.html5Mode(true);
  })

  .constant('API', {
    ApiKey: '1234567890',
    Url: 'http://localhost:4000/api/v1'
  });
