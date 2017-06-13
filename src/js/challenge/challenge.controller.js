class ChallengeCtrl{
	constructor(ChallengeService, $scope){
		this.ChallengeService = ChallengeService;

		
	}
}
angular.module('Grimorum.challenge').controller('ChallengeCtrl', ChallengeCtrl);
