(function () {
	'use strict';

	angular.module('testApp',[])
	.controller('ShoppingList1', ShoppingList1)
	.controller('ShoppingList2', ShoppingList2)
	.factory('ShoppingService', ShoppingService);

	function ShoppingService() {
		return function(max) {
			return new ShoppingListService(max);
		}
	}

	function ShoppingListService(max) {
		var service = this;
		var items = [];
		service.addItem = function(itemName, itemQuantity) {
			if (max === undefined || items.length < max) {
				var newItem = {
					name: itemName,
					quantity: itemQuantity,
				};
				items.push(newItem);
			}else {
				throw new Error("Max item  (" + max + ") Reached!");
			} 
		}

		service.removeItem = function(index) {
			items.splice(index,1);
		};

		service.getItem = function() {
			return items;
		}
	}

	ShoppingList1.$inject = ['ShoppingService'];
	function ShoppingList1(ShoppingService) {
		var list1 = this;

		var service = ShoppingService();
		list1.items = service.getItem();
		list1.itemName = "";
		list1.quantity = "";

		list1.addItem = function() {
			service.addItem(list1.itemName, list1.quantity);
		}

		list1.removeItem = function(index) {
			service.removeItem(index);
		}
	}

	ShoppingList2.$inject = ["ShoppingService"];
	function ShoppingList2(ShoppingService) {
		var list2 = this;

		var service = ShoppingService(3);
		list2.items = service.getItem();
		list2.itemName = "";
		list2.quantity = "";

		list2.addItem = function() {
			try {
				service.addItem(list2.itemName, list2.quantity);
			} catch(error) {
				list2.errorMessage = "Error: " + error.message;
			}
		}

		list2.removeItem = function(index) {
			service.removeItem(index);
			list2.errorMessage = "";
		}
	}
})();