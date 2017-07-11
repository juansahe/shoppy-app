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

    $scope.promocionesSecundarias=[
      "http://ofertadescuentos.com/wp-content/uploads/2014/08/La-Comercial-Folleto-18-Agosto.jpg",
      "https://s-media-cache-ak0.pinimg.com/736x/5a/90/0c/5a900c5bc91a61b4a3c06d678c2bf3b5.jpg",
      "https://www.cervezaartesanalmexicana.mx/images/stories/virtuemart/product/botella-chaneque-redale.png",
      "http://2.bp.blogspot.com/-cHOHMVsPcGU/VQSngdWW9NI/AAAAAAAADFY/BuiOqPuBBbw/s1600/2x1frappedigital.jpg",
      "https://pbs.twimg.com/media/By3_LN7IEAA9NYn.jpg:large"
    ]


  }
}
angular.module('Grimorum.home').controller('HomeCtrl', HomeCtrl);