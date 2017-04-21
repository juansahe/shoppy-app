class StartCtrl{
	constructor(StartService){
		this.StartService = StartService;
	}
}
angular.module('Grimorum.start').controller('StartCtrl', StartCtrl);
