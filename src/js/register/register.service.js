class RegisterService{
	constructor($http, CONFIG){
		this.url = "http://api.XXXXXX"
		this.$http= $http;
		this.saveUser=(user, success, error)=>{
			console.log(user);
		}
	}
}

angular.module('Grimorum.register').service('RegisterService', RegisterService);
