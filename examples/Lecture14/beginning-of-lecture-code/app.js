(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {

  $scope.clicker = 0;
  $scope.ticker = 0;
  $scope.name = 'Jennfer';

  $scope.showNumberOfWatchers = function () {
  	console.log("# of watchers", $scope.$$watchersCount);
  };

  $scope.watcherOnce = function() {
  	$scope.clicker = 1;
  };

  $scope.increaseClicker = function() {
  	$scope.ticker++;
  };


  $scope.$watch(function () {
    console.log("Digest Loop Fired!");
  })

 /* $scope.$watch('clicker', function(newValue, oldValue) {
  	console.log("new Value :", newValue);
  	console.log("old Value :", oldValue);
  });

  $scope.$watch('ticker', function(newV, oldV) {
  	console.log("ticker new value :", newV);
  	console.log("tikcer old value :", oldV);
  })*/

}

})();
