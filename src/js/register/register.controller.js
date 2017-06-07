class RegisterCtrl{
	constructor(RegisterService, $scope, $location){
		
		this.RegisterService = RegisterService;
		$scope.user={
			puntos:"100",
			dinero:"0"
		};
		$scope.verificar = (e)=>{

			window.localStorage.setItem("user", $scope.user);
			console.log($scope.user);

			 $location.path('/completeprofile');	
		}
		$scope.onezoneDatepicker = {
			date: new Date(), // MANDATORY                     
	        mondayFirst: false,                
	        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],                    
	        daysOfTheWeek: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],     
	        startDate: new Date(1950, 1, 26),             
	        endDate: new Date(2024, 1, 26),                    
	        disablePastDays: false,
	        disableSwipe: false,
	        disableWeekend: false,
	        disableDates: [new Date(2016, 1, 15), new Date(2016, 2, 16), new Date(2016, 3, 17)],
	        showDatepicker: false,
	        showTodayButton: true,
	        calendarMode: false,
	        hideCancelButton: false,
	        hideSetButton: false,
	        highlights: [
	                    {
	                        date: new Date(2016, 1, 7),
	                        color: '#FFF',
	                        textColor: '#fff'
	                    },
	                    {
	                        date: new Date(2016, 1, 18)
	                    },
	                    {
	                        date: new Date(2016, 1, 19)
	                    },
	                    {
	                        date: new Date(2016, 1, 20)
	                    }
	                ],
	        callback: function(val){
	            
	        }
	    }
	}

}

angular.module('Grimorum.register').controller('RegisterCtrl', RegisterCtrl);
