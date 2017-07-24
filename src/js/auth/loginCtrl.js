class LoginCtrl {

  constructor(LoginService, Session, RegisterService, $ionicPopup, $scope, $location, $ionicLoading) {
    this.LoginService = LoginService;
    $scope.user = {};


    /*La funcion login valida que los campos requeridos para iniciar sesión esten llenos, de
    no ser asi, envia un mensaje al usuario pidiendo que llene los datos. Por otro lado, cuando
    estan llenos llama una funcion de loginServices.js para recibir un token para el usuario logueado*/
    $scope.login = function (user) {
      console.log("sirve el boton");
      if (typeof user == 'undefined' || typeof user.username == 'undefined' || typeof user.password == 'undefined') {
        console.log('Check credentials');
        showMsg("Por favor llene los datos");
        return;
      }
      LoginService.requestToken(user, successLogin, errorLogin);
    };

    /* handle successLogin 
    se activa cuando el token se genera de manera correcta
    y llama la funcion login del servico loginServices.js 
    donde se rea la sesión en local para el usuario
    */
    function successLogin(response) {
      // alert(response.data.token)
      // alert(response.data.id)
      //get user data, create a session and redirect to home
      LoginService.login(response.data, function (response) {
        $location.path('/home');
        $scope.user = null;
      });





    };

    /* handle errors on login 
    errorLogin
    esta funcion se activa cuando no es posible crear un token para el usuario
    y se muestra un mensaje en pantalla con el error
    */
    function errorLogin(response) {

      showMsg(response.data.non_field_errors[0]);

      $ionicPopup.hide();
     
    };

    function showMsg(msg) {
      $ionicLoading.show({
        template: msg,
        noBackdrop: false,
        duration: 2000
      });
    }


  }

}
angular.module('Grimorum.auth').controller('LoginCtrl', LoginCtrl);
