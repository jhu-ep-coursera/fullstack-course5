(function () {
'use strict';

angular.module('Spinner')
.component('loadingSpinner', {
  templateUrl: 'src/spinner/loadingspinner.template.html',
  controller: SpinnerController
});


SpinnerController.$inject = ['$rootScope']
function SpinnerController($rootScope) {
  var $ctrl = this;

  var cancelListener = $rootScope.$on('shoppinglist:processing', function (event, data) {
    console.log("Event: ", event);
    console.log("Data: ", data);

    if (data.on) {
      $ctrl.showSpinner = true;
    }
    else {
      $ctrl.showSpinner = false;
    }
  });

  $ctrl.$onDestroy = function () {
    cancelListener();
  };

};

})();
