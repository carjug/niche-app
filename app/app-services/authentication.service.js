(function () {
  'use strict';

  angular
    .module('app')
    .service('AuthenticationService', AuthenticationService);

  AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', 'UserService'];

  function AuthenticationService($http, $cookieStore, $rootScope, UserService) {
    var service = {};
    var url = "http://localhost:3000"

    service.Login            = Login;
    service.SetCredentials   = SetCredentials;
    service.ClearCredentials = ClearCredentials;

    return service;

    function Login(username, password, callback) {
      console.log(username, password)
      $http.post( url + '/login', {
          'username': username,
          'password': password
       })
       .success(function (response) {
           callback(response);
           // console.log(response)
      });
    }

    function SetCredentials(username, response) {
      var authdata = response.token
      console.log(authdata)
      $rootScope.globals = {
        currentUser: {
          username: username,
          authdata: authdata
        }
      };

      $http.defaults.headers.common['Authorization'] = 'Bearer' + authdata;
      $cookieStore.put('globals', $rootScope.globals);
    }

    function ClearCredentials() {
      $rootScope.globals = {};
      $cookieStore.remove('globals');
      $http.defaults.headers.common.Authorization = 'Bearer';
    }
  }

})();
