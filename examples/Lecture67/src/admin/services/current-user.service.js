(function() {
"use strict";

angular.module('admin')
.service('CurrentUserService', CurrentUserService);

/**
 * Used to store and track information about the currently logged in user.
 * This is intended to be injected any time we need some user metadata
 * or to find out if the user is authenticated.
 **/
function CurrentUserService() {
  var service = this;
  var _username = '';
  var _accessToken = '';

  /**
   * Load the current user with username and token
   */
  service.saveToken = function(username, token) {
    _username = username;
    _accessToken = token;
  };


  service.getUsername = function() {
    return _username;
  };


  service.getAccessToken = function() {
    return _accessToken;
  };


  service.isAuthenticated = function() {
    return _accessToken !== '';
  };

}


})();
