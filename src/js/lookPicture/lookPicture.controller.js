class lookPictureCtrl{
	constructor($scope, $interval){

		$scope.time = 5;
		$scope.flag = false;

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
				alert("mostrar popup");
			}
		}
		    
			
	}
}

angular.module('Grimorum.lookPicture').controller('lookPictureCtrl',lookPictureCtrl);