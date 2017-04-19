angular.module('Grimorum')
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
  function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('login', {
        url: "/",
        templateUrl: "js/auth/login.html",
        controller: 'LoginCtrl'
      })

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'js/layouts/menu.html',
        controller: 'MenuCtrl'
      })


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

    //interceptor http
    $httpProvider.interceptors.push(function($rootScope) {
      return {
        request: function(config) {
          if(!config.noblock) $rootScope.$broadcast('loading:show')
          return config
        },
        response: function(response) {
          $rootScope.$broadcast('loading:hide')
          return response
        }
      }
    });

  }])
