class LoginService {

  constructor($http, CONFIG, RegisterService) {
    this.$http = $http;
    this.url_api = "http://192.168.1.165:8000/api/v1/";

    this.loginUser = (user, success, error) => {
      var config = {
        url: this.url_api+"token/",
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        data: user
      };
      this.$http(config).then(function (res) {
        console.log(res);
        success(res.data);
      }, function (err) {
        error(err);
      });
    }

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
