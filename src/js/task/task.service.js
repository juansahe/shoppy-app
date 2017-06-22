class TaskService {
  constructor($http, CONFIG, RegisterService) {
    this.$http = $http;

    var url_api = "http://192.168.1.165:8000/api/v1/";

    this.RegisterService = RegisterService;
    var user = this.RegisterService.getUser();

    var token = user.aut_token;

    this.getTask = (success, error) => {

      var user = this.RegisterService.getToken();
      var token = user.token;

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
