'use strict';

/**
 * @ngdoc function
 * @name virtualBoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the virtualBoardApp
 */
angular.module('virtualBoardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
