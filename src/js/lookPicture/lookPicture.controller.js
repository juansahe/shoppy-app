class lookPictureCtrl{
	constructor($scope, $interval, $rootScope, $location, $ionicPopup, Session){
		//console.log(CONFIG);
		$scope.time = 5;
		$scope.flag = false;
		console.log($rootScope.tarea);
		$scope.ta = $rootScope.tarea;
		$scope.img = "http://45.55.43.26:8000/media/"+$rootScope.tarea.fields.imagen;
			var contador=$interval(function () {
			  $scope.time--;
			  if($scope.time<0){
			  	
			  	$interval.cancel(contador);
			  	$scope.time = null;
			  	$scope.flag = true;
			  }
			}, 1000);


		$scope.abrirpopup = ()=>{
			if($scope.flag){
				//sumer xp y s y poner la tarea como realizada
				$scope.user = Session.getUser();
				$scope.user.shopper_points= parseInt($scope.user.shopper_points)+parseInt($scope.ta.fields.SM);
				$scope.user.xperience = parseInt($scope.user.xperience)+parseInt($scope.ta.fields.point_exp);
				console.log($scope.user);
				//se guarda nuevamente el usuario en localstorage

				//guardar array de tareas hechas en localstorage
				
				//$scope.pop();
			}
		}

		$scope.pop=function mostrarPopup() {
	      var alertPopup = $ionicPopup.alert({
	        title: '<h2 class="win">¡Ganaste!</h2> <i ng-click="showAlert()"  aria-hidden="true"></i>',
	        templateUrl: 'modalpoints.html',
	        scope: $scope,
	        buttons: [{
	          text: 'Listo'
	        }]
	      });
	      alertPopup.then(function (res) {
	        $location.path('/task');
	      });
	    }

		$scope.cerrar = ()=>{
			$location.path('/task');
		}
		    
			
	}
}

angular.module('Grimorum.lookPicture').controller('lookPictureCtrl',lookPictureCtrl);