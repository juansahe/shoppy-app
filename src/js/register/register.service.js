class RegisterService{
	constructor($http, CONFIG){
		this.url = "http://192.168.1.165:8000/api/v1/users/";
		this.$http= $http;
		this.saveUser=(user, success, error)=>{
			console.log(this.url);
			var config={
				url: this.url,
				method: "POST",
				headers : {
					'Content-Type' : 'application/json'
				},
				data: user
			};
		  	this.$http(config).then(function(res){
            	console.log(res);
                success(res.data);
            }, function(err) {
                error(err);
            });
		}
		this.setUser=(user)=>{
			window.localStorage.setItem('user', JSON.stringify(user));
		}
		this.getUser=()=>{
			return JSON.parse(localStorage.getItem('user'));
		}
		this.getToken=()=>{
			return JSON.parse(localStorage.getItem('token'));
		}
		
	}
}

angular.module('Grimorum.register').service('RegisterService', RegisterService);
