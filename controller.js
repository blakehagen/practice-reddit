var app = angular.module('reddit');

app.controller('PostsController', function($scope, firebaseService) {

	firebaseService.getData().then(function(response) {
		$scope.posts = response;
	});

	$scope.addPost = function() {
		firebaseService.addPost($scope.newPost).then(function() {
			getPosts();
		})
	}

});