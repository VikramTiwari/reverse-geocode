'use strict';

let assert = require('assert'),
  reverse = require('../lib/reverse-geocode');

describe('lookup()', function() {
  describe('USA', function() {
    let usa = reverse.lookup(37.8072792, -122.4780652, 'US');
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

  describe('Canada', function() {
    let ca = reverse.lookup(50.2343, -110.3438, 'CA');

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

  describe('Australia', function() {
    let au = reverse.lookup(-34.988328, 138.515406, 'AU');

    it('zipcode', function() {
      assert.equal(5045, au.zipcode);
    });
    it('state_abbr', function() {
      assert.equal('SA', au.state_abbr);
    });
    it('latitude', function() {
      assert.equal('-34.9833', au.latitude);
    });
    it('longitude', function() {
      assert.equal(138.5167, au.longitude);
    });
    it('city', function() {
      assert.equal('Glenelg Jetty Road', au.city);
    });
    it('state', function() {
      assert.equal('South Australia', au.state);
    });
    it('distance', function() {
      assert.equal(0.5713811323631017, au.distance);
    });
  });

  describe('Unhandled', function() {
    it('Doesn\'t Exist', function() {
      assert.equal(undefined, reverse.lookup(56.029037, 92.880102, 'RU'));
    });
  });
});
