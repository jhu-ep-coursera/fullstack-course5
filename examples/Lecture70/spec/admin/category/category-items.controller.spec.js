describe('The CategoryItemsController', function() {
  'use strict';

  var categoryItemsController;
  var menuItems = {
    menu_items:[
      {
        "id": 853,
        "short_name": "L4",
        "name": "Kung Pao Chicken",
        "description": "beef sauteed with carrots and celery, in a spicy Szechuan sauce",
        "price_small": null,
        "price_large": 9.75,
        "small_portion_name": null,
        "large_portion_name": null,
        "image_present": true
      }
    ]
  };

  var category = {
    "short_name": "L",
    "name": "Lunch",
    "special_instructions": "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll."
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

      // Instantiate controller
      categoryItemsController = $controller('CategoryItemsController', {
        $log: $log,
        menuItems: menuItems,
        category: category
      });
    });
  });

  it('should initialize with menu items and category', function() {
    expect(categoryItemsController).toBeDefined();
    expect(categoryItemsController.menuItems).toEqual(menuItems.menu_items);
    expect(categoryItemsController.category).toEqual(category);
  });



});
