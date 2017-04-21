class CompletePropileCtrl{
	constructor(CompletePropileService, $scope){
		this.CompletePropileService = CompletePropileService;
		$scope.productos=['Cerveza', 'Pan', 'Cereal', 'Carne', 'Leche', 'Huevos', 'Chocolate', 'Jabón', 'Detergente', 'Gaseosa', 'Pollo', 'Fruta'];
		$scope.contar=0;
		$scope.select = (e)=>this.marcar(e, $scope.contar);

	}

	marcar(id, contar){

		if(contar<3){
			document.getElementById(id).style.background="#3293d4";
			return true;
		}
	}

}
angular.module('Grimorum.completePropile').controller('CompletePropileCtrl', CompletePropileCtrl);
