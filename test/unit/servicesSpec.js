'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('campsiteApp.services'));

  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });

  // load modules
  beforeEach(module('campsiteguideServices'));

  // Test service availability
  it('check the existence of Campsite factory', inject(function(Campsite) {
      expect(Campsite).toBeDefined();
    }));
});
