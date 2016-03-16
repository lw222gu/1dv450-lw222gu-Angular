'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('SimpleMapCtrl', ['$scope', function($scope){
  angular.extend($scope, {
    center: {
      lat: 59.3,
      lng: 15.0,
      zoom: 6
    },
    defaults: {
      minZoom: 4,
      maxZoom: 15,
      scrollWheelZoom: false
    },
    markers: {
      osloMarker: {
        lat: 59.91,
        lng: 10.75,
        message: "I want to travel here!",
        focus: true,
        draggable: false
      }
    }
  })
}]);
