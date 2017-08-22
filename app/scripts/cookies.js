(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
            $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'templates/usernameModal.html',
                controller: 'usernameCtrl',
                controllerAs: 'usernameControl',
                backdrop: 'static',
                keyboard: false
            });
        }
    }
    angular
      .module('blocChat')
      .run(['$cookies', '$uibModal', BlocChatCookies]);
  })();
