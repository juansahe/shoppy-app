class RegisterCtrl{
	constructor(RegisterService, $scope, $location){
		this.RegisterService = RegisterService;
		$scope.user={
			puntos:"100",
			dinero:"0"
		};
		$scope.verificar = (e)=>{

			window.localStorage.setItem("user", $scope.user);
			console.log($scope.user);

			 $location.path('/completeprofile');	
		}

	}
}

angular.module('Grimorum.register').controller('RegisterCtrl', RegisterCtrl);
