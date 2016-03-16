'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($http, $scope, $rootScope, API, $location) {
    var vm = this;
    console.log('I logincontrollern');

    vm.submit = function(){

      // TODO: if username and password is provided

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
        sessionStorage.setItem('userId', data.user_id);
        sessionStorage.setItem('jwt', data.token);
        $rootScope.authenticated = true;
        // $rootScope.jwt = data.token;
        // $rootScope.userId = data.user_id;
        sessionStorage['authenticated'] = true;
        sessionStorage['jwt'] = data.token;
        sessionStorage['userId'] = data.user_id;
        //$location.path('/profile');
        $location.path('/');
        console.log(status);
        console.log(headers);
        console.log(config);
      });

      promise.error(function(data, status, headers, config){
        console.log(data);
        console.log(status);
        console.log(headers);
        console.log(config);
        console.log("fel inloggningsuppgifter");
        sessionStorage.setItem('userId', null);
        sessionStorage.setItem('jwt', null);
      });
    };
  });
