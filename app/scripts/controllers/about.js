'use strict';

/**
 * @ngdoc function
 * @name webAppTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webAppTestApp
 */
angular.module('webAppTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
