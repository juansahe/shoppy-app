class lookPictureCtrl {
  constructor($scope, $interval, $rootScope, $location, $ionicPopup, Session, lookPictureService) {
    //console.log(CONFIG);
    $scope.time = 5;
    $scope.flag = false;
    console.log($rootScope.tarea);
    $scope.ta = $rootScope.tarea;
    $scope.img = "http://45.55.43.26:8000/media/" + $rootScope.tarea.fields.imagen;
    var contador = $interval(function () {
      $scope.time--;
      if ($scope.time < 0) {

        $interval.cancel(contador);
        $scope.time = null;
        $scope.flag = true;
      }
    }, 1000);

    /**se ejecuta cuando se cumple el tiempo estimado de observar la imagen. Es decir, cuando
    la tarea se completo*/
    $scope.abrirpopup = () => {
      if ($scope.flag) {
        //sumer xp y s y poner la tarea como realizada
        $scope.user = Session.getUser();
        $scope.user.shopper_points = parseInt($scope.user.shopper_points) + parseInt($scope.ta.fields.SM);
        $scope.user.xperience = parseInt($scope.user.xperience) + parseInt($scope.ta.fields.point_exp);
        console.log($scope.user);
        //se guarda nuevamente el usuario en localstorage
        $rootScope.us = $scope.user;
        $rootScope.widthX = $scope.user.xperience / 1000 * 95 + "%";
        $rootScope.widthS = $scope.user.shopper_points / 10000 * 95 + "%";
        Session.setUser($scope.user);
        //guardar array de tareas hechas en localstorage
        $scope.tareas_hechas = Session.getTareas();
        if ($scope.tareas_hechas != null) {
          $scope.tareas_hechas.push($scope.ta.pk);
        } else {
          $scope.tareas_hechas = [$scope.ta.pk];
        }
        $scope.marcarTareas();

        enviarTarea($scope.ta.pk)

        Session.setTarea($scope.tareas_hechas);

        mostrarPopup()
      }
    }

    /*
      se llama el servicio de postTarea para guardar la tarea como realizada en el servidor
    */
    function enviarTarea(tarea_id) {

      lookPictureService.postTarea(tarea_id, (result) => {
        console.log(result);
        if (result.level) {
          $scope.user.level++;
          mostrarPopupNivel();
        }
        //se guarda nuevamente el usuario en localstorage
      }, (err) => {
        error = true;
        console.log(err);
      });
    }

    /*muestra al usuario cuando subio de nivel despues de realizar la tarea*/
    function mostrarPopupNivel() {
      var alertPopup = $ionicPopup.alert({
        title: '<h2 class="win">Has subido de nivel!</h2> <i aria-hidden="true"></i>',
        templateUrl: 'modalLevel.html',
        scope: $scope,
        buttons: [{
          text: 'Listo'
        }]
      });
      alertPopup.then(function (res) {

      });
    }

    /*marca la tarea cuando se realiza en la vista del usuario*/
    $scope.marcarTareas = function () {
      console.log("entro a marcar tareas");
      for (var i = 0; i < $scope.tareas_hechas.length; i++) {
        for (var j = 0; j < $rootScope.task.length; j++) {
          if ($scope.tareas_hechas[i] == $rootScope.task[j].pk) {
            $rootScope.task[j].hecha = true;
            console.log("la tarea " + $rootScope.task[j].pk + " esta hecha");
          }
        }
      }
    }

    /*muestra los puntos ganados por realizar una tarea*/
    function mostrarPopup() {
      var alertPopup = $ionicPopup.alert({
        title: '<h2 class="win">¡Ganaste!</h2> <i ng-click="showAlert()"  aria-hidden="true"></i>',
        templateUrl: 'modalpoints.html',
        scope: $scope,
        buttons: [{
          text: 'Listo'
        }]
      });
      alertPopup.then(function (res) {
        $location.path('/task');
      });
    }

    $scope.cerrar = () => {
      $location.path('/task');
    }


  }
}

angular.module('Grimorum.lookPicture').controller('lookPictureCtrl', lookPictureCtrl);
