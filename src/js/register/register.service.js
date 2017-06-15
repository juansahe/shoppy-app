class RegisterService{
	constructor($http, CONFIG){
		this.url = "http://api.XXXXXX";
		this.$http= $http;
		this.saveUser=(user, success, error)=>{
			console.log(user);
			  this.$http.post(this.url, user).then(function(res){
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
			return JSON.parse(window.localStorage.getItem('user'));
		}
	}
}

angular.module('Grimorum.register').service('RegisterService', RegisterService);
