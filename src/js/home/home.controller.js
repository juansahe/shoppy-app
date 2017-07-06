class HomeCtrl {
  constructor(HomeService, $scope, Session) {
    this.HomeService = HomeService;
    $scope.user = Session.getUser();

    document.getElementById("xperience").style.width = $scope.user.xperience/1000*95+"%";
    document.getElementById("shopper").style.width = $scope.user.shopper_points/1000*95+"%";
    HomeService.getPromotions((result) => {
      $scope.promociones = result;
      console.log($scope.promociones)
    }, (err) => {
      console.log(err);
    });

  }
}
angular.module('Grimorum.home').controller('HomeCtrl', HomeCtrl);