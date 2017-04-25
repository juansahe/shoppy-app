class TaskCtrl{
	constructor(TaskService, $scope){
		this.TaskService = TaskService;

		$scope.task = [{
			level:'1',
			task:'Completa tu perfil',
			gain:'100',
			complete:false
		},{
			level:'1',
			task:'tomate una foto para tu perfil',
			gain:'20',
			complete:false
		},{
			level:'1',
			task:'Sube tu factura de compra (De 1 a 5 productos por factura)',
			gain:'20',
			complete:false
		},{
			level:'1',
			task:'Sube tu factura de compra (De 5 a 15 productos por factura)',
			gain:'60',
			complete:false
		},{
			level:'1',
			task:'Sube tu factura de compra (De 16 o más productos por factura)',
			gain:'100',
			complete:false
		},{
			level:'1',
			task:'Califica el producto que mas consumes',
			gain:'50',
			complete:false
		}
		];
	}
}

angular.module('Grimorum.task').controller('TaskCtrl',TaskCtrl);
