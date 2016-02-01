/**
 * Created by dev on 15-7-17.
 */
(function () {
  'use strict';

  angular
    .module('demoui')
    .factory('demo1Repo', demo1Repo);

  /** @ngInject */
  function demo1Repo() {
    return {
      all: function (callback) {
        callback([{

        }]);

      }
    };
  }})();

