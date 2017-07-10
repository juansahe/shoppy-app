class TaskService {
  constructor($http, CONFIG, Session) {
    this.$http = $http;

    var url_api = CONFIG.API_URL;
    var token = Session.getToken();
    var user = Session.getUser();
    // console.log(user);

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
