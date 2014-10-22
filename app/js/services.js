'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('campsiteApp.services', []).
  value('version', '0.1');

var campsiteguideServices = angular.module('campsiteguideServices', ['ngResource']);

campsiteguideServices.factory('Campsite', ['$resource',
  function($resource){
    return $resource('campsites/:campsiteId.json', {}, {
      query: {method:'GET', params:{campsiteId:'campsites'}, isArray:true}
    });
  }]);