angular.module('task', [])

.service('Task', ['$http', function($http){
  this.all = function(){
    return $http.get('')
  }
}])
