'use strict';

/* jasmine specs for controllers go here */
describe('CampSite controllers', function() {

  describe('CampSiteCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('campsiteApp'));
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
    var scope, $httpBackend, ctrl;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('campsites/xyz.json').respond({name:'campsite xyz'});

      $routeParams.campsiteId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('CampsiteDetailCtrl', {$scope: scope});
    }));


    it('should fetch campsite detail', function() {
      expect(scope.campsite).toBeUndefined();
      $httpBackend.flush();

      expect(scope.campsite).toEqual({name:'campsite xyz'});
    });
  });
});
