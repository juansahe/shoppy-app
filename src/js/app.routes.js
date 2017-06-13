angular.module('Grimorum')
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
  function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('start',{
        url:"/",
        templateUrl:"js/start/start.html",
        controller: 'StartCtrl'
      })

      .state('login', {
        url: "/login",
        templateUrl: "js/auth/login.html",
        controller: 'LoginCtrl'
      })

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'js/layouts/menu.html',
        controller: 'MenuCtrl'
      })

      .state('register', {
        url: '/register',
        templateUrl: 'js/register/register.html',
        controller: 'RegisterCtrl'
      })

      .state('completeprofile', {
        url: '/completeprofile',
        templateUrl: 'js/completePropile/completePropile.html',
        controller: 'CompletePropileCtrl'
      })

      .state('path', {
        url: '/path',
        templateUrl: 'js/path/path.html',
        controller: 'PathCtrl'
      })

      .state('tab.home', {
        url: '/home',
        views:{
          'tab-home':{
            templateUrl: 'js/home/home.html',
            controller: 'HomeCtrl'
          }
        }
        
      })

      .state('tab.users',{
        url: '/user',
        views:{
          'tab-user':{
            templateUrl:'js/users/users.html',
            controller:'UsersCtrl'
          }
        }
        
      })

      .state('tab.task', {
        url:'/task',
        views:{
          'tab-task':{
            templateUrl:'js/task/task.html',
            controller: 'TaskCtrl'
          }
        }
        
      })
      .state('points',{
        templateUrl:'js/layouts/points.html',
        abstract: true,
        controller:'puntosCtrl'
      })

      .state('fastQuestion', {
        url: '/fastQuestion',
        templateUrl: 'js/fastQuestion/fastQuestion.html',
        controller: 'fastQuestionCtrl'
      })

      .state('bonds',{
        url:'/bond',
        templateUrl:'js/bonds/bonds.html',
        controller:'BondsCtrl'

      })

      .state('tab',{
        url : '/tab',
        abstract :true,
        templateUrl:'js/layouts/tabs.html'
      })

      .state('lookPicture',{
        url : '/lookPicture',
        templateUrl:'js/lookPicture/lookPicture.html',
        controller:'lookPictureCtrl'
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
