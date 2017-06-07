class CompletePropileCtrl{
	constructor(CompletePropileService, $scope, $location, $ionicPopup){
		this.CompletePropileService = CompletePropileService;
		$scope.productos=['Cerveza', 'Pan', 'Cereal', 'Carne', 'Leche', 'Huevos', 'Chocolate', 'Jabón', 'Detergente', 'Gaseosa', 'Pollo', 'Fruta', "Pavo"];
		$scope.contar=0;
		$scope.products=[];
		$scope.select = (id)=>{
			if($scope.contar<3){
				var midiv=document.getElementById(id).className += " seleccionado";
				$scope.contar++;
				$scope.products.push(id);
				if($scope.contar===3){
					this.modal($scope, $ionicPopup, $location);
				}
			}
		}
	}

	modal($scope, $ionicPopup, $location){

      // Custom popup
      const template = '<i style="color:#3293d4; font-size: 10em;" class="ion-star" aria-hidden="true"><br><h3 style="font-size:30px;">100pt</h3></i>';

      var myPopup = $ionicPopup.alert({
      	 title: 'Completaste tu perfil',
         template:template,
         scope: $scope,
         buttons: [
		   {
		     text: '<b>Continuar</b>',
		     type: 'button-positive',
		     onTap: function() { 
		     	$location.path('/path');
		     }
		   }
		  ]
		});
	}
}
angular.module('Grimorum.completePropile').controller('CompletePropileCtrl', CompletePropileCtrl);

 
