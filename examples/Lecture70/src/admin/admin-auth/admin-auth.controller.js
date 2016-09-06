(function () {
"use strict";

angular.module('admin')
.controller('AdminAuthController', AdminAuthController);


AdminAuthController.$inject = ['$location', 'LoginService', 'CurrentUserService'];
function AdminAuthController($location, LoginService, CurrentUserService) {
  var $ctrl = this;

  $ctrl.logout = function () {
    // Make sure user is logged in
    if (!CurrentUserService.isAuthenticated()) {
      return;
    }

    LoginService.logout(CurrentUserService.getAccessToken()).then(function () {
      CurrentUserService.saveToken('', '');
      $location.path("/");
    });
  };
}


})();
