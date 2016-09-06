describe('menucategories', function () {

  var menucategories;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module('MenuCategoriesApp');

    inject(function ($injector) {
      menucategories = $injector.get('MenuCategoriesService');
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiBasePath');
    });
  });

  it('should return categories list', function() {
    $httpBackend.whenGET(ApiBasePath + '/categories.json').respond(['Lunch', 'Dessert']);
    menucategories.getMenuCategories().then(function(response) {
      expect(response.data).toEqual(['Lunch', 'Dessert']);
    });
    $httpBackend.flush();
  });

});
