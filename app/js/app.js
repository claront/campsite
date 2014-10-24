'use strict';

alert( $.fn.jquery );
// Declare app level module which depends on filters, and services
angular.module('campsiteApp', [
  'ngRoute',
  'campsiteApp.filters',
  'campsiteApp.services',
  'campsiteApp.directives',
  'campsiteApp.controllers',
  'campsiteguideFilters',
  'campsiteguideServices',
  'campsiteguideAnimations'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'partials/partial1.html', 
    controller: 'CampSiteCtrl'});
  $routeProvider.when('/campsites/:campsiteId', {
    templateUrl: 'partials/campsite-detail.html', 
    controller: 'CampsiteDetailCtrl'});
  $routeProvider.when('/view2', {
    templateUrl: 'partials/partial2.html', 
    controller: 'MyCtrl2'});
  //commented out the .otherwise to enable the test/e2e/scenarios.js 
  //test to work for it('should render campsite specific links',...
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
