(function(){
//'use strict';
	
angular.module('lunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
			
function LunchCheckController($scope){
	$scope.lunchMenu = "";
	$scope.isEmpty = false;
	$scope.enjoy = false;
	$scope.tooMuch = false;
	
	$scope.checkIfTooMuch = function(){
		if ($scope.lunchMenu.length ==0){
			$scope.isEmpty = true;
			$scope.tooMuch = false;
			$scope.enjoy = false;
		}
		else{
			$scope.isEmpty = false;
			var menuItems = $scope.lunchMenu.split(",");
			$scope.tooMuch = menuItems.length > 3 ? true :false;
			$scope.enjoy = menuItems.length <= 3 ? true :false;
		}
		
	}
}
	
})();