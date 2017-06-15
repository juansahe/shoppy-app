class RegisterCtrl{
	constructor(RegisterService, $scope, $location){
		$scope.user={};
		$scope.terminos=false;
		this.RegisterService = RegisterService;
		$scope.save=(ter)=>{
			if(ter){
				// si ya acepto los terminos
				RegisterService.saveUser($scope.user,(result)=>{

				}, (err)=>{

				});
			}else{
				//sino acepto los terminos
			}
		}
		
	}
}

angular.module('Grimorum.register').controller('RegisterCtrl', RegisterCtrl);
