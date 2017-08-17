(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope, $filter, $injector) {
  $scope.name = "";
  $scope.upper = function() {
  	$scope.name = $filter('uppercase')($scope.name);
  }

  function AnnonateMe(name, job, blah) {
  	return 'Blah!';
  }

  console.log(AnnonateMe);
  console.log($injector.annotate(DIController));
}


})();
