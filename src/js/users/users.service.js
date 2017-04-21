class UsersService{
	constructor($http, CONFIG){
		this.$http = $http;
	}
}

angular.module('Grimorum.users').service('UsersService', UsersService)
