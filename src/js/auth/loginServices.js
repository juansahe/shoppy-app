class LoginService {

  constructor($http, CONFIG){
    this.$http = $http;
  }
} 
angular.module('Grimorum.auth').service('LoginService', LoginService); 
