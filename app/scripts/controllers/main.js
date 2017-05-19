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

    // variable declarations
    $scope.formFields=''; //hold json to parse
    $scope.dataObj={}; //holds data to post

    // config setup for form post
    var config = {
      headers : {
        'Content-Type': 'application/json'
      }
    };


    // function to get json
    $scope.jsonCall = function() {
      $http.get('http://randomform.herokuapp.com')
        .then(function(response) {
          $scope.formFields = response.data.data.form_fields; //sets variable eq to json to parse
          console.log(response.data.data.form_fields); //just a check for proper json incoming
        });
    };

    // function to post json
    $scope.dataPost = function(){
      $http.post('https://randomform.herokuapp.com/submit', dataObj ,config)
        .then(function() {

        });
    };

    $scope.update = angular.copy.person;

  });

