class BondsCtrl {
  constructor(BondsService, $scope, CONFIG) {

    $scope.SITE_ADMIN = CONFIG.url;

    this.BondsService = BondsService;

    BondsService.getBonds((result) => {
      $scope.bonds = result;
    //   console.log($scope.bonds);
    }, (err) => {
      console.log(err);
    });

    BondsService.getProviders((result) => {
      $scope.providers = result;
    //   console.log($scope.providers);
    }, (err) => {
      console.log(err);
    });

    $scope.btnbonos = () => {
      if ($scope.bonos) {
        console.log("cambiar a bonos" + $scope.bonos);
      } else {
        console.log("cambiar a tareas" + $scope.bonos);
      }
    }

  }

}

angular.module('Grimorum.bonds').controller('BondsCtrl', BondsCtrl);
