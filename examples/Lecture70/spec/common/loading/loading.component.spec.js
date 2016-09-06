describe('The loading component', function() {
  'use strict';

  var loadingComponent;
  var $rootScope;

  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('common');

    // Load any dependencies
    inject(function ($injector) {
      var $componentController = $injector.get('$componentController');
      $rootScope = $injector.get('$rootScope');

      /**
       * Creates a loading component.
       *
       * The first parameter designates the name of the component whos controller you are retrieving
       *
       * The second parameter allows you to inject controller locals. In this case, we include
       * a $rootScope.
       *
       * The third parameter is where you would include items in the `bindings` for a component. Since
       * we don't have any bindings here, we leave null.
       *
       * https://docs.angularjs.org/api/ngMock/service/$componentController
       */
      loadingComponent = $componentController('loading', {
        $rootScope: $rootScope
      }, null);

    });
  });

  it('should initialize and not show by default', function() {
    // Angular does not automatically call $onInit
    //
    // See the battle here
    // https://github.com/angular/angular.js/issues/14129
    loadingComponent.$onInit();

    // Once initialized, we expect show = false since that's what
    // we include in our $onInit()
    expect(loadingComponent.show).toBe(false);
  });


  it('should toggle the show property to show/hide an image', function() {
    loadingComponent.$onInit();

    // Ensure default state is false
    expect(loadingComponent.show).toBe(false);

    // Trigger event to show
    $rootScope.$emit('spinner:activate', {on: true});
    expect(loadingComponent.show).toBe(true);

    // Trigger event to hide
    $rootScope.$emit('spinner:activate', {on: false});
    expect(loadingComponent.show).toBe(false);
  });

});
