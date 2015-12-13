'use strict';


angular.module('core').controller('HomeController', ['$scope', '$location','Authentication','$http',
	function($scope, $location, Authentication,$http) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user)
			$location.path('/signin');
		
		// This provides Authentication context.
		$scope.authentication = Authentication;
		




        $scope.getStatus = function() {
            $http.get('/status/').success(function(response) {
                $scope.StatusList = response;

                //console.log(response);
            });
        };

        $scope.createStatus = function() {
            $scope.sucess = $scope.error = false;

            if (typeof $scope.status !== 'undefined') {
                $http.post('/status/create/' + $scope.user._id, {Status:$scope.status}).success(function (response) {
                    // If successful we assign the response to the global user model


                    $scope.sucess = true;
                    //$scope.createStatusForm.$setPristine();
                    $scope.status = '';
                    $scope.getStatus();
                   // $scope.$apply();


                }).error(function (response) {
                    $scope.error = response.message;
                    console.log(response.message);
                });
                $scope.getStatus();
                //$scope.$apply();
            }
            //$scope.getStatus();

        };
    }

]);

angular.module('core').controller('CommentController', ['$scope', '$location','Authentication','$http','$window',
    function($scope, $location, Authentication,$http,$window) {
        $scope.user = Authentication.user;

        // If user is not signed in then redirect back home
        if (!$scope.user)
            $location.path('/signin');

        // This provides Authentication context.
        $scope.authentication = Authentication;

        $scope.createComment = function() {
            $scope.sucess = $scope.error = false;

            if (typeof $scope.comment !== 'undefined') {
                $http.post('/comment/create/' + $scope.Status._id+'/'+$scope.user._id, {Comment:$scope.comment}).success(function (response) {
                    // If successful we assign the response to the global user model


                    $scope.sucess = true;
                    //$scope.createStatusForm.$setPristine();
                    $scope.comment = '';
                    $scope.getComments($scope.Status._id);
                    //$scope.$apply();
                    $window.location.reload();


                }).error(function (response) {
                    $scope.error = response.message;
                    console.log(response.message);
                });
                $scope.getComments($scope.Status._id);
            }
            //$scope.getStatus();

        };

        $scope.getComments = function(status_id) {
            $http.get('/comment/'+ status_id).success(function(response) {
                $scope.CommentsList = response;

                //console.log(response);
            });
        };


    }

]);

angular.module('core').controller('FriendsController', ['$scope', '$location','Authentication','$http',
    function($scope, $location, Authentication,$http) {
        $scope.user = Authentication.user;

        // If user is not signed in then redirect back home
        if (!$scope.user)
            $location.path('/signin');

        // This provides Authentication context.
        $scope.authentication = Authentication;


        $scope.getFriends = function() {
            $http.get('/friends/').success(function(response) {
                $scope.FriendsList = response;

                //console.log(response);
            });
        };


    }

]);




