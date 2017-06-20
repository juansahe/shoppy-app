class CompletePropileService {
  constructor($http, CONFIG, RegisterService) {
    this.$http = $http;
    var url_api = "http://192.168.1.165:8000/api/v1/";

    this.RegisterService = RegisterService;


    this.getProducts = (success, error) => {

      var user = this.RegisterService.getToken();
      var token = user.token;

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




    this.postFavoritos = (seleccionados, success, error) => {
      var user = this.RegisterService.getToken();
      var token = user.token;
      var config = {
        url: url_api + "favorite/",
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Token " + token
        },
        data: seleccionados
      };
      this.$http(config).then(function (res) {
        //console.log(res);
        success(res.data);
      }, function (err) {
        error(err);
      });

      /*$http({
	            url: url_api+"favorite/",
	            method: "POST",
	            data: seleccionados,
	            headers : {
						'Content-Type' : 'application/json',
						Authorization: "Token "+token
						}
        	})
        	.success(function (data, status, headers, config) {
                
                succes(data);
            })
            .error(function (data, status, headers, config) {

                error(data);
            });*/
    };

  }
}

angular.module('Grimorum.completePropile').service('CompletePropileService', CompletePropileService)
