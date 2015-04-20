'use strict';

/**
 * @ngdoc function
 * @name webAppTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webAppTestApp
 */
angular.module('webAppTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
