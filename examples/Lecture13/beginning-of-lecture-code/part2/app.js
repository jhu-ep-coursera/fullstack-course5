(function () {
'use strict';



angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('replace', ReplaceFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', replaceFilter, truthFilter];

function MsgController($scope, replaceFilter, truthFilter) {
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    return replaceFilter(msg);
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };

  $scope.sayTruthMessage = function(target, replace) {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    return truthFilter(msg, target, replace);
  };
}

function ReplaceFilter() {
  return function(msg) {
    msg = msg || '';
    msg = msg.replace('likes', 'loves');
    return msg;
  }
}

function TruthFilter() { 
  return function(msg, target, replace) {
    msg = msg || '';
    return msg.replace(target, replace);
  }
}

})();
