/**
 * Created by dev on 15-7-17.
 */
(function () {
  'use strict';

  angular
    .module('demoui')
    .factory('demoRepo', demoRepo);

  /** @ngInject */
  function demoRepo() {
    return {
      all: function (callback) {
        callback([{

        }]);

      }
    };
  }})();

