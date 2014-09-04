'use strict';

/* Controllers */

angular.module('campsiteApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.phones = [
	    {'name': 'Nexus S',
	     'snippet': 'Fast just got faster with Nexus S.'},
	    {'name': 'Motorola XOOM™ with Wi-Fi',
	     'snippet': 'The Next, Next Generation tablet.'},
	    {'name': 'MOTOROLA XOOM™',
	     'snippet': 'The Next, Next Generation tablet.'}
  ];

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});