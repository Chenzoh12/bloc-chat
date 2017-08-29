angular.module('blocChat')
    .controller('RoomCtrl', function(Room, $scope, $uibModal, $log, $document, MessageFactory, $cookies){
        var roomControl = this;
        roomControl.messages = MessageFactory;
        roomControl.animationsEnabled = true;
        // Holds active room
        roomControl.activeRoom;
        roomControl.typedMessage = "";

        //Opens modal windown on button press
        roomControl.open = function () {
          $uibModal.open({
            //animation: roomControl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'templates/newRoomModal.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: 'modalControl',
          });
        };

        //Sets active room
        roomControl.setActiveRoom = function (activeRoom) {
            var activeRoomName = activeRoom;
            roomControl.activeRoom.name = activeRoomName.$value;
        };

        /*
        * @function newMessage
        * @desc Prepares a new chat message to be sent to current room
        */
        roomControl.newMessage = function() {

            //Obtain message to send
            var message = roomControl.typedMessage;
            if(!message || message === "") {
                alert("Please type a message to send");
                return null;
            }

            var currentUser = $cookies.get('blocChatCurrentUser');
            var currentTime = Date.now();

            //Create & send new message object
            var messageObj = {
                content: message,
                roomId: roomControl.activeRoom.$value,
                sentAt: currentTime,
                username: currentUser
            };

            roomControl.messages.send(messageObj);
            roomControl.typedMessage = "";
        };


        this.roomList = Room.all;
    });
