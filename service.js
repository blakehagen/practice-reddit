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


	this.addPost = function(post) {
		var deferred = $q.defer();
		post.timestamp = Date.now();
		post.comments = [];
		post.karma = 0;
		post.id = guid();
		$http({
			method: 'PUT',
			url: 'https://devmtn.firebaseio.com/posts/' + post.id + '.json',
			data: post
		}).then(function(response) {
			deferred.resolve(response.data);
		});
		return deferred.promise;
	};


  var guid = function() {
    var s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }









});