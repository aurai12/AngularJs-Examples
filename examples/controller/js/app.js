var myApp = angular.module('myApp', [])

myApp.controller('MyController', [ '$scope', '$http', function ($scope, $http) {
		$scope.message = "Hello Angular";
		
		var onRequestSucess = function(response) {
			console.log(JSON.stringify(response));
			console.log('request sucess' + response.name);
			
			$scope.name = response.data.name;
			$scope.avatarUrl = response.data.avatar_url;
		};
		
		var onRequestFailure = function(response) {
			console.log(JSON.stringify(response));
			console.log('request failure');
			$scope.error = "Failed to find user";
		}
		
		var promise = $http.get("https://api.github.com/users/aurai12");
		
		promise.then(onRequestSucess, onRequestFailure);
		
}]);
