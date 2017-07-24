class RegisterService {
  constructor($http, CONFIG, Session) {
    var url_api = CONFIG.API_URL;
    console.log()
    this.$http = $http;

    
    /*this.saveUser
    Realiza una petición POST al servidor para 
    registrar el usuario ingresado en el formulario
    de registro*/
    this.saveUser = (user, success, error) => {
      

      var config = {
        url: url_api + "register/",
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        data: user
      };  
      this.$http(config).then(function (res) {
        success(res.data);
      }, function (err) {
        error(err);
      });
    }



    //guarda el usuario registrado en el local storage
    this.setUser = (token, user) => {
      Session.create(token, user)
      // window.localStorage.setItem('user', JSON.stringify(user));
    }

    //mustra los datos del usuario que se guardo anteriormente en el localstorage
    this.getUser = () => {
      return JSON.parse(localStorage.getItem('user'));
    }

    //muestra el token del usuario que se guardo anteriormente en el localstorage
    this.getToken = () => {
      return JSON.parse(localStorage.getItem('token'));
    }

  }
}

angular.module('Grimorum.register').service('RegisterService', RegisterService);
