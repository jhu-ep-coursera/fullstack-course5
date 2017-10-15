(function () {
'use strict';

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope', '$filter'];
function ShoppingListController($scope, $filter) {
  $scope.shoppingList = shoppingList;
  $scope.search = '';
  $scope.filterShoppingList = shoppingList;

  $scope.filter = function() {
  	$scope.filterShoppingList = $filter('filter') (shoppingList, $scope.search);
  	console.log($scope.filterShoppingList);
  }

/*  $scope.filter = function() {
  	$scope.filterShoppingList = $scope.shoppingList.filter(function(value) {
  		return value.indexOf($scope.search) !== -1;
  	});
  }*/
}


})();
