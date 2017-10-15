(function() {
'use strict';

	angular.module('tryApp', [])
	.controller('tryController',tryController);

	tryController.$inject = ['$scope'];

	function tryController($scope) {
		$scope.name = 'Jenn';
	}
})();