class StartCtrl{
	constructor(StartService){
		this.StartService = StartService;
		document.addEventListener(“backbutton”, onBackKeyDown, false);
	}
}
angular.module('Grimorum.start').controller('StartCtrl', StartCtrl);

