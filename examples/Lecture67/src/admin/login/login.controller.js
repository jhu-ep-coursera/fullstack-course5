(function() {
"use strict";

angular.module('admin')
.controller('LoginController', LoginController);


/**
 * Handles login form credentials and redirects user to page.
 */
LoginController.$inject = ['$state', 'LoginService', 'CurrentUserService'];
function LoginController($state, LoginService, CurrentUserService) {
  var $ctrl = this;
  $ctrl.username = '';
  $ctrl.password = '';
  $ctrl.error = '';

  /**
   * Handles when user clicks the login button.
   */
  $ctrl.login = function() {
    LoginService.getAccessToken($ctrl.username, $ctrl.password).then(function(accessToken) {
      CurrentUserService.saveToken($ctrl.username, accessToken);

      // If user went directly to login page, redirect to admin home
      if(!$state.params || !$state.params.toState) {
        $state.go('admin.auth');
      }
      else {
        $state.go($state.params.toState.name, $state.params.toParams);
      }
    }, function(response) {
      // Login failed
      $ctrl.error = "Login Failed: Username and/or Password did not match.";
    });
  };


  $ctrl.valid = function() {
    return ($ctrl.username !== '' && $ctrl.password !== '');
  };

}


})();
