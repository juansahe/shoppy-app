class LoginCtrl {

  constructor(LoginService, $ionicPopup, $scope) {
    this.LoginService = LoginService;



  }

}
angular.module('Grimorum.auth').controller('LoginCtrl', LoginCtrl);