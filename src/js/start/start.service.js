class StartService{
	constructor($http, CONFIG){
		this.$http = $http;
	}
}

angular.module('Grimorum.start').service('StartService', StartService);
