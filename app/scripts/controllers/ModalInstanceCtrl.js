angular.module('blocChat')
  .controller('ModalInstanceCtrl', function($scope, $uibModalInstance){
    var $ctrl = this;
    // Get a reference to the database service make available to whole controller
    var database = firebase.database();

    var newRoom = {
      newName: 'Room'
    };
    // Controller submit function
    $ctrl.submit = function createNewRoom(name) {
      // A new room object
      newRoom.newName = name;
      // Write the new room's name in the room list
      var updates = {};
      updates[ '/rooms/' + name ] = name;

      $uibModalInstance.close();
      return firebase.database().ref().update(updates);
    };

    $ctrl.cancel = function (result) {
      $uibModalInstance.close();
    };

});
