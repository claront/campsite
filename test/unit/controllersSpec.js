'use strict';

/* jasmine specs for controllers go here */
describe('CampSite controllers', function() {

  beforeEach(module('campsiteApp'));

  describe('CampSiteCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('campsites/campsites.json').
          respond([{name: 'Lambs Canyon'}, {name: 'Jordanell Resevoir'}]);

      scope = $rootScope.$new();
      ctrl = $controller('CampSiteCtrl', {$scope: scope});
    }));


    it('should create "campsites" model with 2 campsites fetched from xhr', function() {
      expect(scope.campsites).toBeUndefined();
      $httpBackend.flush();

      expect(scope.campsites).toEqual([{name: 'Lambs Canyon'},
                                       {name: 'Jordanell Resevoir'}]);
    });


    it('should ....', inject(function($controller) {
      //spec body
      var CampSiteCtrl = $controller('CampSiteCtrl', { $scope: {} });
      expect(CampSiteCtrl).toBeDefined();
    }));
  

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('state');
    });


    it('should ....', inject(function($controller) {
      //spec body
      var myCtrl2 = $controller('MyCtrl2', { $scope: {} });
      expect(myCtrl2).toBeDefined();
    }));
  });


  describe('CampsiteDetailCtrl', function(){
    // var scope, $httpBackend, ctrl;
    var scope, $httpBackend, ctrl,
        jordanellCampsiteData = function() {
          return {
            name: 'Jordanell Resevoir',
                images: ['image/url1.png', 'image/url2.png']
          }
        };

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('campsites/20130618-jordanell-resevoir.json').respond(jordanellCampsiteData());

      $routeParams.campsiteId = '20130618-jordanell-resevoir';
      scope = $rootScope.$new();
      ctrl = $controller('CampsiteDetailCtrl', {$scope: scope});
    }));


    it('should fetch campsite detail', function() {
      expect(scope.campsite).toBeUndefined();
      $httpBackend.flush();

      expect(scope.campsite).toEqual(jordanellCampsiteData());
    });
  });
});
