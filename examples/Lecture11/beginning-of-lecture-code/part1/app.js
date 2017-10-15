/*(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
}

})();
*/
(function() {
	'use strict';

	angular.module('MsgApp',[])
	.controller('MsgController', MsgController);

	MsgController.$inject=['$scope'];
	function MsgController($scope) {
		$scope.name = 'Jennifer';
        $scope.stateOfBeing = 'hungry';

		$scope.sayMessage = function() {
		return "Jennifer likes to eat healthy snacks!";
	    }

	    $scope.feedJennifer = function() {
	    	if ($scope.stateOfBeing == 'hungry') {
	    		$scope.stateOfBeing = 'fed';
	    	} else {
	    		$scope.stateOfBeing ='hungry';
	    	}
	    }
	}
})();