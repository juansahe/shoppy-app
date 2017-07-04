class RegisterCtrl {
  constructor(RegisterService, $scope, $location, $ionicLoading) {


    $scope.user = {
      "id": 20,
      "first_name": "",
      "last_name": "",
      "is_staff": true,
      "is_superuser": true,
      "date_joined": "2017-06-08T21:58:40+0000",
      "xperience": null,
      "shopper_points": null
    };




    $scope.terminos = false;
    this.RegisterService = RegisterService;

    var user = JSON.parse(localStorage.getItem('user'));
    if (user != null) {
      console.log(user);
      $location.path('/home');
    }

    $scope.save = (ter) => {
      if (ter) {
        if (validate($scope.user.username)) {
          if (validate($scope.user.email)) {
            if (validate($scope.user.bornday)) {
              if (validate($scope.user.password)) {
                // si ya acepto los terminos
                // console.log("entro a las validaciones");
                this.RegisterService.saveUser($scope.user, (result) => {
                  console.log(result)
                  //se registro el usuario, luego se guarda en el localStorage
                  this.RegisterService.setUser(result);
                  $location.path('/completeprofile');
                }, (err) => {
					alert(JSON.stringify(err.data).toString())
                  //error al registrar el usuario
                });
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
