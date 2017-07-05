class TaskCtrl {
  constructor(TaskService, $scope, $cordovaCamera, $ionicPopup, $rootScope, $location) {

    this.TaskService = TaskService;

    TaskService.getTask((result) => {
      console.log(result);
      $scope.task = result;
    }, (err) => {
      console.log(err);
    });

    $scope.dirigirTarea = (tipo_tarea, id) => {
      //alert(tipo_tarea);
      if(tipo_tarea=="bro"){
        console.log(id);
        for(var i=0; i<$scope.task.length; i++){
          if($scope.task[i].id===id){
            console.log($scope.task[i].imagen);
            $rootScope.id=id;
            $rootScope.imagen = $scope.task[i].imagen;
            break;
          }
        }

         $location.path('/lookPicture');

      }else if(tipo_tarea==""){

      }else if(tipo_tarea==""){

      }else if(tipo_tarea==""){

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

    function modal($scope, $ionicPopup) {
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
    }

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
  /*realizar_tarea(id, $cordovaCamera, $ionicPopup) {
    console.log('tarea ' + id);
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
        this.modal($scope, $ionicPopup);
      }, function (err) {
        // error
      });

    }, false);
  }*/


}

angular.module('Grimorum.task').controller('TaskCtrl', TaskCtrl);
