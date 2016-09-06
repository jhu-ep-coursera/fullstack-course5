describe('The CurrentUserService', function() {
  'use strict';

  var CurrentUserService;
  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('admin');

    // Load any dependencies
    inject(function ($injector) {
      CurrentUserService = $injector.get('CurrentUserService');
    });
  });

  it('should indicate that user is not authenticated', function() {
    expect(CurrentUserService).toBeDefined();
    expect(CurrentUserService.isAuthenticated()).toBe(false);
  });

  it('should load a username and token and indicate that user is authenticated', function() {
    var username = 'john.doe';
    var token = 'my-secret-token';

    expect(CurrentUserService).toBeDefined();
    expect(CurrentUserService.isAuthenticated()).toBe(false);
    CurrentUserService.saveToken(username, token);

    expect(CurrentUserService.getUsername()).toBe(username);
    expect(CurrentUserService.getAccessToken()).toBe(token);
    expect(CurrentUserService.isAuthenticated()).toBe(true);
  });
});
