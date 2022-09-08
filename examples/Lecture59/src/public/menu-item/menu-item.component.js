(function () {
"use strict";

angular.module('public')
.component('menuItem', {
  templateUrl: 'src/public/menu-item/menu-item.html',
  bindings: {
    menuItem: '<',
    categoryShortName: '<'
  }
});

})();
