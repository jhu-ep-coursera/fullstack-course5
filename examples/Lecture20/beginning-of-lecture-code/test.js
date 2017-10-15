(function () {
	'use strict';

	angular.module('testApp', []) 
	.controller('shoppingListAddController', shoppingListAddController)
	.controller('shoppingListShowController', shoppingListShowController)
	.service('shoppingListService', shoppingListService);

	shoppingListAddController.$inject = ['shoppingListService'];
	function shoppingListAddController(shoppingListService) {
		var itemAdder = this;
		itemAdder.item = '';
		itemAdder.quantity = '';
		itemAdder.addItem = function() {
			shoppingListService.addItem(itemAdder.item, itemAdder.quantity);
		};
	}

	shoppingListShowController.$inject = ['shoppingListService'];
	function shoppingListShowController(shoppingListService) {
		var itemShow = this;
		itemShow.item = shoppingListService.getItem();
		itemShow.removeItem = function(index) {
			shoppingListService.removeItem(index);
		}
	}

	function shoppingListService() {
		var service = this;
		var item = [];
		service.addItem = function(itemName, quantity) {
			var newItem = {
				itemName: itemName,
				quantity: quantity,
			}
			item.push(newItem);
		};
		service.getItem = function() {
			return item;
		}
		service.removeItem = function(index) {
			item.splice(index, 1);
		}
	}
})();