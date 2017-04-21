class HomeService{
	constructor($http, CONFIG){
		this.$http = $http;
	}
}

angular.module('Grimorum.home').service('HomeService', HomeService)
