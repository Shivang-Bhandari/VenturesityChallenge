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
    $scope.jsonCall = function() {
      $http.get('http://randomform.herokuapp.com')
        .then(function(response) {
          $scope.formFields = response.data.data.form_fields;
          console.log(response.data.data.form_fields);
        });
    };

  });

