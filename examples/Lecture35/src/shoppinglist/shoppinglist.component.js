(function () {
'use strict';

angular.module('ShoppingList')
.component('shoppingList', {
  templateUrl: 'src/shoppinglist/shoppinglist.template.html',
  controller: ShoppingListComponentController,
  bindings: {
    items: '<',
    myTitle: '@title',
    onRemove: '&'
  }
});


ShoppingListComponentController.$inject = ['$rootScope', '$element', '$q', 'WeightLossFilterService']
function ShoppingListComponentController($rootScope, $element, $q, WeightLossFilterService) {
  var $ctrl = this;
  var totalItems;

  $ctrl.$onInit = function () {
    totalItems = 0;
  };


  $ctrl.$doCheck = function () {
    if ($ctrl.items.length !== totalItems) {
      totalItems = $ctrl.items.length;

      $rootScope.$broadcast('shoppinglist:processing', {on: true});
      var promises = [];
      for (var i = 0; i < $ctrl.items.length; i++) {
        promises.push(WeightLossFilterService.checkName($ctrl.items[i].name));
      }

      $q.all(promises)
      .then(function (result) {
        // Remove cookie warning
        var warningElem = $element.find('div.error');
        warningElem.slideUp(900);
      })
      .catch(function (result) {
        // Show cookie warning
        var warningElem = $element.find('div.error');
        warningElem.slideDown(900);
      })
      .finally(function () {
        $rootScope.$broadcast('shoppinglist:processing', { on: false });
      });
    }
  };

  $ctrl.remove = function (myIndex) {
    $ctrl.onRemove({ index: myIndex });
  };
}

})();
