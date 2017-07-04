class RegisterService {
  constructor($http, CONFIG, Session) {
    var url_api = CONFIG.API_URL;
    console.log()
    this.$http = $http;

    
    
    this.saveUser = (user, success, error) => {
      var config = {
        url: url_api + "users/",
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




    this.setUser = (user) => {
      Session.create("c7ba8ea7468f592cd618e0f3537b3f07a42df20f", user)
      // window.localStorage.setItem('user', JSON.stringify(user));
    }

    this.getUser = () => {
      return JSON.parse(localStorage.getItem('user'));
    }
    this.getToken = () => {
      return JSON.parse(localStorage.getItem('token'));
    }

  }
}

angular.module('Grimorum.register').service('RegisterService', RegisterService);
