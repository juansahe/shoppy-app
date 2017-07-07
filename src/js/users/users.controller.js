class UsersCtrl{
	constructor(UsersService, $scope, Session, $rootScope){
		this.UsersService = UsersService;
		

		$scope.user=Session.getUser();
		$rootScope.us = $scope.user;
		$rootScope.widthX = $scope.user.xperience/1000*95+"%";
        $rootScope.widthS = $scope.user.shopper_points/1000*95+"%";
		$scope.cerrarSesion = function () {
			Session.destroyLc();
		};

	}
}

angular.module('Grimorum.users').controller('UsersCtrl', UsersCtrl);
