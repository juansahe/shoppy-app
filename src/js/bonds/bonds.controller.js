class BondsCtrl {
  constructor(BondsService, $scope, CONFIG, Session) {

    $scope.SITE_ADMIN = CONFIG.url;
    $scope.user = Session.getUser();
    document.getElementById("xperience").style.width = $scope.user.xperience/1000*95+"%";
    document.getElementById("shopper").style.width = $scope.user.shopper_points/1000*95+"%";
    
    this.BondsService = BondsService;
    var Usuario=Session.getUser();

    BondsService.getBonds((result) => {
      $scope.bonds = result;

      for (var i = 0; i < $scope.bonds.length; i++) {
        $scope.bonds[i].estado = false;
        $scope.bonds[i].valorIntercambio = null;
        $scope.bonds[i].factorConversionShopy = 0.2;
      }


      console.log($scope.bonds);
    }, (err) => {
      console.log(err);
    });

    /*BondsService.getProviders((result) => {
      $scope.providers = result;
      //   console.log($scope.providers);
    }, (err) => {
      console.log(err);
    });*/

    $scope.btnbonos = () => {
      if ($scope.bonos) {
        console.log("cambiar a bonos" + $scope.bonos);
      } else {
        console.log("cambiar a tareas" + $scope.bonos);
      }
    }

    $scope.cambiarBonoValor = (valor, valorIntercambioPesos, value, id) => {
        console.log(id);
        var i=0;
        for(i=0; i<$scope.bonds.length; i++){
            if($scope.bonds[i].id===id){
              console.log("entro al if");
              break;
            }
        }
console.log(i);
      $scope.value=value;
      var elemento = document.getElementsByClassName($scope.value);
      elemento[i].className = elemento[i].className.replace("bonoSimple", "bonoSeleccionado degradadoblueX");
      if(value=="value1"){
        var elemento2 = document.getElementsByClassName("value2");
        elemento2[i].className = elemento2[i].className.replace("bonoSeleccionado", "bonoSimple");
        elemento2[i].className = elemento2[i].className.replace("degradadoblueX", "");
        var elemento3 = document.getElementsByClassName("value3");
        elemento3[i].className = elemento3[i].className.replace("bonoSeleccionado", "bonoSimple");
        elemento3[i].className = elemento3[i].className.replace("degradadoblueX", "");
      }

      if(value=="value2"){
        var elemento2 = document.getElementsByClassName("value1");
        elemento2[i].className = elemento2[i].className.replace("bonoSeleccionado", "bonoSimple");
        elemento2[i].className = elemento2[i].className.replace("degradadoblueX", "");
        var elemento3 = document.getElementsByClassName("value3");
        elemento3[i].className = elemento3[i].className.replace("bonoSeleccionado", "bonoSimple");
        elemento3[i].className = elemento3[i].className.replace("degradadoblueX", "");
      }

      if(value=="value3"){
        var elemento2 = document.getElementsByClassName("value1");
        elemento2[i].className = elemento2[i].className.replace("bonoSeleccionado", "bonoSimple");
        elemento2[i].className = elemento2[i].className.replace("degradadoblueX", "");
        var elemento3 = document.getElementsByClassName("value2");
        elemento3[i].className = elemento3[i].className.replace("bonoSeleccionado", "bonoSimple");
        elemento3[i].className = elemento3[i].className.replace("degradadoblueX", "");
      }
      return valor*valorIntercambioPesos;
    }

    $scope.cambiarBono = (bonoId, valorS) => {

      console.log("cambiar bono"+bonoId)
      console.log("valor "+valorS)
      console.log(Usuario.id)
    }

  }

}

angular.module('Grimorum.bonds').controller('BondsCtrl', BondsCtrl);
