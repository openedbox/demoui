(function () {
  'use strict';

  angular
    .module('demoui')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider, $locationProvider,$urlRouterProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    //httpProvider config
    $httpProvider.defaults.useXDomain = true;


    //html5 config
    $locationProvider.html5Mode(true).hashPrefix('!');

    //default path
    $urlRouterProvider.otherwise('/demo');

  }

})();
