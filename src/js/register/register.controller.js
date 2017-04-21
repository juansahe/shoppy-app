class RegisterCtrl{
	constructor(RegisterService){
		this.RegisterService = RegisterService;
	}
}

angular.module('Grimorum.register').controller('RegisterCtrl', RegisterCtrl);
