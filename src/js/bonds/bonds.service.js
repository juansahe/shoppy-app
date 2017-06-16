class BondsService{
	constructor($http, CONFIG,RegisterService){
		this.url="";
		this.$http = $http;
		this.RegisterService = RegisterService;
		var user = this.RegisterService.getUser();
		var token = user.token;
		this.getBonds=()=>{
			var config={
				url: this.url,
				method: "GET",
				headers : {
					Authorization: "Token " + token
				}
			}
			return $http(config);
		}

		this.postBono=(bono, success, error)=>{
			var config={
				url:"urlbono",
				method: 'POST',
				headers : {
					Authorization: "Token"+token
				},
				data: bono
			}
			this.$http(config).then((res)=>{
				success(res);
			}, (err)=>{
				error(err);
			});
		}
	}

}


angular.module('Grimorum.bonds').service('BondsService', BondsService)
