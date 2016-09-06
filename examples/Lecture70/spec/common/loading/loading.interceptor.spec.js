describe('The loadingHttpInterceptor factory', function() {
  'use strict';

  var loadingHttpInterceptor;
  var $rootScope;
  var onBroadcastFunc;

  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('public');

    // Load any dependencies
    inject(function ($injector) {
      loadingHttpInterceptor = $injector.get('loadingHttpInterceptor');
      $rootScope = $injector.get('$rootScope');
    });

    // Set up a spy to watch when the method that we pass into $rootScope.$on() is
    // executed
    var funcToSpy = function (event, payload) {};
    onBroadcastFunc = jasmine.createSpy('onBroadcastFunc', funcToSpy);
  });

  it('should simulate 1 request and 1 response emitting a spinner:active event with on = true and on = false', function() {

    expect(loadingHttpInterceptor).toBeDefined();


    // Set up the listener for $on. onBroadcastFunc is the spy we created earlier that contains
    // additional methods that jasmine uses to track when it has been called
    $rootScope.$on('spinner:activate', onBroadcastFunc);

    // Simulate when the interceptor request() is executed
    loadingHttpInterceptor.request(null);

    // Ensure method we've been spying on has been called
    expect(onBroadcastFunc.calls.any()).toBe(true);

    // Ensure that the second argument from the $on function we passed in
    // has a property on and the value for on = true
    expect(onBroadcastFunc.calls.mostRecent().args[1].on).toBe(true);

    // Simulate when response() is executed
    loadingHttpInterceptor.response(null);

    // Ensure that second argument from $on function has a value of on = false
    expect(onBroadcastFunc.calls.mostRecent().args[1].on).toBe(false);
  });

  it('should simulate 1 request and 1 response error emitting a spinner:active event with on = true and on = false', function() {

    expect(loadingHttpInterceptor).toBeDefined();


    // Set up the listener for $on. onBroadcastFunc is the spy we created earlier that contains
    // additional methods that jasmine uses to track when it has been called
    $rootScope.$on('spinner:activate', onBroadcastFunc);

    // Simulate when the interceptor request() is executed
    loadingHttpInterceptor.request(null);

    // Ensure method we've been spying on has been called
    expect(onBroadcastFunc.calls.any()).toBe(true);

    // Ensure that the second argument from the $on function we passed in
    // has a property on and the value for on = true
    expect(onBroadcastFunc.calls.mostRecent().args[1].on).toBe(true);

    // Simulate when response() is executed
    loadingHttpInterceptor.responseError(null);

    // Ensure that second argument from $on function has a value of on = false
    expect(onBroadcastFunc.calls.mostRecent().args[1].on).toBe(false);
  });

});
