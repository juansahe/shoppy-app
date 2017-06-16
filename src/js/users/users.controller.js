class UsersCtrl{
	constructor(UsersService, $scope, RegisterService){
		this.UsersService = UsersService;
		this.RegisterService=RegisterService;
		$scope.user=RegisterService.getUser();
		console.log($scope.user)
		$scope.user= "Cristian Sarmiento";
	}
}

angular.module('Grimorum.users').controller('UsersCtrl', UsersCtrl);
