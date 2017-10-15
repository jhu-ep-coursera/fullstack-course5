(function() {
'use strict';

angular.module('LunchCheck', []) 
.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.lunch = "";
		$scope.arrayOfLunch = [];
		$scope.message ="";
		$scope.count = 0;

		$scope.split = function() {
			$scope.arrayOfLunch = $scope.lunch.split(',');
			console.log($scope.arrayOfLunch);
		}
		$scope.check = function() {
			var array = $scope.arrayOfLunch;
			$scope.count = array.length;
			for (var i = 0; i < array.length; i++) {
				if (array[i] == '') {
					$scope.count--;
				}
			}
			if ($scope.count == 0) {
				$scope.message = 'Please Enter Data First!';
			}else if ($scope.count <= 3) {
				$scope.message = 'Enjoy!';
			}else {
				$scope.message = 'Too much!';
			}
		}
	}

})();