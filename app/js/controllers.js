'use strict';

/* Controllers */

angular.module('campsiteApp.controllers', [])
  .controller('CampSiteCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('campsites/campsites.json').success(function(data) {
	  $scope.campsites = data;
	});

  $scope.orderProp = 'state';
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
