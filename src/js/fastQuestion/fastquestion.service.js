class fastQuestionService {
  constructor($scope, $http, CONFIG, Session) {

    this.$http = $http;

    var url_api = CONFIG.API_URL;
    var user = Session.getUser();
    var token = Session.getToken();


    this.postTarea = (id_tarea, success, error) => {

      console.log(user)

      var tarea = {
        state: "Com",
        user_id: user.id,
        tarea_id: id_tarea
      }

      var config = {
        url: url_api + "saveTareas/",
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Token " + token
        },
        data: tarea
      };

      this.$http(config).then(function (res) {
        //console.log(res);
        success(res.data);
      }, function (err) {
        error(err);
      });


    };

  }
}


angular.module('Grimorum.fastQuestion').service('fastQuestionService', fastQuestionService)
