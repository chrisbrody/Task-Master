var app = angular.module('TaskMaster', []);

app.controller('TaskCtrl', function ($scope) {
	$scope.tasks = [];
	$scope.task = '';

	$scope.addTask = function () {
		$scope.tasks.push( {id:$scope.tasks.length, task:$scope.task} );
		$scope.task = '';
	};
});