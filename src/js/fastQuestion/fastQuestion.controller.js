class fastQuestionCtrl{
	constructor($scope){
		$scope.seleccionar = (flag)=>{
			if(flag){
				$scope.seleccionadosi=true;
				$scope.seleccionadono=false;
			}else{
				$scope.seleccionadono=true;
				$scope.seleccionadosi=false;
			}
			
		}

	}
}

angular.module('Grimorum.fastQuestion').controller('fastQuestionCtrl',fastQuestionCtrl);