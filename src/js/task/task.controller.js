class TaskCtrl{
	constructor(TaskService, $scope){
		this.TaskService = TaskService;

		$scope.task = [{
			id:'1',
			level:'1',
			task:'Completa tu perfil',
			gain:'100',
			complete:true
		},{
			id:'2',
			level:'1',
			task:'tomate una foto para tu perfil',
			gain:'20',
			complete:false
		},{
			id:'3',
			level:'1',
			task:'Sube tu factura de compra (De 1 a 5 productos por factura)',
			gain:'20',
			complete:false
		},{
			id:'4',
			level:'1',
			task:'Sube tu factura de compra (De 5 a 15 productos por factura)',
			gain:'60',
			complete:false
		},{
			id:'5',
			level:'1',
			task:'Sube tu factura de compra (De 16 o más productos por factura)',
			gain:'100',
			complete:false
		},{
			id:'6',
			level:'1',
			task:'Califica el producto que mas consumes',
			gain:'50',
			complete:false
		}
		];

		this.mark_task($scope.task);

		$scope.hacertares = (id)=>{
			
			for (var i = 0; i < $scope.task.length; i++) {
				if($scope.task[i].id===id){
					if(!this.validar_tarea($scope.task[i])){
						this.realizar_tarea(id);
					}
				}
			}
		}
	}
	mark_task(task){
		for (var i = 0; i < task.length; i++) {
			if(task[i].complete===true){
				//document.getElementById(task[i].id).checked=true;
			}
		}
	}
	validar_tarea(tarea){
		if(tarea.complete){
			return true;
		}
		return false;
	}
	realizar_tarea(id){
		console.log('tarea'+id);
	}
}

angular.module('Grimorum.task').controller('TaskCtrl',TaskCtrl);