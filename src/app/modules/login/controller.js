(function () {
  'use strict';

  angular
    .module('demoui')
    .controller('loginCtrl', loginCtrl);

  /** @ngInject */
  function loginCtrl($scope, authService,$location) {
    $scope.localLogin = function () {
      authService.login($scope.username,$scope.password).then(function(){
        $location.path('/dashboard');
      });
    };
    $scope.localLogout = function () {
      authService.logout();
    };
  }
})();
