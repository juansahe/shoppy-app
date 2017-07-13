class CompletePropileService {
  constructor($http, CONFIG, Session) {
    this.$http = $http;

    var url_api = CONFIG.API_URL;
    var token = Session.getToken();
    var user = Session.getUser();


    this.getProducts = (success, error) => {

      $http({
        method: 'GET',
        url: url_api + "product/",
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

    this.postFavoritos = (favorito, success, error) => {
      var config = {
        url: url_api + "favorite/",
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Token " + token
        },
        data: favorito
      };
      this.$http(config).then(function (res) {
        //console.log(res);
        success(res.data);
      }, function (err) {
        error(err);
      });
    };


    this.postTarea = (id_tarea, success, error) => {

      console.log(user)

      var tarea = {
        state: "Com",
        user_id: user.id,
        tarea_id: id_tarea
      }

      var config = {
        url: url_api + "saveTareas/",
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Token " + token
        },
        data: tarea
      };

      this.$http(config).then(function (res) {
        //console.log(res);
        success(res.data);
      }, function (err) {
        error(err);
      });


    };


  }
}

angular.module('Grimorum.completePropile').service('CompletePropileService', CompletePropileService)
