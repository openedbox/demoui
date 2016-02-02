(function () {
  'use strict';

  angular
    .module('demoui')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('newmodule', {   //更改demo为newmodule
        url: '/newmodule',      //更改demo为newmodule 这个url将
        templateUrl: 'app/modules/newmodule/index.html', //指向我们的view
        controller:'newModuleCtrl', //控制器的名称
        controllerAs:'viewModel'    //别名
      });
  }
})();