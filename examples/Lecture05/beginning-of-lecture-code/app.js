(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
	$scope.name='Jennifer';
	$scope.sayHello = function() {
		return 'Hello Coursera!';
	}
});

})();
