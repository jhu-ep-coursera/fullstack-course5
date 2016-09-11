(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope) {
  $scope.name = "Yaakov";
}

})();
