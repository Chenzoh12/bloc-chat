(function() {
  function ModalInstanceCtrl($scope, $uibModalInstance) {
    var $ctrl = this;

    $ctrl.ok = function () {
      $uibModalInstance.close();
    };

    $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    }
  }
  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', ModalInstanceCtrl]);
})();
