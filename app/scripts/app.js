(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
      enabled: true,
      requireBase: false
  });

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'RoomCtrl as roomControl',
      templateUrl: '/templates/home.html',
      factory: 'MessageFactory as messageFactory'
    });
  }

  angular
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap','ngCookies' ])
    .config(config);
})();
