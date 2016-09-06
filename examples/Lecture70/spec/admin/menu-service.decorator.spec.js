describe('The MenuService decorator', function() {
  'use strict';

  var $httpBackend;
  var MenuService;
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

  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('admin');

    // Load any dependencies
    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      MenuService = $injector.get('MenuService');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should save a menu item', function() {
    $httpBackend
      .expectPUT(ApiPath + '/menu_items/' + menuItem.short_name, menuItem)
      .respond(menuItem);
    MenuService.saveMenuItem(menuItem).then(function(savedMenuItem) {
      expect(savedMenuItem).toEqual(menuItem);
    });
    $httpBackend.flush();
  });

});
