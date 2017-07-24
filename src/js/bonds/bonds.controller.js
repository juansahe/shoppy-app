class BondsCtrl {
  constructor(BondsService, $scope, CONFIG, Session, $rootScope) {

    $scope.SITE_ADMIN = CONFIG.url; //url del api
    $scope.user = Session.getUser(); //carga en una variable scope el usuario que esta guardado en localstorage

      $rootScope.us = $scope.user;

          $rootScope.widthX = $scope.user.xperience/1000*95+"%";
          $rootScope.widthS = $scope.user.shopper_points/10000*95+"%";

          /*se llama la peticion get para cargar los bonos de cada tienda del servidor que esta 
          en el servicio bonds.service.js*/
    BondsService.getBonds((result) => {
      $scope.bonds = result;

      for (var i = 0; i < $scope.bonds.length; i++) {
        $scope.bonds[i].estado = false;
        $scope.bonds[i].valorIntercambio = null;
        $scope.bonds[i].factorConversionShopy = 0.2;
      }

    }, (err) => {
      console.log(err);
    });



    /*se llama la peticion get para cargar los bonos ya adquiridos por el usuario desde el servidor.
    este servicio se hace desde el servicio bonds.service.js*/
    $scope.getmybond = () => {
      BondsService.getmybond({
          user_id: $scope.user.id
        },
        (result) => {
          $scope.mybonds = result.bonos;
        }, (err) => {
          console.log(err);
        });
    }

    /*activa la peticion de cargar los bonos de un usuario 
    desde el servidor para mostrarlos en pantalla*/
    $scope.btnbonos = () => {
      $scope.getmybond();
    }

    /*metodo para escoger el valor de un bono de una tienda. Es decir, marcar en color
    azul solo el bono que se desea cambiar*/
    $scope.cambiarBonoValor = (valor, valorIntercambioPesos, value, id) => {
      // console.log(id);
      var i = 0;
      for (i = 0; i < $scope.bonds.length; i++) {
        if ($scope.bonds[i].id === id) {
          // console.log("entro al if");
          break;
        }
      }
      // console.log(i);
      $scope.value = value;
      var elemento = document.getElementsByClassName($scope.value);
      elemento[i].className = elemento[i].className.replace("bonoSimple", "bonoSeleccionado degradadoblueX");
      if (value == "value1") {
        var elemento2 = document.getElementsByClassName("value2");
        elemento2[i].className = elemento2[i].className.replace("bonoSeleccionado", "bonoSimple");
        elemento2[i].className = elemento2[i].className.replace("degradadoblueX", "");
        var elemento3 = document.getElementsByClassName("value3");
        elemento3[i].className = elemento3[i].className.replace("bonoSeleccionado", "bonoSimple");
        elemento3[i].className = elemento3[i].className.replace("degradadoblueX", "");
      }

      if (value == "value2") {
        var elemento2 = document.getElementsByClassName("value1");
        elemento2[i].className = elemento2[i].className.replace("bonoSeleccionado", "bonoSimple");
        elemento2[i].className = elemento2[i].className.replace("degradadoblueX", "");
        var elemento3 = document.getElementsByClassName("value3");
        elemento3[i].className = elemento3[i].className.replace("bonoSeleccionado", "bonoSimple");
        elemento3[i].className = elemento3[i].className.replace("degradadoblueX", "");
      }

      if (value == "value3") {
        var elemento2 = document.getElementsByClassName("value1");
        elemento2[i].className = elemento2[i].className.replace("bonoSeleccionado", "bonoSimple");
        elemento2[i].className = elemento2[i].className.replace("degradadoblueX", "");
        var elemento3 = document.getElementsByClassName("value2");
        elemento3[i].className = elemento3[i].className.replace("bonoSeleccionado", "bonoSimple");
        elemento3[i].className = elemento3[i].className.replace("degradadoblueX", "");
      }
      return valor * valorIntercambioPesos;
    }

    /*
    cambiarBono
    valida que el bono que se deseea cambiar no supere los Shoppys que tiene el usuario. Luego,
    envia el bono a cambiar al servicio BondsService.postBono para guardarlo en el servidor
    */
    $scope.cambiarBono = (bono) => {
      // console.log(bono)
      var bond = {
        bond_id: bono.id,
        user_id: $scope.user.id,
        name: $scope.user.username,
        value: bono.valorIntercambio,
        code: "5000",
        imagen: bono.img,
        description: bono.description,
      }

      console.log(bond)
      if (bono.valorIntercambio <= $scope.user.shopper_points) {

        BondsService.postBono(bond, (result) => {
          // console.log(result);
          $scope.user.shopper_points -= bono.valorIntercambio;
          Session.setUser($scope.user);

        }, (err) => {
          console.log(err);
        });

      } else {
        alert("no tienes suficientes Shoppys")
      }

    }

  }

}

angular.module('Grimorum.bonds').controller('BondsCtrl', BondsCtrl);
