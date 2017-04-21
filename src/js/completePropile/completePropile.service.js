class CompletePropileService{
	constructor($http, CONFIG){
		this.$http = $http;
	}
}

angular.module('Grimorum.completePropile').service('CompletePropileService', CompletePropileService)
