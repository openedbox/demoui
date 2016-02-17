(function () {
  'use strict';

  angular
    .module('demoui')
    .controller('newModuleCtrl', newModuleCtrl); //对应改名

  /** @ngInject */
  function newModuleCtrl(newModuleRepo) {
     var viewModel = this;    //定义视图模型 用于承载视图上需要显示的数据
     viewModel.customVariable = "this is custom variable blablabla";  //在视图模型增加一个变量

    newModuleRepo.all(function(remoteData){
      viewModel.orders = remoteData;
    });
  }
})();
