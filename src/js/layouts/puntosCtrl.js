class PuntosCtrl{

	constructor($scope){
		$scope.user={
			name:'Carolina Perez',
			puntos:'100',
			dinero:'0',
			level:'1'
		};
	}

}

angular.module('Grimorum.pts').controller('PuntosCtrl', PuntosCtrl)