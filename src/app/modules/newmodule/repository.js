(function () {
  'use strict';

  angular
    .module('demoui')
    .factory('newModuleRepo', newModuleRepo);

  /** @ngInject */
  function newModuleRepo($http) {
    return {
      all: function (callback) {
        $http.get("http://localhost:9898/orders").success(function(data){
          callback(data);
        });
      }
    };
  }
})();

