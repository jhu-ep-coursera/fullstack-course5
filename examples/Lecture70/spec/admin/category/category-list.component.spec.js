describe('The categoryList component', function() {
  'use strict';

  var categoryListComponent;
  var $rootScope;
  var $httpBackend;
  var ApiPath;
  var categoriesResponse = [
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

  ];

  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('admin');

    // Load any dependencies
    inject(function ($injector) {
      var $componentController = $injector.get('$componentController');
      var $log = $injector.get('$log');
      var MenuService = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      $rootScope = $injector.get('$rootScope');
      ApiPath = $injector.get('ApiPath');

      /**
       * Creates a categoryList component.
       *
       * https://docs.angularjs.org/api/ngMock/service/$componentController
       */
      categoryListComponent = $componentController('categoryList', {
        $log: $log,
        MenuService: MenuService
      }, null);

    });
  });

  it('should initialize and retrieve categories', function() {
    expect(categoryListComponent).toBeDefined();
    expect(categoryListComponent.$onInit).toBeDefined();
    $httpBackend.expectGET(ApiPath + '/categories.json').respond(categoriesResponse);

    // Since no categories have been retrieved, categories should not be defined
    expect(categoryListComponent.categories).not.toBeDefined();

    // Call component initializer
    categoryListComponent.$onInit();

    // Ensure mock http calls complete
    $httpBackend.flush();

    // Categories should now be populated
    expect(categoryListComponent.categories).toEqual(categoriesResponse);
  });



});
