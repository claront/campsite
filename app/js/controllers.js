'use strict';

/* Controllers */

angular.module('campsiteApp.controllers', [])
  .controller('CampSiteCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('campsites/campsites.json').success(function(data) {
	  $scope.campsites = data;
	});

  $scope.orderProp = 'state';
  }])

  .controller('CampsiteDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('campsites/' + $routeParams.campsiteId + '.json').success(function(data) {
      $scope.campsite = data;
      $scope.mainImageUrl = data.images[0];
    });


    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }])

  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
