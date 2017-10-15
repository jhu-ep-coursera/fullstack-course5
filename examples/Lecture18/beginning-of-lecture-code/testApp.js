(function () {
'use strict';
	angular.module('testApp', [])
	.controller('testController',testController);

	testController.$inject = ['$scope', '$filter'];

	var shoppingList = ['apple', 'pear', 'peach', 'pineapple', 'berry', 'stawberry', 'milk'];

	function testController($scope, $filter) {
	    $scope.filteredShoppingList = shoppingList;

	    // $scope.search = function() {
	    // 	$scope.filteredShoppingList = shoppingList.filter(function(value) {
	    // 		return value.indexOf($scope.searchWord) !== -1;
	    // 	})
	    // };
	    $scope.search = function() {
	    	 $scope.filteredShoppingList = $filter('filter')(shoppingList, $scope.searchWord);
	    }
	}


})();