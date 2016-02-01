(function () {
  'use strict';

  angular
    .module('demoui')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('demo1', {
        url: '/demo1',
        templateUrl: 'app/modules/demo1/index.html'
      });
  }
})();
