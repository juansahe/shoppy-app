class LoginService {
  constructor($http, CONFIG, RegisterService, Session) {
    this.$http = $http;

    var url_api = CONFIG.API_URL;

    /*requestToken
    realiza peticion HTTP al API para el inicio de sesión y traer el token de usuario*/
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

    /*login
    trae la sesión del usuario despues que el token fue creado
    y luego, guarda los datos del usuario en localstorage cuando 
    la peticion retorna success*/
    this.login = function (data, callback) {
      var token =data.token;
      var userId=data.id;
      var config = {
        method: 'GET',
        url: url_api + 'users/'+userId+'/',
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


  }
}
angular.module('Grimorum.auth').service('LoginService', LoginService);
