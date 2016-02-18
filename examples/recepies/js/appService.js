angular.module('myApp').service('appService', [ '$http', function($http) {

	this.searchRepo = function(user) {
		return $http.get(user.repos_url).then(function(response) {
			return response.data;
		});
	};

} ]);