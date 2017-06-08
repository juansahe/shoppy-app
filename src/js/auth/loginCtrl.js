class LoginCtrl {

  constructor(LoginService, $ionicPopup, $scope) {
    this.LoginService = LoginService;


	$scope.showAlert = function() {
		var alertPopup = $ionicPopup.alert({
			title: '¡Ganaste! <i ng-click="closePopup()" class="ion-close-round" aria-hidden="true"></i>',
			template: '<i id="star" class="ion-star" aria-hidden="true"><br><h3 style="font-size:30px;">100xp</h3></i>'
		});
			alertPopup.then(function(res) {
			console.log('Thank you for not eating my delicious ice cream cone');
		});
	};


	$scope.closePopup = function() {
		console.log("sdfsdf");
		alertPopup.close();
	};

  }

}
angular.module('Grimorum.auth').controller('LoginCtrl', LoginCtrl);