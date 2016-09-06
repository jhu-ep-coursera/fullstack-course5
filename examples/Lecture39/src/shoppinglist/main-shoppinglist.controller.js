(function () {
'use strict';

angular.module('ShoppingList')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['items'];
function MainShoppingListController(items) {
  var mainList = this;
  mainList.items = items;
}

})();
