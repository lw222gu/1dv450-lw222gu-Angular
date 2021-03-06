'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PageCtrl', function($scope, Authenticated){
    $scope.$on('$routeChangeSuccess', function(event){
      Authenticated.setAuthenticated();
      $scope.authenticated = Authenticated.getAuthenticated();
      console.log('Logged in: ' + $scope.authenticated);
      console.log('User id: ' + sessionStorage['userId']);
    });
  });
