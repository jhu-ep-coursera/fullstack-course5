describe('The authHttpInterceptor factory', function() {
  'use strict';

  var authHttpInterceptor;
  var CurrentUserService;

  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('admin');

    // Load any dependencies
    inject(function ($injector) {
      authHttpInterceptor = $injector.get('authHttpInterceptor');
      CurrentUserService = $injector.get('CurrentUserService');
    });
  });

  it('should have the Authorization header property populated if user is authenticated', function() {
    var username = 'john.doe';
    var token = 'secret';
    var config = {
      headers: {}
    };

    expect(authHttpInterceptor).toBeDefined();

    // Simulate user logging in
    CurrentUserService.saveToken(username, token);

    var authConfig = authHttpInterceptor.request(config);
    expect(authConfig).toBeDefined();
    expect(authConfig.headers.Authorization).toBe('Bearer ' + token);
  });

  it('should NOT have the Authorization header property populated when user is not authenticated', function() {
    var config = {
      headers: {}
    };
    expect(authHttpInterceptor).toBeDefined();
    var authConfig = authHttpInterceptor.request(config);
    expect(authConfig).toBeDefined();
    expect(authConfig.headers.Authorization).not.toBeDefined();
  });
});
