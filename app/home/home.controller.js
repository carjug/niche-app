(function () {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['UserService', '$rootScope'];

  function HomeController(UserService, $rootScope) {
    var vm  = this;
    vm.user = $rootScope.globals.currentUser.username || null;

    $scope.user = vm.user
  //   vm.deleteUser = deleteUser;

    // initController();

    // function initController() {
    //     loadCurrentUser();
    // }

    // function loadCurrentUser() {
    //   UserService.GetByUsername($rootScope.globals.currentUser.username)
    //   .then(function (user) {
    //     vm.user = user;
    //   });
    // }

  //   function deleteUser(id) {
  //     UserService.Delete(id)
  //     .then(function () {
  //       loadAllUsers();
  //     });
  //   }
  }

})();
