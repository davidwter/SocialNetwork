'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider','$ocLazyLoadProvider',
	function($stateProvider, $urlRouterProvider,$ocLazyLoadProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');


		// Home state routing
	$stateProvider.
   		state('newsfeed', {
            url: '/newsfeed',
            templateUrl: 'modules/core/views/social_feed.html'
        }).
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/social_feed.html'
		}).
		state('friends', {
			url: '/friends',
			templateUrl: 'modules/core/views/contacts.html'
		});
	}
]);
