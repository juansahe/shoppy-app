class CompletePropileCtrl {
  constructor(CompletePropileService, $scope, $location, $ionicPopup, Session, $ionicLoading) {

    this.CompletePropileService = CompletePropileService;//llamado del servicio completar perfil

    $scope.tarea = { /**puntos para tarea completar perfil**/
      fields: {
        SM: 20,
        point_exp: 200
      }
    };

    $scope.user = Session.getUser();//traer el usuario que inicio sesión desde el localstorage
    // console.log($scope.user);
    CompletePropileService.getProducts((result) => {
      /**traer del servicio completarPropile el get de productos para agregar a favoritos, es decir,
      todos los productos guardados en la base de datos**/
      $scope.productos = result;
      for (var i = 0; i < $scope.productos.length; i++) {
        $scope.productos[i].estado = false;
      }
    }, (err) => {
      console.log(err);
    });



    var contador = 0;
    /************
    funcion para seleccionar los productos favoritos de un usuario
    ************/
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
            seleccionados.push($scope.productos[i].id)//agregar un producto al array de seleccionados
          }
        }

        enviarFavoritos(seleccionados);
      }
    }

    function enviarFavoritos(seleccionados) { //aqui se envia ids de productos seleccionados al servicio
      //alert(seleccionados);
      //mostrarPopup()
      var error = null;
      for (var i = 0; i < seleccionados.length; i++) {
        var favorito = {
          "product": seleccionados[i],
          "user": $scope.user.id
        }
        // console.log(favorito);
        CompletePropileService.postFavoritos(favorito, (result) => {
          //alert(result)
          error = false;
          // console.log(result);
          //se guarda nuevamente el usuario en localstorage

        }, (err) => {
          error = true;
          console.log(err);
        });
      }

      if (!error) {
        //guardar puntos en localstorage
        //sumer xp y s y poner la tarea como realizada

        $scope.user.shopper_points = parseInt($scope.user.shopper_points) + parseInt($scope.tarea.fields.SM);
        $scope.user.xperience = parseInt($scope.user.xperience) + parseInt($scope.tarea.fields.point_exp);
        // console.log($scope.user);

        CompletePropileService.postTarea(27, (result) => {
          console.log(result);

          if (result.level) {
            $scope.user.level++;
            mostrarPopupNivel();
          }

          //se guarda nuevamente el usuario en localstorage
        }, (err) => {
          error = true;
          console.log(err);
        });

        Session.setUser($scope.user);
        mostrarPopup();
      }

    }
    //cargar mensaje en la vista
    function showMsg(msg) {
      $ionicLoading.show({
        template: msg,
        noBackdrop: false,
        duration: 2000
      });
    }

    
    function mostrarPopupNivel() {
      var alertPopup = $ionicPopup.alert({
        title: '<h2 class="win">Has subido de nivel!</h2> <i aria-hidden="true"></i>',
        templateUrl: 'modalLevel.html',
        scope: $scope,
        buttons: [{
          text: 'Listo'
        }]
      });
      alertPopup.then(function (res) {

      });
    }

    function mostrarPopup() {
      var alertPopup = $ionicPopup.alert({
        title: '<h2 class="win">¡Ganaste!</h2> <i ng-click="showAlert()"  aria-hidden="true"></i>',
        templateUrl: 'modalpoints.html',
        scope: $scope,
        buttons: [{
          text: 'Listo'
        }]
      });
      alertPopup.then(function (res) {
        $location.path('/home');
      });
    }


  }

}
angular.module('Grimorum.completePropile').controller('CompletePropileCtrl', CompletePropileCtrl);
