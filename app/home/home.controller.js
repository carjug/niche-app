(function () {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController)

  HomeController.$inject = ['UserService', '$rootScope', '$scope'];


  function HomeController(UserService, $rootScope, $scope) {
    var vm  = this;
    vm.user = $rootScope.globals.currentUser.username || null;

    $scope.user = vm.user;
    $scope.greeting = "Welcome, " + $scope.user + "!";
  }

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

})();
