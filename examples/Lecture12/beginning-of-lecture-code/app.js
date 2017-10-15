(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  $scope.cookiecost = .45;

  $scope.sayMessage = function () {
    return $filter('uppercase')("Yaakov likes to eat healthy snacks at night!");
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
