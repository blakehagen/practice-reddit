var app = angular.module('reddit');

app.controller('postsController', function($scope, firebaseService) {

	$scope.getPosts = function() {
		firebaseService.getData()

		}
	}


});