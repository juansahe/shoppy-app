class RegisterCtrl {
  constructor(RegisterService, $scope, $location, $ionicLoading, Session) {


    $scope.user = {};

    $scope.terminos = false;
    this.RegisterService = RegisterService;

  /*  var user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user != null) {
      
      $location.path('/home');
    }*/

    $scope.save = (ter) => {
      if (ter) {
        if (validate($scope.user.username)) {
          if (validate($scope.user.email)) {
            if (validate($scope.user.bornday)) {
              if (validate($scope.user.password)) {
                // console.log("entro a las validaciones");



                if(validate($scope.user.passwordRepit) && $scope.user.password == $scope.user.passwordRepit) {
                  // si ya acepto los terminos
                  // console.log("entro a las validaciones");

                  var str = $scope.user.bornday;
                  $scope.user.bornday = null;
                  var fecha = str.getFullYear() + "-" + (str.getMonth() + 1) + "-" + str.getDate();
                  $scope.user.bornday = fecha;

                  this.RegisterService.saveUser($scope.user, (result) => {
                    console.log(result)
                    $scope.user.id=result.id;
                    $scope.user.xperience=0;
                    $scope.user.shopper_points = 0;

                    //se registro el usuario, luego se guarda en el localStorage
                    this.RegisterService.setUser(result.token, $scope.user);
                    $location.path('/completeprofile');
                  }, (err) => {
                    console.log(err);
                    $ionicLoading.show({
                      template: "Error " + err.data.username,
                      noBackdrop: false,
                      duration: 2000
                    });
                    //error al registrar el usuario
                  });
                } else {
                  //si la contraseña no se ingreso
                  document.getElementById('passwordRepit').style.border = "solid 1px red";

                  $ionicLoading.show({
                    template: 'Las contraseñas no coinciden',
                    noBackdrop: false,
                    duration: 2000
                  });
                }

              } else {
                //si la contraseña no se ingreso
                document.getElementById('password').style.border = "solid 1px red";
                $ionicLoading.show({
                  template: 'Debe ingresar una contraseña valida',
                  noBackdrop: false,
                  duration: 2000
                });
              }
            } else {
              //si la fecha no se ingreso
              document.getElementById('bornday').style.border = "solid 1px red";
              $ionicLoading.show({
                template: 'Debe ingresar una fecha de nacimiento',
                noBackdrop: false,
                duration: 2000
              });
            }
          } else {
            //si el user name no existe
            document.getElementById('email').style.border = "solid 1px red";
            $ionicLoading.show({
              template: 'Debe ingresar un correo electronico valido',
              noBackdrop: false,
              duration: 2000
            });
          }
        } else {
          //si el correo no se ingreso
          document.getElementById('username').style.border = "solid 1px red";
          $ionicLoading.show({
            template: 'Debe ingresar un nombre de usuario valido',
            noBackdrop: false,
            duration: 2000
          });
        }

      } else {
        //sino acepto los terminos
        $ionicLoading.show({
          template: 'Debe aceptar los términos',
          noBackdrop: false,
          duration: 2000
        });
      }
    }

    function validate(e) {
      if (e === null) {
        return false;
      }
      if (e === "") {
        return false;
      }
      if (e === undefined) {
        return false;
      }
      return true;
    }
  }
}

angular.module('Grimorum.register').controller('RegisterCtrl', RegisterCtrl);
