(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    return msg;
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
