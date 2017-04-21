class ChallengeService{
	constructor($http, CONFIG){
		this.$http = $http;
	}
}

angular.module('Grimorum.challenge').service('ChallengeService', ChallengeService)
