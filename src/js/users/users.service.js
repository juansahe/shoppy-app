class UsersService{
	constructor($http, CONFIG, RegisterService){
		this.$http = $http;
		this.RegisterService = RegisterService;
		var user = this.RegisterService.getUser();
		var token = user.token;
		this.putPuntos=(data, success, errr)=>{
			var config={
				url:"url put",
				method:'PUT',
				headers:{
					Authorization: "Token "+token
				},
				data: data
			}
			this.$http(config).then((res)=>{
				success(res);
			},(err)=>{
				error(err);
			});
		}

		this.getPuntos = (user)=>{
			var config={
				url:"url get puntos"+user,
				method: 'GET',
				headers : {
					Authorization: "Token "+token
				}
			}
			return this.$http(config);
		}
	}
}

angular.module('Grimorum.users').service('UsersService', UsersService)
