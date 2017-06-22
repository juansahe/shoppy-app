class LoginService {
  constructor($http, CONFIG, RegisterService, Session) {
    this.$http = $http;

    var url_api = CONFIG.API_URL;

    this.requestToken = (user, callback, error) => {
      var config = {
        url: url_api + "token/",
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        data: user
      };
      this.$http(config).then(callback, error);
    }

    this.login = function (token, callback) {
      var config = {
        method: 'GET',
        url: url_api + 'users/1/',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + token
        }
      };

      return $http(config).then(function (response) {

        Session.create(token, response.data);
        callback(response)
      }, this.handleError);

    };

    this.handleError = function (res) {
      console.warn(res);
    };

    this.getUser = (success, error) => {
      var config = {
        url: this.url_api + "users/1",
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          //Authorization: "Token " + token
        }
      };
      this.$http(config).then(function (res) {
        //console.log(res);
        success(res.data);
      }, function (err) {
        error(err);
      });

      /*$http({
        method: 'GET',
        url: this.url_api + "users/22",
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function successCallback(response) {
        success(response.data);
      }, function errorCallback(response) {
        error(response.data);
      });*/

    }

  }
}
angular.module('Grimorum.auth').service('LoginService', LoginService);
