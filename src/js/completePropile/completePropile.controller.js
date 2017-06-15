class CompletePropileCtrl{
	constructor(CompletePropileService, $scope, $location, $ionicPopup){

		this.CompletePropileService = CompletePropileService;

		CompletePropileService.getProducts((result)=>{
			$scope.productos=result;
		}, (err)=>{
			alert(err);
		});

		
		

		var contador=0;
		$scope.select = (n)=>{
			$scope.productos[n].estado=!$scope.productos[n].estado;
			if($scope.productos[n].estado){
				contador++;
			}else{
				contador--;			
			}
			if(contador>=3){
				var seleccionados=[];
				for(var i=0; i<$scope.productos.length; i++){
					if($scope.productos[i].estado){
						//console.log($scope.productos[i].nombre);
						seleccionados.push($scope.productos[i].id)
					}
				}

					var alertPopup = $ionicPopup.alert({
						title: '<h2 class="win">¡Ganaste!</h2> <i ng-click="showAlert()" class="ion-close-round" aria-hidden="true"></i>',
						templateUrl: 'modalpoints.html'
					});
						alertPopup.then(function(res) {
							$location.path('/path');
						console.log('Thank you for not eating my delicious ice cream cone');
					});

					enviarFavoritos(seleccionados);
			}
		}

		function enviarFavoritos(seleccionados){//aqui se envia ids de productos seleccionados
			alert(seleccionados);
			CompletePropileService.postFavoritos((result)=>{
			}, (err)=>{
				alert(err);
			});
		}


	}
	
}
angular.module('Grimorum.completePropile').controller('CompletePropileCtrl', CompletePropileCtrl);

 
