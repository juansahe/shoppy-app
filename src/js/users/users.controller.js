class UsersCtrl{
	constructor(UsersService){
		this.UsersService = UsersService;
		$scope.user.name="maria peres";
	}
}

angular.module('Grimorum.users').controller('UsersCtrl', UsersCtrl);
