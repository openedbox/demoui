(function () {
  'use strict';

  angular
    .module('demoui')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('demo', {
        url: '/demo',
        templateUrl: 'app/modules/demo/index.html'
      });
  }
})();
