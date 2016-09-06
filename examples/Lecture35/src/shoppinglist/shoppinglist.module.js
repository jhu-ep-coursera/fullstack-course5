(function () {
'use strict';

angular.module('ShoppingList', ['Spinner']);

angular.module('ShoppingList')
.config(function () {
  console.log("ShoppingList config fired.");
})
.run(function () {
  console.log("ShoppingList run fired.");
});

})();
