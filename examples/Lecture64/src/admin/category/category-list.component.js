(function () {
"use strict";

angular.module('admin')
.component('categoryList', {
  templateUrl: 'src/admin/category/category-list.html',
  controller: CategoryListController
});


CategoryListController.$inject = ['MenuService'];
function CategoryListController(MenuService) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    MenuService.getCategories().then(function (categories) {
      $ctrl.categories = categories;
    });
  };
}


})();
