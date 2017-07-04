class Session {

  constructor(CONFIG, $location) {

    this.token = null;
    this.user = null;

    this.create = function (token, user) {
      window.localStorage.setItem('token', angular.toJson(token));
      window.localStorage.setItem('user', angular.toJson(user));
    };

    //get token from memory or localStorage
    this.getToken = function () {
      var token = this.token;
      if (!token) {
        token = angular.fromJson(window.localStorage.getItem('token'));
      }
      return token;
    };

    this.destroyLc = function () {
      this.token = null;
      this.user = null;
      this._destroyLc();
    };

    this._destroyLc = function () {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('user');
      $location.path('/');
    };



    //get user from memory or localStorage
    this.getUser = function () {
      var user = this.user;
      if (!user) {
        user = angular.fromJson(window.localStorage.getItem('user'));
      }
      return user;
    };

    this.isAuthenticated = function () {
      return (this.getToken() != null);
    }

  }

}
angular.module('Grimorum.auth').service('Session', Session);
