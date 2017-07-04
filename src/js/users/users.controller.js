class UsersCtrl{
	constructor(UsersService, $scope, Session){
		this.UsersService = UsersService;

		

		$scope.user=JSON.parse(localStorage.getItem('user'));

		$scope.cerrarSesion = function () {
			Session.destroyLc();
		};

	}
}

angular.module('Grimorum.users').controller('UsersCtrl', UsersCtrl);
