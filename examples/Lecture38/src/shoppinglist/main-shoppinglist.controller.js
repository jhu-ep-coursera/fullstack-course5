(function () {
'use strict';

angular.module('ShoppingList')
.controller('MainShoppingListController', MainShoppingListController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
MainShoppingListController.$inject = ['items'];
function MainShoppingListController(items) {
  var mainList = this;
  mainList.items = items;

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
