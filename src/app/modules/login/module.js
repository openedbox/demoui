(function () {
  'use strict';

  angular
    .module('demoui')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/modules/login/index.html',
        controller:'loginCtrl'
        
      });
  }
})();
