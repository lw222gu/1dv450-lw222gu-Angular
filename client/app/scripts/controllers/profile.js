'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProfileCtrl', function ($scope, $location) {
    var vm = this;

    // TODO: fix this, doesn't work.
    if(sessionStorage['userId'] === null){
      $location.path('/');
    }

    vm.logout = function(){
      sessionStorage.setItem('userId', null);
      sessionStorage.setItem('jwt', null);
      $location.path('/');
    };
  });
