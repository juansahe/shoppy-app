class RegisterCtrl{
	constructor(RegisterService, $scope, $location){
		this.RegisterService = RegisterService;
		$scope.verificar = (e)=>{
			 $location.path('/completeprofile');	
		}

	}
}

angular.module('Grimorum.register').controller('RegisterCtrl', RegisterCtrl);
