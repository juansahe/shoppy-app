class BondsCtrl {
  constructor(BondsService, $scope, CONFIG, Session) {

    $scope.SITE_ADMIN = CONFIG.url;
    $scope.user = Session.getUser();
    document.getElementById("xperience").style.width = $scope.user.xperience/1000*95+"%";
    document.getElementById("shopper").style.width = $scope.user.shopper_points/1000*95+"%";
    
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
