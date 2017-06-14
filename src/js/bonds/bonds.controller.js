class BondsCtrl{
	constructor(BondsService, $scope){
		this.BondsService = BondsService;

		$scope.btnbonos=()=>{
			if($scope.bonos){
				console.log("cambiar a bonos"+$scope.bonos);
			}else{
				console.log("cambiar a tareas"+$scope.bonos);
			}
		}

	}
}

angular.module('Grimorum.bonds').controller('BondsCtrl',BondsCtrl);