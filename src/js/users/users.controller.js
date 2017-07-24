class UsersCtrl{
	constructor(UsersService, $scope, Session, $rootScope){
		this.UsersService = UsersService;
		

		$scope.user=Session.getUser();//traer usuario para mostrar perfil
		console.log($scope.user);
		$rootScope.us = $scope.user;
		$rootScope.widthX = $scope.user.xperience/1000*95+"%";
        $rootScope.widthS = $scope.user.shopper_points/10000*95+"%";
		$scope.cerrarSesion = function () {
			Session.destroyLc(); //funcion para cerrar sesión
			
		};

	}
}

angular.module('Grimorum.users').controller('UsersCtrl', UsersCtrl);
