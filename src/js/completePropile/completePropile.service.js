class CompletePropileService{
	constructor($http, CONFIG, RegisterService){
		this.$http = $http;
		var url_api="http://192.168.1.165:8000/api/v1/product/";

		this.RegisterService = RegisterService;
			var user = this.RegisterService.getUser();
			var token=user.auth_token;

		this.getProducts=(success, error)=>{
			
			/*var productos=[
			{ id: 105, name:"Cerveza"},
			{ id: 8, name:"Cerveza1"},
			{ id: 14, name:"Arbeja"},
			{ id: 40, name:"Cerveza3"},
			{ id: 36, name:"Empanada"},
			{ id: 29, name:"Cerveza"},
			{ id: 70, name:"Cerveza"},
			{ id: 45, name:"Cerveza"},
			{ id: 3, name:"Cerveza"},
			{ id: 5, name:"Cerveza"},
			{ id: 9, name:"Pan"},
			{ id: 7, name:"Cerveza"},
			{ id: 12, name:"Leche"},
			{ id: 13, name:"Cerveza"},
			{ id: 11, name:"Cerveza"},
			{ id: 16, name:"Cerveza"},
			{ id: 17, name:"Pollo"},
			{ id: 18, name:"Cerveza"},
			{ id: 28, name:"Cerveza"},
			{ id: 20, name:"Cerveza"},
			{ id: 21, name:"Frijol"},
			{ id: 22, name:"Cerveza"},
			{ id: 23, name:"Cerveza"},
			{ id: 2, name:"Cerveza"},
			{ id: 25, name:"Cerveza"}
		];*/
		//success(productos);
			$http({
			  method: 'GET',
			  url: url_api,
			  headers : {
						'Content-Type' : 'application/json',
						Authorization: "Token "+token
						}
			}).then(function successCallback(response) {
			    success(response.data);
			  }, function errorCallback(response) {
			    error(response.data);
			  });
		}




		this.postFavoritos=(seleccionados ,success, error)=>{
			$http({
	            url: url_api,
	            method: "POST",
	            data: {favoritos: seleccionados},
	            headers : {
						'Content-Type' : 'application/json',
						Authorization: "Token b77bfb0d3938b562c19d98aa1217f1d4dae2aef8"
						}
        	})
        	.success(function (data, status, headers, config) {
                $scope.users = data; // assign  $scope.persons here as promise is resolved here 
                succes(data);
            })
            .error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
                succes(data);
            });
		};

	}
}

angular.module('Grimorum.completePropile').service('CompletePropileService', CompletePropileService)
