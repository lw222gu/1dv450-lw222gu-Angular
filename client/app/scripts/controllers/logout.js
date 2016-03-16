'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LogoutCtrl', function ($location, $rootScope) {
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('userId');
    $location.path('/');
  });
