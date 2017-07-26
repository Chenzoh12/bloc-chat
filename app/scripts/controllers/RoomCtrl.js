(function() {
  function RoomCtrl(Room) {
    this.roomList = Room;
    //alert(this.roomList);
  }
  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
