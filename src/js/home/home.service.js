class HomeService {
  constructor($http, CONFIG, Session) {
    this.$http = $http;
    var url_api = CONFIG.API_URL;
    var token = Session.getToken();

    /*
      this.getPromotions
      realiza peticion GET para mostrar las promociones guardadas en el servidor en la vista HOME
    **/
    this.getPromotions = (success, error) => {
      $http({
        method: 'GET',
        url: url_api + "promotion/",
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

angular.module('Grimorum.home').service('HomeService', HomeService)
