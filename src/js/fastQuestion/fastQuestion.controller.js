class fastQuestionCtrl{
	constructor($scope, $location){
		$scope.seleccionar = (flag)=>{
			if(flag){
				$scope.seleccionadosi=true;
				$scope.seleccionadono=false;
			}else{
				$scope.seleccionadono=true;
				$scope.seleccionadosi=false;
			}
			
		}

		$scope.salir=function(){
			$location.path('/task');
		}

	}
}

angular.module('Grimorum.fastQuestion').controller('fastQuestionCtrl',fastQuestionCtrl);