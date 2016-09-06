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


MenuItemAdminController.$inject = ['MenuService', 'ApiPath', 'Upload'];
function MenuItemAdminController(MenuService, ApiPath, Upload) {
  var $ctrl = this;
  $ctrl.apiBasePath = ApiPath + '/images';

  $ctrl.cancel = function () {
    $ctrl.onCancel();
  };


  $ctrl.save = function () {
    Upload.base64DataUrl($ctrl.file).then(function (dataUrl) {
      var base64 = getBase64(dataUrl);
      if (base64) {
        $ctrl.menuItem.image_base64_encoded = base64;
      }

      $ctrl.saveMenuItem();
    });
  };


  $ctrl.saveMenuItem = function () {
    return MenuService.saveMenuItem($ctrl.menuItem).then(function (menuItem) {
      $ctrl.menuItem = menuItem;
      $ctrl.onSave({menuItem: menuItem});
    }, function (response) {
      $ctrl.onError({response: response});
    })
  };


  function getBase64(dataUrl) {
    // Make sure we have a dataurl
    if (!dataUrl) {
      return null;
    }

    // Make sure the contents are populated. Split
    // to pull out base64
    //
    // Format: data:<mimeType>;base64,<what-we-want>
    var splitDataUrl = dataUrl.split(',');
    if (splitDataUrl.length !== 2) {
      return null;
    }

    var base64 = splitDataUrl[1];
    return base64;
  }


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
