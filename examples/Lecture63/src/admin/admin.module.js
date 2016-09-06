(function() {
"use strict";

angular.module('admin', ['ui.router', 'common'])
.run(run);

run.$inject = ['$rootScope', 'AuthRedirectorService']
function run($rootScope, AuthRedirectorService) {
  // Apply auth rules when state changes
  $rootScope.$on('$stateChangeStart', AuthRedirectorService.onStateChangeStart);
}


})();
