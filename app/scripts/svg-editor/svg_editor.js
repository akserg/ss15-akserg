'use strict';

var app = angular.module('svg_editor', []);

app.directive('svgroot', [function () {
    return {
        restrict: 'A',
		scope: {
			ngModel: '='
		},
        link: function (scope, element) {
            var drawChart = function(json) {
				element.empty();
				element.append(json);
			};
			
			scope.$watch('ngModel', function(newVal) {
				drawChart(newVal);
			});
        }
    };
}]);

app.controller('SvgCtrl', function($scope) {
  $scope.graph = {'width': 640, 'height': 480};
  $scope.svg = '';
  $scope.update = function() {
	  $scope.svg = '<rect x="5" y="4" width="136" height="79" id="svg_4" fill="#00ff7f" stroke="#7f00ff"></rect>';
  };
});