describe('shoppingList component', function() {
  var $componentController;

  beforeEach(module('ShoppingListComponentApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should detect no cookies in its list', function() {
    // Pass bindings that are needed for the test
    var bindings = {items: [{name: 'item 1', quantity: "1"}]};
    var ctrl = $componentController('shoppingList', {$element: null}, bindings);

    var cookiesInList = ctrl.cookiesInList();
    expect(cookiesInList).toEqual(false);
  });


  it('should detect cookies in its list', function() {
    // Pass bindings that are needed for the test
    var bindings = {items: [{name: '2 cookies', quantity: "1"}]};
    var ctrl = $componentController('shoppingList', {$element: null}, bindings);

    var cookiesInList = ctrl.cookiesInList();
    expect(cookiesInList).toEqual(true);
  });

});
