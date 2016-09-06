(function () {
"use strict";

angular.module('admin')
.component('menuItemAdmin', {
  templateUrl: 'src/admin/menu-item/menu-item-admin.html',
  bindings: {
    menuItem: '<',
    onSave: '&',
    onError: '&',
    onCancel: '&'
  },
  controller: MenuItemAdminController
});


MenuItemAdminController.$inject = ['MenuService'];
function MenuItemAdminController(MenuService) {
  var $ctrl = this;

  $ctrl.cancel = function () {
    $ctrl.onCancel();
  };


  $ctrl.save = function () {
    console.log("We are trying to save a menu item!");
  };


  $ctrl.valid = function () {
    if (!$ctrl.validatePrices()) {
      return false;
    }
    if ($ctrl.form.$invalid) {
      return false;
    }
    return true;
  };

  $ctrl.validatePrices = function () {
    if (!$ctrl.menuItem.price_small && !$ctrl.menuItem.price_large) {
      $ctrl.priceErrorMessage = 'Price is required';
      return false;
    }

    if ($ctrl.menuItem.price_small && $ctrl.menuItem.price_large) {
      if (!$ctrl.menuItem.small_portion_name || !$ctrl.menuItem.large_portion_name) {
        $ctrl.priceErrorMessage = 'Portion names are required for both prices';
        return false;
      }
    }

    if ($ctrl.menuItem.small_portion_name && !$ctrl.menuItem.price_small) {
      $ctrl.priceErrorMessage = 'If portion is filled in, an associated price must be entered';
      return false;
    }

    if ($ctrl.menuItem.large_portion_name && !$ctrl.menuItem.price_large) {
      $ctrl.priceErrorMessage = 'If portion is filled in, an associated price must be entered';
      return false;
    }

    $ctrl.priceErrorMessage = '';
    return true;
  };
}


})();
