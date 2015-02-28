var MyController = function($scope) {
	$scope.message = "Hello world";
	$scope.action = function() {
		$scope.message = "Goodbye, Everyone";
	};
};

var appModule = angular.module('app', []);
appModule.controller('myController', MyController);
