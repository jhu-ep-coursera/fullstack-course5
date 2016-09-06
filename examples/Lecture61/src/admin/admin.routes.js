(function () {
"use strict";

angular.module('admin')
.config(config);

config.$inject = ['$stateProvider', '$httpProvider'];
function config($stateProvider, $httpProvider) {
  $httpProvider.interceptors.push('authHttpInterceptor');
  $httpProvider.defaults.headers.common.Accept = 'application/json';

  
}

})();
