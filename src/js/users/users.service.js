class UsersService{
	constructor($http, CONFIG, RegisterService){
		this.$http = $http;
		this.RegisterService = RegisterService;
		var user = this.RegisterService.getUser();
		var token = user.token;
	}
}

angular.module('Grimorum.users').service('UsersService', UsersService)
