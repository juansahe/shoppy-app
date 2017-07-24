class TaskService {
  constructor($http, CONFIG, Session) {
    this.$http = $http;

    var url_api = CONFIG.API_URL;
    var token = Session.getToken();
    var user = Session.getUser();
    // console.log(user);


    /*
    Realiza peticion POST para traer la lista de tareas dependiendo el nivel del usuario
    y los productos favoritos del mismo.
      */
    this.getTask = (success, error) => {
      $http({
        method: 'POST',
        url: url_api + "task/",
        data: {
          'id': user.id
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Token " + token
        }
      }).then(function successCallback(response) {
        success(response.data);
      }, function errorCallback(response) {
        error(response.data);
      });
    }


    /*
    realiza peticion post para guardar la tarea subir factura al realizarla
    */
    this.subirFactura = (img, success, error) => {
      $http({
        method: 'POST',
        url: url_api + "factura/",
        data: {
          'id': user.id
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Token " + token
        }
      }).then(function successCallback(response) {
        success(response.data);
      }, function errorCallback(response) {
        error(response.data);
      });
    }

  }
}

angular.module('Grimorum.task').service('TaskService', TaskService)
