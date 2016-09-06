(function () {

angular.module('SimpleFormsApp',[]);

angular.module('SimpleFormsApp')
.controller('RegistrationController', RegistrationController);

function RegistrationController() {
  var reg = this;

  reg.submit = function () {
    reg.completed = true;
  };
}

})();
