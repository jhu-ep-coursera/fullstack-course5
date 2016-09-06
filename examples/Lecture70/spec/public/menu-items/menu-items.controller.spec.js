describe('The MenuItemsController', function() {
  'use strict';

  var menuItemsController;
  var menuItemsByCategory  = {
    menu_items: [
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
    ],
    category: {
      "short_name": "L",
      "name": "Lunch",
      "special_instructions": "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll."
    }
  };
  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('public');

    // Load any dependencies
    inject(function ($injector) {
      var $controller = $injector.get('$controller');
      var $log = $injector.get('$log');

      // Instantiate controller
      menuItemsController = $controller('MenuItemsController', {
        $log: $log,
        menuItems: menuItemsByCategory
      });
    });
  });

  it('should initialize with menu items', function() {
    expect(menuItemsController).toBeDefined();
    expect(menuItemsController.menuItems).toEqual(menuItemsByCategory);
  });



});
