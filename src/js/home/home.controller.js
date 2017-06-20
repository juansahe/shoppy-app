class HomeCtrl {
  constructor(HomeService, $scope) {
    this.HomeService = HomeService;

    HomeService.getPromotions((result) => {
		console.log(result);
		$scope.promociones=result;
    }, (err) => {
      console.log(err);
    });

  }
}

angular.module('Grimorum.home').controller('HomeCtrl', HomeCtrl);
