(function() {
	'use strict';

	angular.module('testApp', [])
	.controller('parentController', parentCtrl)
	.controller('childController', childCtrl)
	.controller('controller3', Ctrl3);

	parentCtrl.$inject = ['$scope'];
	function parentCtrl($scope) {
		$scope.value = 'parent';
		$scope.pc = this;
		// this.name = 'Jenn';
		console.log("parent.this", this);
		$scope.point = {
			name: 'Jenn',
		}
		console.log($scope.point);
	}

	childCtrl.$inject = ['$scope'];
	function childCtrl($scope) {
		$scope.value = 'child';
		$scope.pc = this;
		console.log("child.this : ", this);
	}

	function Ctrl3() {
		this.value = 'ctrl3';
		console.log('ctrl3,this: ', this);
	}


})();