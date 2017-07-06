class UsersCtrl{
	constructor(UsersService, $scope, Session){
		this.UsersService = UsersService;
		

		$scope.user=Session.getUser();
		document.getElementById("xperience").style.width = $scope.user.xperience/1000*95+"%";
    	document.getElementById("shopper").style.width = $scope.user.shopper_points/1000*95+"%";
		$scope.cerrarSesion = function () {
			Session.destroyLc();
		};

	}
}

angular.module('Grimorum.users').controller('UsersCtrl', UsersCtrl);
