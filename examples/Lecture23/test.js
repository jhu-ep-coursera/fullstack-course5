(function() {
	'use strict';

	angular.module('testApp', [])
	.controller('ShoppingListController',ShoppingListController)
	.provider('service', serviceProvider)
	.config(Config);

	Config.$inject = ['serviceProvider'];
	function Config(serviceProvider) {
		serviceProvider.config.maxItem = 3;
	}

	function shoppingListService(maxItem) {
		var service = this;
		var items = [];
		service.addItem = function(itemName, itemQuantity) {
			if (items.length >= maxItem) {
				throw new Error('max Items ' + maxItem + " has reached!");
			}
			var newItem = {
				name: itemName,
				quantity: itemQuantity,
			};
			items.push(newItem);
		}

		service.removeItem = function(index) {
			items.splice(index, 1);
		}

		service.getItems = function() {
			return items;
		}	
	}

	function serviceProvider() {
		var service = this;
		service.config = {
			maxItem: 10,
		}
		service.$get = function() {
			return new shoppingListService(service.config.maxItem);
		}
	}

	ShoppingListController.$inject = ['service'];
	function ShoppingListController(service) {
		var List1 = this;
		List1.items = service.getItems();
		List1.itemName = "";
		List1.itemQuantity = "";
		List1.errorMessage = "";

		List1.addItem = function() {
			try {
				service.addItem(List1.itemName, List1.itemQuantity);
			}catch(error) {
				List1.errorMessage = error.message;
			}
		};

		List1.removeItem = function(index) {
			service.removeItem(index);
		}
	}

})();