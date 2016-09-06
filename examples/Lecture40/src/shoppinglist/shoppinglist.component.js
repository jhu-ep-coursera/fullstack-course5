(function () {
'use strict';

angular.module('ShoppingList')
.component('shoppingList', {
  templateUrl: 'src/shoppinglist/templates/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
