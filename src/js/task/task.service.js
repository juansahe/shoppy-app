class TaskService{
	constructor($http, CONFIG, RegisterService){
		this.$http = $http;
		this.RegisterService = RegisterService;
		var user = this.RegisterService.getUser();
		var token = user.auth_token;
		this.getTask=()=>{
			var config = {
				url: this.url,
				method: "GET",
				headers : {
					Authorization: "Token " + token
				}
			}
			return $http(config);
		}
	}
}

angular.module('Grimorum.task').service('TaskService', TaskService)
