describe('The menuItemAdmin component', function() {
  'use strict';

  var menuItemAdminComponent;
  var $httpBackend;
  var $rootScope;
  var ApiPath;

  var menuItem = {
    id: 1,
    short_name: "A1",
    name: "Egg Drop Soup",
    description: "chicken broth with egg drop",
    price_small: 2.25,
    price_large: 4.5,
    small_portion_name: "pint",
    large_portion_name: "quart",
    image_present: true
  };

  var funcBindings = {
    onSave: function() {},
    onCancel: function() {},
    onError: function() {}
  };

  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('admin');

    // Load any dependencies
    inject(function ($injector) {
      var $componentController = $injector.get('$componentController');
      $rootScope = $injector.get('$rootScope');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');

      // Set up spies for function expressions
      spyOn(funcBindings, 'onCancel');
      spyOn(funcBindings, 'onSave');
      spyOn(funcBindings, 'onError');

      // Create component
      menuItemAdminComponent = $componentController('menuItemAdmin', null, {
        menuItem: angular.copy(menuItem),
        onCancel: funcBindings.onCancel,
        onSave: funcBindings.onSave,
        onError: funcBindings.onError
      });
    });
  });

  it('should initialize and execute cancel function expression', function() {
    expect(menuItemAdminComponent).toBeDefined();
    expect(menuItemAdminComponent.menuItem).toBeDefined();
    expect(funcBindings.onCancel).not.toHaveBeenCalled();
    menuItemAdminComponent.cancel();
    expect(funcBindings.onCancel).toHaveBeenCalled();
  });


  it('should initialize and execute onSave function expression', function() {
    // Simulate successful sav
    $httpBackend
      .expectPUT(ApiPath + '/menu_items/' + menuItem.short_name, menuItem)
      .respond(menuItem);

    menuItemAdminComponent.saveMenuItem();
    $httpBackend.flush();
    expect(funcBindings.onSave).toHaveBeenCalled();
  });

  it('should initialize and execute onError function expression', function() {
    // Simulate error response
    $httpBackend
      .expectPUT(ApiPath + '/menu_items/' + menuItem.short_name, menuItem)
      .respond(500, menuItem);

    menuItemAdminComponent.saveMenuItem();
    $httpBackend.flush();
    expect(funcBindings.onError).toHaveBeenCalled();

  });
});
