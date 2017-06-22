class LoginCtrl {

  constructor(LoginService, Session, RegisterService, $ionicPopup, $scope, $location, $ionicLoading) {
    this.LoginService = LoginService;
    $scope.user = {};

    $scope.login = function (user) {
      if (typeof user == 'undefined' || typeof user.username == 'undefined' || typeof user.password == 'undefined') {
        console.log('Check credentials');
        showMsg("Por favor llene los datos");
        return;
      }
      LoginService.requestToken(user, successLogin, errorLogin);
    };

    /* handle success login */
    function successLogin(response) {
      //get user data, create a session and redirect to home
      LoginService.login(response.data.token, function (response) {
        $location.path('/home');
      });

    };

    /* handle errors on login */
    function errorLogin(response) {
      showMsg(response.data.non_field_errors[0]);
      /* $scope.user.password = '';

       if (response.data.error == 'Inactive') {
         showMsg('User inactive');
       } else if (response.data.error == 'invalid_credentials') {
         showMsg('Invalid Credentials');
       } else {
         showMsg('Error login');
       }*/
    };

    function showMsg(msg) {
      $ionicLoading.show({ template: msg, noBackdrop: false, duration: 2000 });
    }


  }

}
angular.module('Grimorum.auth').controller('LoginCtrl', LoginCtrl);
