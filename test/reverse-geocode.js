'use strict';

let assert = require('assert'),
  reverse = require('../lib/reverse-geocode');

let usa = reverse.lookup(37.8072792, -122.4780652);

describe('lookup()', function() {
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
