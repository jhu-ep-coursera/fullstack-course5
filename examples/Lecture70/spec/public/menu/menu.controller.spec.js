describe('The MenuController', function() {
  'use strict';

  var menuController;
  var menuCategories = [
    {
      "id": 61,
      "short_name": "L",
      "name": "Lunch",
      "special_instructions": "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.",
      "url": "https://david-chu-auth.herokuapp.com/categories/L.json"
    },
    {
      "id": 62,
      "short_name": "A",
      "name": "Soup",
      "special_instructions": "",
      "url": "https://david-chu-auth.herokuapp.com/categories/A.json"
    }
  ];

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
      menuController = $controller('MenuController', {
        $log: $log,
        menuCategories: menuCategories
      });
    });
  });

  it('should initialize with menu categories', function() {
    expect(menuController).toBeDefined();
    expect(menuController.menuCategories).toEqual(menuCategories);
  });



});
