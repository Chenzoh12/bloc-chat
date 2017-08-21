angular.module('blocChat')
    .factory('MessageFactory', function ($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        /*
        * @function getByRoomId
        * @desc Queries for the messages of the given roomId, and saves them to Message.all
        * @param {String} roomId
        */
        Message.getByRoomId = function(roomId) {
            var roomRef = ref.orderByChild("roomId").equalTo(roomId);
            var roomMessages = $firebaseArray(roomRef);

            Message.all = roomMessages;
        };

    return Message;
    });
