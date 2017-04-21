class UsersCtrl{
	constructor(UsersService){
		this.UsersService = UsersService;
	}
}

angular.module('Grimorum.users').controller('UsersCtrl', UsersCtrl);
