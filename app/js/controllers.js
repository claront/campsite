'use strict';

/* Controllers */

angular.module('campsiteApp.controllers', [])
  .controller('CampSiteCtrl', ['$scope', 'Campsite', function($scope, Campsite) {
    $scope.campsites = Campsite.query();

  	$scope.orderProp = 'state';
  }])

  .controller('CampsiteDetailCtrl', ['$scope', '$routeParams', 'Campsite',
  function($scope, $routeParams, Campsite) {
    $scope.campsite = Campsite.get({campsiteId: $routeParams.campsiteId}, function(campsite) {
      $scope.mainImageUrl = campsite.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }])

  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
