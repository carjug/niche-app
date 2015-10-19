(function () {
  'use strict';

  angular
    .module('app')
    .service('AuthenticationService', AuthenticationService);

  AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', 'UserService'];

  function AuthenticationService($http, $cookieStore, $rootScope, UserService) {
    var service = {};
    var url = "http://localhost:3000"

    service.Login            = Login();
    service.SetCredentials   = SetCredentials();
    service.ClearCredentials = ClearCredentials();

    return service;

    function Login(username, password, callback) {
      $http.post(url + '/login', { username: username, password: password })
       .success(function (response) {
           callback(response);
      });
    }

    function SetCredentials(username, password) {
      // don't know what the authdata will be
      var authdata = Bearer['token']

      $rootScope.globals = {
        currentUser: {
          username: username,
          authdata: authdata
        }
      };

      $http.defaults.headers.common['Authorization'] = 'Bearer' + token;
      $cookieStore.put('globals', $rootScope.globals);
    }

    function ClearCredentials() {
      $rootScope.globals = {};
      $cookieStore.remove('globals');
      $http.defaults.headers.common.Authorization = 'Bearer';
    }
  }

})();
