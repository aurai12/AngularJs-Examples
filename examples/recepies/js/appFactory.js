angular.module('myApp').factory('appFactory', ['$http', function($http) {
	
	var searchUser = function(userName) {
		return $http.get("https://api.github.com/users/" + userName)
			.then(function(response){
				return response.data;
			});
		};
	
	return {
		searchUser,
		searchRepo
	};
	
}]);