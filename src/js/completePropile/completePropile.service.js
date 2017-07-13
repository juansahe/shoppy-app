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

      this.subirPtosUser = (user, success, error) => {
        console.log(user)
        // user={
        //   userid:
        // }

        var config = {
          url: url_api + "saveTareas/",
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Token " + token
          },
          data: user
        };
        this.$http(config).then(function (res) {
          //console.log(res);
          success(res.data);
        }, function (err) {
          error(err);
        });


        
      }
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
