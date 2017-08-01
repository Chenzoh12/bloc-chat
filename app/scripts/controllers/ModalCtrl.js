angular.module('blocChat')
  .controller('ModalCtrl', function ($uibModal, $log, $document) {
    var $ctrl = this;

    $ctrl.animationsEnabled = true;

    $ctrl.open = function () {
      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'templates/newRoomModal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl',
      });
    };

    $ctrl.cancel = function (result) {
      $uibModal.dismiss('cancel');
    };

    $ctrl.submit = function () {

    };



});
