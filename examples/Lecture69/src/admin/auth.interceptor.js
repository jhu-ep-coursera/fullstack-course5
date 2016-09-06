(function () {
"use strict";

angular.module('admin')
.factory('authHttpInterceptor', AuthHttpInterceptor);


AuthHttpInterceptor.$inject = ['CurrentUserService'];
function AuthHttpInterceptor(CurrentUserService) {
  return {
    request: function (config) {
      if (CurrentUserService.isAuthenticated()) {
        config.headers.Authorization =
          "Bearer " + CurrentUserService.getAccessToken();
      }

      return config;
    }
  };
}

})();
