
class HomeCtrl{
	constructor(HomeService){
		this.HomeService = HomeService;

	}
}

angular.module('Grimorum.home').controller('HomeCtrl', HomeCtrl);
