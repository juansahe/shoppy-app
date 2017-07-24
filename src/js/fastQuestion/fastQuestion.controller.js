class fastQuestionCtrl {
  constructor(fastQuestionService, $scope, $location, Session, $ionicPopup, $rootScope) {
    this.fastQuestionService = fastQuestionService;
    $scope.seleccionar = (flag) => {
      if (flag) {
        $scope.seleccionadosi = true;
        $scope.seleccionadono = false;
      } else {
        $scope.seleccionadono = true;
        $scope.seleccionadosi = false;
      }

    }
    $scope.ta = $rootScope.tarea;
    $scope.abrirPopup = () => {

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
        $scope.marcarTareas();
      } else {
        $scope.tareas_hechas = [$scope.ta.pk];
      }

      Session.setTarea($scope.tareas_hechas);
      this.fastQuestionService.postTarea($scope.ta.pk, function(success){  
          $scope.pop();
        }, function(error){
          alert("la tarea no se completo");
          alert(error);
        });
    }

    /**popup para cuando el usuario suba de nivel*/
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

    /**marca la tarea que se realizo como realizada*/
    $scope.marcarTareas = function () {
    //  console.log("entro a marcar tareas");
      for (var i = 0; i < $scope.tareas_hechas.length; i++) {
        for (var j = 0; j < $rootScope.task.length; j++) {
          if ($scope.tareas_hechas[i] == $rootScope.task[j].pk) {
            $rootScope.task[j].hecha = true;
            console.log("la tarea " + $rootScope.task[j].pk + " esta hecha");
            break;
          }
        }
      }
    }


    /*popup para mostrar los puntos obtenidos al completar una tarea**/
    $scope.pop = function mostrarPopup() {
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
        //console.log($scope.ta.pk);
        
      });
    }

    $scope.salir = function () {
      $location.path('/task');
    }

  }
}

angular.module('Grimorum.fastQuestion').controller('fastQuestionCtrl', fastQuestionCtrl);
