class TaskCtrl {
  constructor(TaskService, $scope, $cordovaCamera, $ionicPopup, $rootScope, $location, Session) {

    // $scope.$digest();

    this.TaskService = TaskService;
    $scope.user = Session.getUser();

    $rootScope.us = $scope.user;
    $rootScope.widthX = $scope.user.xperience / 1000 * 95 + "%";
    $rootScope.widthS = $scope.user.shopper_points / 10000 * 95 + "%";
    $scope.tareasHechas = Session.getTareas();

    TaskService.getTask((result) => {
      console.log(result);
      $rootScope.task = result.msg;

      var tareasHechas = result.tareacompletada;

      $scope.tareasHechas = []

      for (var i = 0; i < tareasHechas.length; i++) {
        $scope.tareasHechas.push(tareasHechas[i].fields.tarea);
      }

      Session.setTarea($scope.tareasHechas);

      $scope.marcarTareas();
    }, (err) => {
      console.log(err);
    });

    $scope.marcarTareas = function () {
      for (var i = 0; i < $scope.tareasHechas.length; i++) {
        for (var j = 0; j < $rootScope.task.length; j++) {
          if ($scope.tareasHechas[i] == $rootScope.task[j].pk) {
            $rootScope.task[j].hecha = true;
            console.log("la tarea " + $rootScope.task[j].pk + " esta hecha");
          }
        }
      }
    }

    $scope.dirigirTarea = (tarea) => {
      //alert(tipo_tarea);
      // console.log(tarea);
      if (!tarea.hecha) {
        var tipo_tarea = tarea.fields.name;
        for (var i = 0; i < $rootScope.task.length; i++) {
          if ($rootScope.task[i].pk === tarea.pk) {
            //console.log($scope.task[i].fields.imagen);
            $rootScope.tarea = tarea;
            break;
          }
        }

        switch (tipo_tarea) {
          case "Mira esta imagen":
            $location.path('/lookPicture');
            break;

          case "Pregunta rapida":
            $location.path('/fastQuestion');
            break;

          case "Subir factura":
            tomarFoto(tarea);
            break;

          default:
            break;
        }

        /*if (tipo_tarea == "Mira esta imagen") {

          $location.path('/lookPicture');

        } else if (tipo_tarea == "Pregunta rapida") {
          $location.path('/fastQuestion');
        } else if (tipo_tarea == "") {

        } else if (tipo_tarea == "") {

        }*/


      }

    }

    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function (group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function (group) {
      return $scope.shownGroup === group;
    };

    function tomarFoto(tarea) {
      console.log(tarea)
      document.addEventListener("deviceready", function () {
        var options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation: true
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
          var image = document.getElementById('myImage');
          image.src = "data:image/jpeg;base64," + imageData;
          alert(image.src)
          $scope.tareasHechas.push(tarea.pk);
          Session.setTarea($scope.tareasHechas);
          console.log($scope.tareasHechas)
          $scope.marcarTareas();

          mostrarPopup();
          // subirFactura(image.src)
        }, function (err) {
          // error
          alert(err)
        });

      }, false);
    }

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
        
      });
    }

    function subirFactura(img) {
      TaskService.subirFactura(img, (result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
    }



    /*  function modal($scope, $ionicPopup) {
        // Custom popup
        const template = '<i style="color:#3293d4; font-size: 10em;" class="ion-star" aria-hidden="true"><br><h3 style="font-size:30px;">20pt</h3></i>';

        var myPopup = $ionicPopup.alert({
          title: 'Completaste tu perfil',
          template: template,
          scope: $scope,
          buttons: [{
            text: '<b>Continuar</b>',
            type: 'button-positive',
            onTap: function () {
              //$location.path('/path');
            }
          }]
        });
      }*/

    // this.mark_task($scope.task);

    /*    $scope.hacertares = (id) => {

          for (var i = 0; i < $scope.task.length; i++) {
            if ($scope.task[i].id === id) {
              if (!this.validar_tarea($scope.task[i])) {
                this.realizar_tarea(id, $cordovaCamera, $ionicPopup);
              }
            }
          }
        }*/

  }

  /*mark_task(task) {
    for (var i = 0; i < task.length; i++) {
      if (task[i].complete === true) {
        //document.getElementById(task[i].id).checked=true;
      }
    }
  }*/

  /*validar_tarea(tarea) {
    if (tarea.complete) {
      return true;
    }
    return false;
  }*/



}

angular.module('Grimorum.task').controller('TaskCtrl', TaskCtrl);
