'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    console.log('Main: Logged in ' + $rootScope.authenticated);
    console.log('Main: Logged in sessionStorage ' + sessionStorage['authenticated']);
    return $rootScope.authenticated;
  });
