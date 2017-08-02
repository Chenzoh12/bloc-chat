(function() {
  function RoomCtrl(Room) {
    var roomControl = this;

    roomControl.roomList = Room.all;

    //Active room object
    roomControl.activeRoom = {};

    /**
    * @function setActiveRoom
    * @desc Sets active chat room to display title and content
    * @param
    */
    roomControl.setActiveRoom = function(room) {
      roomControl.activeRoom = room;
      console.log(roomControl.activeRoom.$value);
    };
  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
