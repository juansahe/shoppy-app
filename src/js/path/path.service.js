class PathService{
	constructor($http, CONFIG){
		this.$http = $http;
	}

}

angular.module('Grimorum.path').service('PathService', PathService)
