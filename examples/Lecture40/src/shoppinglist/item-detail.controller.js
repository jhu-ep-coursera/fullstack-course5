(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', 'items'];
function ItemDetailController($stateParams, items) {
  var itemDetail = this;
  var item = items[$stateParams.itemId];
  itemDetail.name = item.name;
  itemDetail.quantity = item.quantity;
  itemDetail.description = item.description;
}

})();
