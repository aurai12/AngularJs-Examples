var myApp = angular.module('myApp', []);

myApp.controller('MyController', [ '$scope', '$http', '$interval', '$log', '$location', '$anchorScroll', 'appFactory', 'appService',
                                   function($scope, $http, $interval, $log, $location, $anchorScroll, appFactory, appService) {
	$scope.message = "Angular By Example";
	$scope.user = {};
	$scope.username = "angular";
	$scope.countDown = 5;
	var intervalObject = null;

	$scope.search = function(username) {
		$log.info('Searching for ' + username);
		var promise = appFactory.searchUser(username);
		promise.then(onUserSucess, onUserFailure);
		if(intervalObject) {
			$interval.cancel(intervalObject);
			$scope.countDown = null;
		}
	}

	function searchRepos() {
		console.log('Searching Repos');
		var promise = appService.searchRepo($scope.user);
		promise.then(onRepoSucess, onRepoSucess);
		$location.hash('userDetail');
		$anchorScroll();
	}

	var onUserSucess = function(data) {
		console.log('user sucess');
		$scope.user = data;
		searchRepos();
	};

	var onUserFailure = function(response) {
		console.log('user failure');
		$scope.error = "Failed to find user";
	};

	var onRepoSucess = function(data) {
		console.log('repos sucess');
		$scope.repos = data;
	};
	
	var onRepoFailure = function(response) {
		console.log('repos failure');
		$scope.error = "Failed to find repository";
	};
	
	var decrementCount = function() {
		$scope.countDown -= 1;
		if($scope.countDown <1 ){
			$scope.search($scope.username);
		}
	};
	
	var startCounter = function() {
		intervalObject = $interval(decrementCount, 1000, 5);
	}
	
	startCounter();
	
}]);