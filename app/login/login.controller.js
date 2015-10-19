(function () {
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', 'AuthenticationService'];

  function LoginController($location, AuthenticationService) {
    var vm   = this;
    vm.login = login;

    (function initController() {
      // reset login status
      AuthenticationService.ClearCredentials;
    })();

    function login(vm) {
    console.log(vm)
      vm.dataLoading = true;
      AuthenticationService.Login(vm.username, vm.password, function (response) {
        if (response.status == 200) {
          console.log( "login controller ",response)
          AuthenticationService.SetCredentials(vm.username, response);
          $location.path('/home');
        }
        else {
          vm.dataLoading = false;
        }
      });
    };
  }

})();
