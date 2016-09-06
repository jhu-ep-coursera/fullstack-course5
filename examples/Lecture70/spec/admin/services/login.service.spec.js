describe('The LoginService', function() {
  'use strict';

  var LoginService;
  var AuthRedirectorService;
  var ApiPath;
  var $httpBackend;
  var accessTokenResponse = {
    access_token: 'my-secret-token'
  };
  var $rootScope;
  var $state;

  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('admin');

    // Load any dependencies
    inject(function ($injector) {
      LoginService = $injector.get('LoginService');
      AuthRedirectorService = $injector.get('AuthRedirectorService');
      ApiPath = $injector.get('ApiPath');
      $httpBackend = $injector.get('$httpBackend');
      $rootScope = $injector.get('$rootScope');
      $state = $injector.get('$state');
    });

    // Turn off listener that's initiated in run method for the purposes
    // of manually adding it with each unit test
    $rootScope.$$listeners['$stateChangeStart'] = null;
  });

  it('should retrieve access token using username and password', function() {
    var username = 'john.doe';
    var password = 'secret';
    var params = {
      'username': username,
      'password': password,
      'grant_type': 'password'
    };

    expect(LoginService).toBeDefined();
    $httpBackend.expectPOST(ApiPath + '/token', params ).respond(accessTokenResponse);

    LoginService.getAccessToken(username, password).then(function (accessToken) {
      expect(accessToken).toEqual(accessTokenResponse.access_token);
    });
    $httpBackend.flush();

  });

  it('should redirect user to login page when not authenticaated', function() {
    // Pass our onStateChangeStart handler from LoginService
    $rootScope.$on('$stateChangeStart', AuthRedirectorService.onStateChangeStart);

    // We're less concerned about the actual contents of the html template. We
    // simply just tell it to return empty because we are required to account
    // for the GET request.
    $httpBackend.whenGET('src/admin/admin.html').respond('');
    $httpBackend.whenGET('src/admin/login/login.html').respond('');

    // Attempt to go to home admin state
    $state.go('admin.auth');

    // Must call $digest to ensure state transition occurs
    $rootScope.$digest();
    $httpBackend.flush();

    // Expect that our onStateChangeStart handler redirects unauthenticated
    // user to login state
    expect($state.current.name).toBe('admin.login');
  });
});
