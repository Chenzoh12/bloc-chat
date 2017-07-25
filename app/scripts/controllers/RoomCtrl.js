(function() {
  function RoomCtrl(Room) {
    this.roomList = Room();
  }
  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
