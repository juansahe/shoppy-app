class CompletePropileCtrl {
  constructor(CompletePropileService, $scope, $location, $ionicPopup) {


    this.CompletePropileService = CompletePropileService;

    CompletePropileService.getProducts((result) => {
      $scope.productos = result;
      for (var i = 0; i < $scope.productos.length; i++) {
        $scope.productos[i].estado = false;
      }
    }, (err) => {
      console.log(err);
    });



    var contador = 0;
    $scope.select = (id) => {
      for (var i = 0; i < $scope.productos.length; i++) { //selecciona producto
        if ($scope.productos[i].id == id) {
          $scope.productos[i].estado = !$scope.productos[i].estado;
          break;
        }
      }

      if ($scope.productos[i].estado) {
        contador++;
      } else {
        contador--;
      }
      if (contador >= 3) {
        var seleccionados = [];
        for (var i = 0; i < $scope.productos.length; i++) {
          if ($scope.productos[i].estado) {
            //console.log($scope.productos[i].nombre);
            seleccionados.push($scope.productos[i].id)
          }
        }

        enviarFavoritos(seleccionados);
      }
    }

    function enviarFavoritos(seleccionados) { //aqui se envia ids de productos seleccionados
      //alert(seleccionados);
      //mostrarPopup()
	  var error;
      for (var i = 0; i < seleccionados.length; i++) {
        var favorito = {
          "product": seleccionados[i],
          "user": 1
        }
        CompletePropileService.postFavoritos(favorito, (result) => {
          //alert(result)
		  error=false;
          console.log(result);
        }, (err) => {
			error=true;
          console.log(err);
        });
      }



	  if(!error){
		  mostrarPopup();
	  }
      



    }

    function mostrarPopup() {
      var alertPopup = $ionicPopup.alert({
        title: '<h2 class="win">¡Ganaste!</h2> <i ng-click="showAlert()" class="ion-close-round" aria-hidden="true"></i>',
        templateUrl: 'modalpoints.html'
      });
      alertPopup.then(function (res) {
        $location.path('/home');
      });
    }


  }

}
angular.module('Grimorum.completePropile').controller('CompletePropileCtrl', CompletePropileCtrl);
