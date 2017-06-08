class CompletePropileCtrl{
	constructor(CompletePropileService, $scope, $location, $ionicPopup){





		this.CompletePropileService = CompletePropileService;
		$scope.productos=['Cerveza', 'Pan', 'Cereal', 'Carne', 'Leche', 'Huevos', 'Chocolate', 'Jabón', 'Detergente', 'Gaseosa', 'Pollo', 'Fruta', "Pavo", "fff", "ffSDSDFf"];
		$scope.contar=0;
		$scope.products=[];
		$scope.select = (id)=>{
			if($scope.contar<3){
				var midiv=document.getElementById(id).className += " seleccionado";
				$scope.contar++;
				$scope.products.push(id);
				if($scope.contar===3){

		var alertPopup = $ionicPopup.alert({
			title: '<h2 class="win">¡Ganaste!</h2> <i ng-click="showAlert()" class="ion-close-round" aria-hidden="true"></i>',
			template: '<i id="star" class="ion-star" aria-hidden="true"><h3 class="pt_xp">100xp</h3></i>'
		});
			alertPopup.then(function(res) {
				$location.path('/path');
			console.log('Thank you for not eating my delicious ice cream cone');
		});


				}
			}
		}
	}
	
}
angular.module('Grimorum.completePropile').controller('CompletePropileCtrl', CompletePropileCtrl);

 
