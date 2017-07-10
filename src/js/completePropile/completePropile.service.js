class CompletePropileService {
  constructor($http, CONFIG, Session) {
    this.$http = $http;

    var url_api = CONFIG.API_URL;
    var token = Session.getToken();


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

  }
}

angular.module('Grimorum.completePropile').service('CompletePropileService', CompletePropileService)
