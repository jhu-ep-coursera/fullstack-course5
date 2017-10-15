(function(){
	'use strict';

	angular.module('shoppingList', [])
	.controller('toBuyController', toBuyController)
	.controller('boughtController', boughtController)
	.provider('shoppingListService', shoppingListServiceProvider)
	.config(Config);

	Config.$inject = ['shoppingListServiceProvider'];
	function Config(shoppingListServiceProvider) {
		shoppingListServiceProvider.config.max = 3;
	}

	function shoppingListServiceProvider() {
		var service = this;
		service.config = {
			max: 10,
		};

		service.$get = function() {
			return new shoppingListService(service.config.max);
		}
	}

	function shoppingListService(maxItem) {
		var service = this;
		service.max = maxItem;
		var toBuyItems = [];
		var boughtItems = [];

		service.getToBuyItems = function() {
			return toBuyItems;
		};

		service.getBoughtItems = function() {
			return boughtItems;
		};

		service.checkOff = function(index) {
			boughtItems.push(toBuyItems[index]);
			toBuyItems.splice(index, 1);
		};

		service.reverseList = function(index) {
			var item = boughtItems[index];
			try {
				service.addItems(item.item, item.quantity);
			} catch(error) {
				return;
			}
			boughtItems.splice(index, 1);
		};

		service.addItems = function(item, quantity) {
			if (maxItem === undefined || toBuyItems.length < maxItem) {
				var newItem = {
					name : item,
					quantity : quantity,
				}
				toBuyItems.push(newItem);
			}else {
				throw new Error('Max Items ' + maxItem + " Reached!")
			}
		};
	}

	toBuyController.$inject = ['shoppingListService'];
	function toBuyController(shoppingListService) {
		var toBuy = this;
		toBuy.items = shoppingListService.getToBuyItems();
		toBuy.errorMessage = "";
		toBuy.newItemName = "";
		toBuy.newItemQuantity = "";
		toBuy.addItem = function() {
			try {
				shoppingListService.addItems(toBuy.newItemName, toBuy.newItemQuantity);
			} catch(error) {
				toBuy.errorMessage = error.message;
			}
		};

		toBuy.checkOff = function(index) {
			shoppingListService.checkOff(index)
			if (toBuy.items.length < shoppingListService.max) {
				toBuy.errorMessage = "";
			}

		};
	}

	boughtController.$inject = ['shoppingListService'];
	function boughtController(shoppingListService) {
		var bought = this;
		bought.items = shoppingListService.getBoughtItems();

		bought.reverseList = function(index) {
			shoppingListService.reverseList(index);
		}
	};

})();