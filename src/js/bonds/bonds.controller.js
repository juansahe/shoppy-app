class BondsCtrl{
	constructor(BondsService){
		this.BondsService = BondsService;

	}
}

angular.module('Grimorum.bonds').controller('BondsCtrl',BondsCtrl);