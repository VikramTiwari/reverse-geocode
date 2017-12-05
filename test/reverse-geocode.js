'use strict';

let assert = require('assert'),
  reverse = require('../lib/reverse-geocode');

describe('lookup()', function() {
  describe('Canada', function() {
    let ca = reverse.lookup(50.2343, -110.3438, reverse.COUNTRIES.CANADA);
    console.log(reverse.lookup(50.447444, -104.418513, reverse.COUNTRIES.CANADA));

    it('postalCode', function() {
      assert.equal('T1A', ca.zipcode);
    });
    it('state_abbr', function() {
      assert.equal('AB', ca.state_abbr);
    });
    it('latitude', function() {
      assert.equal(50.0816, ca.latitude);
    });
    it('longitude', function() {
      assert.equal(-110.5788, ca.longitude);
    });
    it('city', function() {
      assert.equal('Medicine Hat', ca.city);
    });
    it('province', function() {
      assert.equal('Alberta', ca.state);
    });
    it('distance', function() {
      assert.equal(23.844762255637427, ca.distance);
    });
  });

  describe('USA', function() {
    let usa = reverse.lookup(37.8072792, -122.4780652, reverse.COUNTRIES.USA);
    it('zipcode', function() {
      assert.equal(94129, usa.zipcode);
    });
    it('state_abbr', function() {
      assert.equal('CA', usa.state_abbr);
    });
    it('latitude', function() {
      assert.equal('37.799840', usa.latitude);
    });
    it('longitude', function() {
      assert.equal('-122.46167', usa.longitude);
    });
    it('city', function() {
      assert.equal('San Francisco', usa.city);
    });
    it('state', function() {
      assert.equal('California', usa.state);
    });
    it('distance', function() {
      assert.equal(1.6610566475026183, usa.distance);
    });
  });

  describe('Unhandled', function() {
    it('Australia', function() {
      assert.equal(undefined, reverse.lookup(50.3493, 49.29349, 'AU'));
    });
  });
});
