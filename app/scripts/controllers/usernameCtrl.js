angular.module('blocChat')
  .controller('usernameCtrl', function($scope, $uibModalInstance, $cookies){
    var usernameControl = this;

    /*
       * @desc Holds the current username
       * @type string
       */
    usernameControl.username;

    // Controller submit function
    usernameControl.submit = function setUsername(username) {
      // Set newEntry = to the current cookie or null if no cookie present
      var newEntry = username || '';
      if( newEntry === '') {
          $uibModal.open({
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: 'templates/usernameModal.html',
              controller: 'usernameCtrl',
              controllerAs: 'usernameControl',
              backdrop: 'static',
              keyboard: false
          });
      } else {
          $cookies.put('blocChatCurrentUser', username);
          $uibModalInstance.close('set username');
      };
  }



});
