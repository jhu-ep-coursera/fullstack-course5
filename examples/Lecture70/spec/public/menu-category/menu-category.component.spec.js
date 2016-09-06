describe('The menuCategory component', function() {
  'use strict';

  var menuCategoryComponent;
  var category =
    {
      "id": 61,
      "short_name": "L",
      "name": "Lunch",
      "special_instructions": "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.",
      "created_at": "2016-08-05T19:41:59.147Z",
      "updated_at": "2016-08-05T19:41:59.147Z"
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
      menuCategoryComponent = $componentController('menuCategory', null, {
        category: category
      });

    });
  });

  it('should initialize with category', function() {
    expect(menuCategoryComponent).toBeDefined();
    expect(menuCategoryComponent.category).toEqual(category);
  });



});
