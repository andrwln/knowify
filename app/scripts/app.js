'use strict';

/**
 * @ngdoc overview
 * @name knowifyTestApp
 * @description
 * # knowifyTestApp
 *
 * Main module of the application.
 */
angular
  .module('knowifyTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngMockE2E',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
