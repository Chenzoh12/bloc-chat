angular.module('blocChat')
    .controller('RoomCtrl', function(Room, $uibModal, $log, $document){
        var roomControl = this;
        roomControl.animationsEnabled = true;

        roomControl.open = function () {
          var modalInstance = $uibModal.open({
            animation: roomControl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'templates/newRoomModal.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: 'modalControl',
          });
        };

        this.roomList = Room.all;
    });
