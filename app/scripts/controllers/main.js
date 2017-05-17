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
    $scope.formFields='';
    $http.get('http://randomform.herokuapp.com')
      .then(function(response) {

         //$scope.formFields = response.data.form_fields;
         $scope.formFields = response.data.data.form_fields;

      });
  });
