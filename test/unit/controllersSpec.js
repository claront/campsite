'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('campsiteApp.controllers'));


  it('should ....', inject(function($controller) {
    //spec body
    var CampSiteCtrl = $controller('CampSiteCtrl', { $scope: {} });
    expect(CampSiteCtrl).toBeDefined();
  }));

  it('should ....', inject(function($controller) {
    //spec body
    var myCtrl2 = $controller('MyCtrl2', { $scope: {} });
    expect(myCtrl2).toBeDefined();
  }));
});
