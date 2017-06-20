class LoginCtrl {

  constructor(LoginService, RegisterService, $ionicPopup, $scope, $location) {
    this.LoginService = LoginService;
    $scope.user = {};

    $scope.login = () => {
      this.LoginService.loginUser($scope.user, (result) => {
        //console.log(result);
        //var user = JSON.parse(localStorage.setItem('user', ));
        window.localStorage.setItem('token', angular.toJson(result));

        this.LoginService.getUser((result) => {
          window.localStorage.setItem('user', angular.toJson(result));

        }, (err) => {
          console.log(err)
        });

        console.log(window.localStorage);
        $location.path('/home');
        //se registro el usuario, luego se guarda en el localStorage
        //$location.path('/completeprofile');
      }, (err) => {
        console.log(err)
      });
    }


  }

}
angular.module('Grimorum.auth').controller('LoginCtrl', LoginCtrl);
