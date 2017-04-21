class ChallengeCtrl{
	constructor(ChallengeService, $scope){
		this.ChallengeService = ChallengeService;

		$scope.challenges = [{
			level:'3',
			challenge:'Compra en Jumbo una cubeta de huevos -Kikes-',
			gain:'1500',
			complete:false
		},{
			level:'3',
			challenge:'Prueba la nueva cerveza de -BBC- y da tu opinion sobre ella',
			gain:'3000',
			complete:false
		},{
			level:'3',
			challenge:'Participa en el focus group online de -MacPollo-',
			gain:'8000',
			complete:false
		}];

	}
}

angular.module('Grimorum.challenge').controller('ChallengeCtrl', ChallengeCtrl);
