(function() {
"use strict";

angular.module('admin')
.service('LoginService', LoginService);

LoginService.$inject = ['$http', 'ApiPath'];
function LoginService($http, ApiPath) {
  var service = this;

  /** Retrieves an access token using a username and password */
  service.getAccessToken = function(username, password) {
    var params = {
      'username': username,
      'password': password,
      'grant_type': 'password'
    };

    return $http.post(ApiPath + '/token', params).then(function(response) {
      return response.data.access_token;
    });
  };


  /** Make request to revoke current token */
  service.logout = function (tokenValue) {
    var params = {
      token_type_hint: 'access_token',
      token: tokenValue
    };

    return $http.post(ApiPath + '/revoke', params);
  };

}


})();
