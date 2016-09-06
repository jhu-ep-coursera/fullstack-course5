(function() {
"use strict";

angular.module('admin')
.controller('MenuItemEditController', MenuItemEditController);


MenuItemEditController.$inject = ['$stateParams', '$state', 'menuItem', '$log'];
function MenuItemEditController($stateParams, $state,  menuItem, $log) {
  var $ctrl = this;
  $ctrl.menuItem = menuItem;

  $ctrl.onSave = function (menuItem) {
    $state.go('admin.auth.category',
              {categoryId: menuItem.category_short_name},
              {reload: true}); // tells resolves to refresh
  };

  $ctrl.onCancel = function () {
    $state.go('admin.auth.category',
              {categoryId: menuItem.category_short_name});
  };

  $ctrl.onError = function (response) {
    $log.error(response); // for debugging
  };

}


})();
