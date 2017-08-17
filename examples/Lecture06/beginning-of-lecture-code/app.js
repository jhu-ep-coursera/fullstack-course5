/*(function () {
'use strict';

angular.module('nameCalculator', []) 

.controller('calController', function($scope) {
	$scope.name = '';
	$scope.calculate = function() {
		var total = 0;
		for (var i = 0; i < $scope.name.length; i++) {
			total += $scope.name.charCodeAt(i);
		}
		// for (var i = 0; i < name.length; i++) {
		// 	total += name.charCodeAt(i);
		// }
		return total;
	}

});
})();
*/

(function() {
	'use strict';

	angular.module('nameCalculator', []) 

	.controller('calController', function($scope) {
		$scope.name = '';
		$scope.calculate = function() {
			var total = 0;
			for (var i = 0; i < $scope.name.length; i++) {
				total += $scope.name.charCodeAt(i);
			}
			console.log($scope);
			return total;
		}
	});
})();