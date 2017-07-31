(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
      enabled: true,
      requireBase: false
  });

  $stateProvider
    .state('roomControl', {
      url: '/',
      controller: 'RoomCtrl as roomControl',
      templateUrl: '/templates/home.html'
    });
  }

  angular
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap' ])
    .config(config);
})();
