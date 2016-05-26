'use strict';

let assert = require('assert'),
  reverse = require('../lib/reverse-geocode');

let city = reverse.lookup(37.8072792, -122.4780652);

describe('lookup()', function() {
  it('zipcode', function() {
    assert.equal(94129, city.zipcode);
  });
  it('state_abbr', function() {
    assert.equal('CA', city.state_abbr);
  });
  it('latitude', function() {
    assert.equal('37.799840', city.latitude);
  });
  it('longitude', function() {
    assert.equal('-122.46167', city.longitude);
  });
  it('city', function() {
    assert.equal('San Francisco', city.city);
  });
  it('state', function() {
    assert.equal('California', city.state);
  });
  it('distance', function() {
    assert.equal(1.6610566475026183, city.distance);
  });
});
