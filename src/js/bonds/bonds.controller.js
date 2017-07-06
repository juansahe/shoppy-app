class BondsCtrl {
  constructor(BondsService, $scope, CONFIG, Session) {

    $scope.SITE_ADMIN = CONFIG.url;

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

    $scope.cambiarBonoValor = (valor, valorIntercambioPesos) => {
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
