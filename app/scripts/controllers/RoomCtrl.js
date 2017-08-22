angular.module('blocChat')
    .controller('RoomCtrl', function(Room, $scope, $uibModal, $log, $document, MessageFactory, $cookies){
        var roomControl = this;
        roomControl.messages = MessageFactory;
        roomControl.animationsEnabled = true;
        roomControl.activeRoom = {
            name: ""
        }
        //Opens modal windown on button press
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

        //Sets active room
        roomControl.setActiveRoom = function (room) {
            var activeRoomName = room.$value;
            roomControl.activeRoom.name = activeRoomName;
        };
        this.roomList = Room.all;
    });
