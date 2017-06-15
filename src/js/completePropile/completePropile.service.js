class CompletePropileService{
	constructor($http, CONFIG){
		this.$http = $http;
		var url_api="http://api/xxxxxxx";

		this.getProducts=(success, error)=>{
			var productos=[
			{ id: 1, nombre:"Pollo", estado:false },
			{ id: 2, nombre:"Gaseosa", estado:false },
			{ id: 3, nombre:"Huevos", estado:false },
			{ id: 4, nombre:"Frijol", estado:false },
			{ id: 5, nombre:"Lentejas", estado:false },
			{ id: 6, nombre:"Jugo", estado:false },
			{ id: 7, nombre:"Miel", estado:false },
			{ id: 8, nombre:"Leche", estado:false },
			{ id: 9, nombre:"Cerveza", estado:false },
			{ id: 10, nombre:"Cerveza", estado:false },
			{ id: 11, nombre:"Cerveza", estado:false },
			{ id: 12, nombre:"Cerveza", estado:false },
			{ id: 13, nombre:"Cerveza", estado:false },
			{ id: 14, nombre:"Cerveza", estado:false },
			{ id: 15, nombre:"Cerveza", estado:false },
			{ id: 16, nombre:"Cerveza", estado:false },
			{ id: 17, nombre:"Cerveza", estado:false },
			{ id: 18, nombre:"Cerveza", estado:false },
			{ id: 19, nombre:"Arroz", estado:false },
			{ id: 20, nombre:"Cerveza", estado:false },
			{ id: 21, nombre:"Cerveza", estado:false },
			{ id: 22, nombre:"Cerveza", estado:false },
			{ id: 23, nombre:"Cerveza", estado:false },
			{ id: 24, nombre:"Cerveza", estado:false },
			{ id: 25, nombre:"Cerveza", estado:false },
			{ id: 26, nombre:"Cerveza", estado:false },
			{ id: 27, nombre:"Cerveza", estado:false },
			{ id: 28, nombre:"Cerveza", estado:false },
			{ id: 1, nombre:"Cerveza", estado:false },
			{ id: 1, nombre:"Cerveza", estado:false },
			{ id: 1, nombre:"Cerveza", estado:false },
			{ id: 1, nombre:"Cerveza", estado:false },
			{ id: 1, nombre:"Cerveza", estado:false },
			{ id: 1, nombre:"Cerveza", estado:false },
			{ id: 1, nombre:"Arroz con pollo", estado:false }
			];
		success(productos);

			/*$http({
			  method: 'GET',
			  url: url
			}).then(function successCallback(response) {

			    success(response);
			  }, function errorCallback(response) {
			    error(error);
			  });*/
		}
		this.postFavoritos=(success, error)=>{
			$http({
            url: url_api,
            method: "POST",
            data: {application:app},
            headers: {'Content-Type': 'application/json'}
        	})
        	.success(function (data, status, headers, config) {
                $scope.users = data.users; // assign  $scope.persons here as promise is resolved here 
            })
            .error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });
			};  
		}
	}
}

angular.module('Grimorum.completePropile').service('CompletePropileService', CompletePropileService)
