describe("Spec v2: ShoppingListController", function() {

  beforeEach(function () {
    module(function ($provide) {
      $provide.service('ShoppingListServiceErrorMock', function () {
        var service = this;
        service.addItem = function (name, quantity) {
          throw new Error("Test message.");
        };

        service.getItems = function () {
          return null;
        };
      });
    });

    module('ShoppingListApp');
  });

  var $controller;
  var shoppingListController;

  beforeEach(inject(function (_$controller_, ShoppingListServiceErrorMock) {
    $controller = _$controller_;

    shoppingListController =
      $controller('ShoppingListController',
                  {ShoppingListService: ShoppingListServiceErrorMock});

  }));

  it("should change error message in controller", function() {
    shoppingListController.addItem();
    expect(shoppingListController.errorMessage).toBe("Test message.");
  });

});
