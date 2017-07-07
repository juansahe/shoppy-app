class HomeCtrl {
  constructor(HomeService, $scope, Session, $rootScope) {
    this.HomeService = HomeService;
    $scope.user = Session.getUser();
    $rootScope.us = $scope.user;
    $rootScope.widthX = $scope.user.xperience/1000*95+"%";
    $rootScope.widthS = $scope.user.shopper_points/10000*95+"%";
    HomeService.getPromotions((result) => {
      $scope.promociones = result;
      console.log($scope.promociones)
    }, (err) => {
      console.log(err);
    });

  }
}
angular.module('Grimorum.home').controller('HomeCtrl', HomeCtrl);