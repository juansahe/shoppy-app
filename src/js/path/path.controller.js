class PathCtrl{
	constructor(PathService, $scope){
		this.PathService = PathService;

		$scope.camino = [{
			level:'1',
			type:'pt',
			msj:'Sube tus facturas de compra'
		},{
			level:'2',
		 	type:'pt',
		 	msj:'Sube tus facturas de compra'
		},{
			level:'3',
			type:'pt',
			msj: 'Sácale fotos a tus productos'
		},{
			level:'4',
			type:'pt',
			msj:'Visita retalls'
		},{
			level:'5',
			type:'$',
			msj:'Participa en encuestas'
		},{
			level:'6',
			type:'pt',
			msj:'Sube tus facturas de compra'
		},{
			level:'7',
			type:'pt',
			msj:'Sube tus facturas de compra'
		},{
			level:'8',
			type:'pt',
			msj:'Sácale fotos a tus productos'
		},{
			level:'9',
			type:'pt',
			msj:'Visita retalls'
		},{
			level:'10',
			type:'$',
			msj:'Participa en focus groups'
		}];
	}
}
angular.module('Grimorum.path').controller('PathCtrl', PathCtrl);
