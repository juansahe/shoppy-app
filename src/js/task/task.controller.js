class TaskCtrl {
  constructor(TaskService, $scope, $cordovaCamera, $ionicPopup, $rootScope, $location, Session) {

    this.TaskService = TaskService;
    $scope.user = Session.getUser();//traer datos de la sesión del usuario

    $rootScope.us = $scope.user;
    $rootScope.widthX = $scope.user.xperience / 1000 * 95 + "%";//porcentaje de experiencia de usuario en la barra de experiencia
    $rootScope.widthS = $scope.user.shopper_points / 10000 * 95 + "%"; //ṕorcentaje de shoppy de usuario en la barra de shoppy
    $scope.tareasHechas = Session.getTareas();//array con id de las tareas que ya se realizaron


    /*
      llama al servicio getTask para traer las tareas desde el servicio de tareas por nivel y produtos favoritos del usuario
      para mostrar su información en la vista de tareas
    */
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


    /*marca las tareas realizadas en la vista para que el usuario
    pueda identificar que tareas ya realizo*/
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

    /*
      dirigirTarea
      esta función redirige la tarea dependiendo el tipo de tarea que sea. Es decir,
      enviar al usuario a realizar la tarea en la vista correspondiente de cada tarea.
    */
    $scope.dirigirTarea = (tarea) => {

      if (!tarea.hecha) {//si la tarea no se ha realziado aun
        var tipo_tarea = tarea.fields.name;
        for (var i = 0; i < $rootScope.task.length; i++) {
          if ($rootScope.task[i].pk === tarea.pk) {
            //console.log($scope.task[i].fields.imagen);
            $rootScope.tarea = tarea;
            break;
          }
        }

        switch (tipo_tarea) {//redirección de tarea dependiendo el tipo
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
          // alert("no se ha implementado esta tarea")
            break;
        }

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
    /*enviar al servicio subirFactura para completar tarea de subir factura*/
    function subirFactura(img) {
      TaskService.subirFactura(img, (result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
    }
  }

}

angular.module('Grimorum.task').controller('TaskCtrl', TaskCtrl);
