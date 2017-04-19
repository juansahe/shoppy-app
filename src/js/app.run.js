angular.module('Grimorum')
.run(['$ionicPlatform', '$rootScope', '$ionicLoading', 'amMoment', 
  function($ionicPlatform, $rootScope, $ionicLoading) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        window.StatusBar.backgroundColorByHexString("#013280");
      }
      $rootScope.$on('loading:show', function() {
        $ionicLoading.show({
          template: '<div class="loader"> \
             <svg class="circular"> \
             <circle class="path" cx="50" cy="50" r="20" fill="none"  \
             stroke-width="3" stroke-miterlimit="10"/></svg></div>',
          hideOnStateChange: true
        });
      });

      $rootScope.$on('loading:hide', function() {
        $ionicLoading.hide()
      });

      //amMoment.changeLocale('es');
    });
  }])
