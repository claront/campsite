'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  var scope, ctrl;

  beforeEach(module('campsiteApp.controllers'));

  it('should ....', inject(function($controller) {
    //spec body
    var CampSiteCtrl = $controller('CampSiteCtrl', { $scope: {} });
    expect(CampSiteCtrl).toBeDefined();
  }));

  it('should create "campsites" model with 3 campsites', inject(function($controller) {
    scope = {};
    ctrl = $controller('CampSiteCtrl', {$scope:scope});

    expect(scope.campsites.length).toBe(3);
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
