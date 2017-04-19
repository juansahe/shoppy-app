class LoginCtrl {

  constructor(LoginService) {
    this.LoginService = LoginService;
  }
}
angular.module('Grimorum.auth').controller('LoginCtrl', LoginCtrl); 

