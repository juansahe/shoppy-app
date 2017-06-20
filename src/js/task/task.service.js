class TaskService{
	constructor($http, CONFIG, RegisterService){
		this.$http = $http;
		this.RegisterService = RegisterService;
		var user = this.RegisterService.getUser();

		var token = user.aut_token;
		this.getTask=(res)=>{
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
