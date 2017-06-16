class CompletePropileCtrl{
	constructor(CompletePropileService, $scope, $location, $ionicPopup){

		this.CompletePropileService = CompletePropileService;

		CompletePropileService.getProducts((result)=>{
			$scope.productos=result;
			for(var i=0; i<$scope.productos.length; i++){
				$scope.productos[i].estado=false;
				}
		}, (err)=>{
			console.log(err);
		});


		var contador=0;
		$scope.select = (id)=>{
			for(var i=0; i<$scope.productos.length; i++){//selecciona producto
					if($scope.productos[i].id==id){
						$scope.productos[i].estado=!$scope.productos[i].estado;
						break;
					}
				}
			
			if($scope.productos[i].estado){
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

				enviarFavoritos(seleccionados);
			}
		}

		function enviarFavoritos(seleccionados){//aqui se envia ids de productos seleccionados
			alert(seleccionados);
			mostrarPopup()
			/*CompletePropileService.postFavoritos(seleccionados, (result)=>{
				alert(result)
				mostrarPopup()
			}, (err)=>{
				alert(err);
			});*/
		}

		function mostrarPopup(){
			var alertPopup = $ionicPopup.alert({
					title: '<h2 class="win">¡Ganaste!</h2> <i ng-click="showAlert()" class="ion-close-round" aria-hidden="true"></i>',
					templateUrl: 'modalpoints.html'
				});
					alertPopup.then(function(res) {
						$location.path('/path');
				});
		}


	}
	
}
angular.module('Grimorum.completePropile').controller('CompletePropileCtrl', CompletePropileCtrl);