'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus','$stateParams',
	function($scope, Authentication, Menus,$stateParams) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');
		$scope.level = $stateParams.demoID;

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);
