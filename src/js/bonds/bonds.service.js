class BondsService {
  constructor($http, CONFIG, Session) {

    var url_api = CONFIG.API_URL;
    var token = Session.getToken();

    this.$http = $http;

    this.getBonds = (success, error) => {
      var config = {
        url: url_api + "bond/",
        method: "GET",
        headers: {
          Authorization: "Token " + token
        }
      };
      this.$http(config).then(function (res) {
        success(res.data);
      }, function (err) {
        error(err);
      });

    }

    this.getmybond = (user_id, success, error) => {
      var config = {
        url: url_api + "Mybond/",
        method: "POST",
        headers: {
          Authorization: "Token " + token
        },
        data: user_id
      };
      this.$http(config).then(function (res) {
        // console.log(res);
        success(res.data);
      }, function (err) {
        error(err);
      });

    }

    this.postBono = (bono, success, error) => {
      var config = {
        url: url_api+"redemptionBond/",
        method: 'POST',
        headers: {
          Authorization: "Token" + token
        },
        data: bono
      }
      this.$http(config).then((res) => {
        success(res);
      }, (err) => {
        error(err);
      });
    }
  }

}


angular.module('Grimorum.bonds').service('BondsService', BondsService)
