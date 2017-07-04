class HomeCtrl {
  constructor(HomeService, $scope) {
    this.HomeService = HomeService;

    HomeService.getPromotions((result) => {
      $scope.promociones = result;
      console.log($scope.promociones)
    }, (err) => {
      console.log(err);
    });

  }
}
angular.module('Grimorum.home').controller('HomeCtrl', HomeCtrl);