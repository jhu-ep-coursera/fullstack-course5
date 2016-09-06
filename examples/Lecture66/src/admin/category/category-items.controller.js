(function () {
"use strict";

angular.module('admin')
.controller('CategoryItemsController', CategoryItemsController);


CategoryItemsController.$inject = ['category', 'menuItems'];
function CategoryItemsController(category, menuItems) {
  var $ctrl = this;
  $ctrl.category = category;
  $ctrl.menuItems = menuItems.menu_items;
}


})();
