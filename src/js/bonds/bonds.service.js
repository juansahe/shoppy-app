class BondsService{
	constructor($http, CONFIG){
		this.$http = $http;
	}
}


angular.module('Grimorum.bonds').service('BondsService', BondsService)
