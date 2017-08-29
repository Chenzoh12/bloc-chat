angular.module('blocChat')
  .controller('ModalInstanceCtrl', function($scope, $uibModalInstance){
    var modalControl = this;

    var newRoom = {
      newName: ''
    };
    // Controller submit function
    modalControl.submit = function createNewRoom(name) {
      // A new room object
      newRoom.newName = name;
      // Write the new room's name in the room list
      var updates = {};
      updates[ '/rooms/' + name ] = name;

      $uibModalInstance.close();
      return firebase.database().ref().update(updates);
    };

    modalControl.cancel = function (result) {
      $uibModalInstance.close();
    };

});
