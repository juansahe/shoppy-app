class RegisterService{
	constructor($http, CONFIG){
		this.$http= $http;

	}
}

angular.module('Grimorum.register').service('RegisterService', RegisterService);
