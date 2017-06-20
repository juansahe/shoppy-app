class HomeCtrl {
  constructor(HomeService) {
    this.HomeService = HomeService;

    HomeService.getPromotions((result) => {
		console.log(result);

    }, (err) => {
      console.log(err);
    });

  }
}

angular.module('Grimorum.home').controller('HomeCtrl', HomeCtrl);
