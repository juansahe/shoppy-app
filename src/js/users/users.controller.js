class UsersCtrl{
	constructor(UsersService, $scope){
		this.UsersService = UsersService;

		$scope.user=JSON.parse(localStorage.getItem('user'));;
	}
}

angular.module('Grimorum.users').controller('UsersCtrl', UsersCtrl);
