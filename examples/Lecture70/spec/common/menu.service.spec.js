describe('The menu service', function() {
  'use strict';

  var $httpBackend;
  var menuService;
  var ApiPath;

  // Sample data to mock http requests
  var testData = {
    allMenuItems: [
      {
        id: 1,
        short_name: "A1",
        name: "Egg Drop Soup",
        description: "chicken broth with egg drop",
        price_small: 2.25,
        price_large: 4.5,
        small_portion_name: "pint",
        large_portion_name: "quart",
        image_present: true
      },
      {
        id: 701,
        short_name: "C9",
        name: "Szechuan Chicken",
        description: "white meat chicken sauteed with carrots, celery, and bean sprouts in Szechuan sauce",
        price_small: 10.95,
        price_large: 14.95,
        small_portion_name: "pint",
        large_portion_name: "large",
        image_present: true
      }
    ],

    aCategory: {
      id: 61,
      short_name: "A",
      name: "Lunch",
      special_instructions: "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.",
      created_at: "2016-08-05T19:41:59.147Z",
      updated_at: "2016-08-05T19:41:59.147Z"
    },

    categories: [
      {
        id: 61,
        short_name: "L",
        name: "Lunch",
        special_instructions: "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.",
        url: "https://david-chu-auth.herokuapp.com/categories/L.json"
      },
      {
        id: 62,
        short_name: "A",
        name: "Soup",
        special_instructions: "",
        url: "https://david-chu-auth.herokuapp.com/categories/A.json"
      },
      {
        id: 63,
        short_name: "B",
        name: "Appetizers",
        special_instructions: "",
        url: "https://david-chu-auth.herokuapp.com/categories/B.json"
      }

    ],
    menuItem: {
      id: 658,
      short_name: "A1",
      name: "Won Ton Soup with Chicken",
      description: "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
      price_small: 2.55,
      price_large: 5,
      small_portion_name: "pint",
      large_portion_name: "quart",
      created_at: "2016-08-05T19:42:00.140Z",
      updated_at: "2016-08-06T11:25:51.229Z",
      category_short_name: "A",
      image_present: true
    }
  };

  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('common');

    // Load any dependencies
    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      menuService = $injector.get('MenuService');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should retrieve all menu items when no category code is specified', function() {
    $httpBackend.expectGET(ApiPath + '/menu_items.json').respond(testData.allMenuItems);
    menuService.getMenuItems(null).then(function(items) {
      expect(items).toEqual(testData.allMenuItems);
    });
    $httpBackend.flush();
  });

  it('should retrieve category information by category short name', function() {
    var categoryShortname = 'A';

    $httpBackend.expectGET(ApiPath + '/categories/' + categoryShortname + '.json').respond(testData.aCategory);
    menuService.getCategory(categoryShortname).then(function(category) {
      expect(category).toEqual(testData.aCategory);
    });
    $httpBackend.flush();
  });

  it('should retrieve an array of category information', function() {
    $httpBackend.expectGET(ApiPath + '/categories.json').respond(testData.categories);
    menuService.getCategories().then(function(categories) {
      expect(categories).toEqual(testData.categories);
    });
    $httpBackend.flush();
  });

  it('should retrieve menu item information by menu item short name', function() {
    var shortName = 'A1';
    $httpBackend.expectGET(ApiPath + '/menu_items/' + shortName + '.json').respond(testData.menuItem);
    menuService.getMenuItem(shortName).then(function(menuItem) {
      expect(menuItem).toEqual(testData.menuItem);
    });
    $httpBackend.flush();
  });
});
