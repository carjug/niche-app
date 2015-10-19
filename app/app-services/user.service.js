(function () {
  'use strict';

  angular
    .module('app')
    .service('UserService', UserService);

  UserService.$inject = ['$http'];
  function UserService($http) {
    var service = {};
    var url = "http://localhost:3000"

    // service.Create = Create();
    // service.Update = Update();
    // service.Delete = Delete();

    return service;

    function Create(user) {
      return $http.post(url + '/users', user).then(handleSuccess, handleError('Error creating user'));
    }

    function Update(user) {
      return $http.put(url + '/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
    }

    function Delete(id) {
      return $http.delete(url + '/users/' + id).then(handleSuccess, handleError('Error deleting user'));
    }

    // private functions

    function handleSuccess(res) {
      return res.data;
    }

    function handleError(error) {
      return function () {
          return { success: false, message: error };
      };
    }
  }

})();
