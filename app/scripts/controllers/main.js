'use strict';

/**
 * @ngdoc function
 * @name venturesityApp.controller:MainCtrl
 * @description
 * # getRequest
 * Controller of the venturesityApp
 */
angular.module('venturesityApp')
  .controller('getRequest', function ($scope, $http) {
    $http.get('http://randomform.herokuapp.com')
      .then(function(response) {
        $scope.jsonOutput = response.data;
      });
  });
