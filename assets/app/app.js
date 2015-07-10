var app = angular.module('TaskMaster', []);

app.controller('TaskCtrl', function ($scope) {
	$scope.tasks = [];
	$scope.task = '';

	$scope.addTask = function () {
		if($scope.task.length >= 1) {
			$scope.tasks.push( {id:$scope.tasks.length, task:$scope.task} );
			$scope.task = '';
		}
	};
	$scope.updateTask = function (task) {
		$scope.task = angular.copy(tasks.task);
	};
	$scope.deleteTask = function (task) {
		var index = $scope.tasks.indexOf(task);
		console.log(index);
		//$scope.task.splice(index.task);
	};
});



