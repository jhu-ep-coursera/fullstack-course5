describe('The LoginController', function() {
  'use strict';

  var loginController;
  var $state;
  var LoginService;
  var CurrentUserService;
  var $httpBackend;
  var ApiPath;
  var $rootScope;

  var accessTokenResponse = {
    access_token: 'my-secret-token'
  };

  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('admin');

    // Load any dependencies
    inject(function ($injector) {
      var $controller = $injector.get('$controller');
      var $log = $injector.get('$log');

      $httpBackend = $injector.get('$httpBackend');
      $state = $injector.get('$state');
      LoginService = $injector.get('LoginService');
      CurrentUserService = $injector.get('CurrentUserService');
      ApiPath = $injector.get('ApiPath');
      $rootScope = $injector.get('$rootScope');

      // Instantiate controller
      loginController = $controller('LoginController', {
        $state: $state,
        $log: $log,
        LoginService: LoginService,
        CurrentUserService: CurrentUserService
      });

      // We need to account for calls to state templates
      $httpBackend.whenGET('src/admin/admin.html').respond('');
      $httpBackend.whenGET('src/admin/login/login.html').respond('');
      $httpBackend.whenGET('src/admin/admin-auth/admin-auth.html').respond('');
      $httpBackend.whenGET('src/admin/category/category-items.html').respond('');

      $httpBackend.whenGET(ApiPath + '/categories/L.json').respond('');
      $httpBackend.whenGET(ApiPath + '/menu_items.json?category=L').respond('');

      $rootScope.$$listeners['$stateChangeStart'] = null;
    });
  });

  it('should initialize with default values', function() {
    expect(loginController).toBeDefined();
    expect(loginController.username).toBe('');
    expect(loginController.password).toBe('');
    expect(loginController.error).toBe('');
  });

  it('should not be valid', function() {
    expect(loginController.valid()).toBe(false);
  });

  it('should login and redirect to admin homepage when first landing on login page', function() {
    expect(loginController.valid()).toBe(false);

    // Go to login state
    $state.go('admin.login');
    $rootScope.$digest();
    $httpBackend.flush();
    expect($state.current.name).toBe('admin.login');

    // Populate credentials
    loginController.username = 'john.doe';
    loginController.password = 'secret';

    var params = {
      'username': loginController.username,
      'password': loginController.password,
      'grant_type': 'password'
    };

    // Mock token request using credentials
    $httpBackend.expectPOST(ApiPath + '/token', params ).respond(accessTokenResponse);

    // Attempt login
    loginController.login();
    $rootScope.$digest();
    $httpBackend.flush();

    // Ensure we are redirectd to admin home page
    expect($state.current.name).toBe('admin.auth');
  });

  it('should login and redirect to user to state where they intended on going', function() {
    expect(loginController.valid()).toBe(false);

    // Go to category state
    $state.go('admin.auth.category', {categoryId: 'L'});
    $rootScope.$digest();
    $httpBackend.flush();
    expect($state.current.name).toBe('admin.auth.category');

    // Copy params and state info and route to login to simulate login service
    // $changeStateStart handler
    $state.go('admin.login', {
      toParams: angular.copy($state.params),
      toState: angular.copy($state.current)
    });
    $rootScope.$digest();
    $httpBackend.flush();

    // Populate credentials
    loginController.username = 'john.doe';
    loginController.password = 'secret';

    var params = {
      'username': loginController.username,
      'password': loginController.password,
      'grant_type': 'password'
    };

    // Mock token request using credentials
    $httpBackend.expectPOST(ApiPath + '/token', params ).respond(accessTokenResponse);

    // Attempt login
    loginController.login();
    $httpBackend.flush();

    // Ensure we are redirectd to admin home page
    expect($state.current.name).toBe('admin.auth.category');
  });

});
