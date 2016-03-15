'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($http, $scope, API) {
    var vm = this;
    console.log('I logincontrollern');

    vm.submit = function(){
      var url = API.Url + '/auth';

      var params = {
        username: $scope.login.user.username,
        password: $scope.login.user.password
      };

      var config = {
        headers: {
          'X-ApiKey': API.ApiKey,
          'Accept': 'application/json'
        }
      };

      var promise = $http.post(url, params, config);

      promise.success(function(data, status, headers, config){
        console.log(data);
        console.log(status);
        console.log(headers);
        console.log(config);
      });

      promise.error(function(data, status, headers, config){
        console.log(data);
        console.log(status);
        console.log(headers);
        console.log(config);
      });

      console.log('loggar in');
      console.log($scope.login.user.username);
      console.log(API.ApiKey);
    };
  });
