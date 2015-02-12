var app = angular.module('reddit');

app.service('firebaseService', function($http, $q) {

	this.getData = function() {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'https://devmtn.firebaseio.com/posts.json'
		}).then(function(response) {
			deferred.resolve(response.data);
		});
		return deferred.promise;
	};





});