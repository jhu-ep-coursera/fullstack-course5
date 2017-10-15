(function() {
'use strict';

	angular.module('testApp', [])
	.controller('testController',testController);

	testController.$inject = ['$scope'];

	function testController($scope) {
		$scope.shoppingList = [];
		$scope.addItem = function() {
			var newItem = {
				name: $scope.newItem,
				quantity: $scope.newQuantity
			};
			$scope.shoppingList.push(newItem);
		}
	}
})();