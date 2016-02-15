var myApp = angular.module('myApp', [])

myApp.controller('MyController', [ '$scope', '$http', function($scope, $http) {
	$scope.message = "Angular By Example";
	$scope.user = {};
	$scope.username = "angular";
	

	$scope.search = function(username) {
		var promise = $http.get("https://api.github.com/users/" + username);
		promise.then(onUserSucess, onUserFailure);
	}
	
	function searchRepos() {
		console.log('Searching Repos');
		var promise = $http.get($scope.user.repos_url);
		promise.then(onRepoSucess, onRepoSucess);
	}
	
	var onUserSucess = function(response) {
		console.log('user sucess');
		$scope.user = response.data;
		searchRepos();
	};
	
	var onUserFailure = function(response) {
		console.log('user failure');
		$scope.error = "Failed to find user";
	}

	var onRepoSucess = function(response) {
		console.log('repos sucess');
		$scope.repos = response.data;
	}
	
	var onRepoFailure = function(response) {
		console.log('repos failure');
		$scope.error = "Failed to find repository";
	}
	
}]);
