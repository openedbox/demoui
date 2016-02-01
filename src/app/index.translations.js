(function () {
  'use strict';

  angular
    .module('demoui')
    .config(config);


  /** @ngInject */
  function config($translateProvider) {

    $translateProvider
      .translations('zh_CN', {
      })
      .translations('en_US', {
      });

    $translateProvider.preferredLanguage('zh_CN');
    $translateProvider.useSanitizeValueStrategy('escape');

  }


})();





