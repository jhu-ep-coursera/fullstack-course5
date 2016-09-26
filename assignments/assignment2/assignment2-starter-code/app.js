(function(){
'use strict';
	
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
	var buyItems = this;
	buyItems.items = ShoppingListCheckOffService.getBuyItems();
	buyItems.removeItem = function(itemIndex){
		ShoppingListCheckOffService.buyItem(itemIndex);
	}
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
	var boughtItems = this;
	
	boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
}
	
function ShoppingListCheckOffService() {
	var service = this;
	var buyItems = [
		{name: "cookies", quantity: 10 },
		{name: "chips", quantity: 10 },
		{name: "chocolate", quantity: 10 },
		{name: "biscuits", quantity: 10 },
		{name: "fruit", quantity: 10 }
	];
	
	var boughtItems = [];
	
	service.getBuyItems = function(){
		return buyItems;
	}
	
	service.getBoughtItems = function(){
		return boughtItems;
	}
	
	service.buyItem = function(itemIndex){
		var item = buyItems.splice(itemIndex,1);
		boughtItems.push({name: item[0].name, quantity: item[0].quantity});
	}	
}

})();


