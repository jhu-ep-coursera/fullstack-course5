describe('The menuItem component', function() {
  'use strict';

  var menuItemComponent;
  var menuItem = {
      "id": 850,
      "short_name": "L1",
      "name": "Orange Chicken2",
      "description": "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
      "price_small": null,
      "price_large": 9.75,
      "small_portion_name": null,
      "large_portion_name": null,
      "created_at": "2016-08-05T19:42:11.381Z",
      "updated_at": "2016-08-19T20:02:06.803Z",
      "category_short_name": "L",
      "image_present": true
    };
  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('public');

    // Load any dependencies
    inject(function ($injector) {
      var $componentController = $injector.get('$componentController');
      menuItemComponent = $componentController('menuItem', null, {
        menuItem: menuItem
      });
    });
  });

  it('should initialize with menu item', function() {
    expect(menuItemComponent).toBeDefined();
    expect(menuItemComponent.menuItem).toEqual(menuItem);
  });



});
