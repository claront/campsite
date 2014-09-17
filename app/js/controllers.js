'use strict';

/* Controllers */

angular.module('campsiteApp.controllers', [])
//  .controller('CampSiteCtrl', ['$scope', function($scope) {
  .controller('CampSiteCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('campsites/campsites.json').success(function(data) {
	  $scope.campsites = data;
	});
/*  	$scope.campsites = [
	    {'name': 'Lambs Canyon',
	     'snippet': 'Tall green grass, beautiful, but freeway noise',
	 	 'state': 'Utah'},
	    {'name': 'Jordanell Resevoir',
	     'snippet': 'Nice view of the Resevoir and Deer Valley, no overnight camping allowed, but didn\'t stop me.',
	 	 'state': 'Utah'},
	    {'name': 'Church pavilion in Woodland, Utah',
	     'snippet': 'Cold night. No one kicked me out.',
	 	 'state': 'Colorado'}
  ];*/

  $scope.orderProp = 'state';
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