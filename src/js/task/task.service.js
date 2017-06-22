class TaskService {
  constructor($http, CONFIG, Session) {
    this.$http = $http;

    var url_api = CONFIG.API_URL;
    var token = Session.getToken();

    this.getTask = (success, error) => {
      $http({
        method: 'GET',
        url: url_api + "task/",
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
