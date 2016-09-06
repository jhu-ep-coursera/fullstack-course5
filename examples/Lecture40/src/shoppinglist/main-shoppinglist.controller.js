(function () {
'use strict';

angular.module('ShoppingList')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['ShoppingListService', 'items'];
function MainShoppingListController(ShoppingListService, items) {
  var mainList = this;
  mainList.items = items;
}

})();
