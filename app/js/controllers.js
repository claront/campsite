'use strict';

/* Controllers */

angular.module('campsiteApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.campsites = [
	    {'name': 'Lambs Canyon',
	     'snippet': 'Tall green grass, beautiful, but freeway noise'},
	    {'name': 'Jordanell Resevoir',
	     'snippet': 'Nice view of the Resevoir and Deer Valley, no overnight camping allowed.'},
	    {'name': 'Church pavilion in Woodland, Utah',
	     'snippet': 'Cold night. No one kicked me out.'}
  ];

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);

/*
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
*/